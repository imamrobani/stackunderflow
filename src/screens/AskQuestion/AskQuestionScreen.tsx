import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Header, TextInput, TextInputArea, View } from '@components';
import { useForm } from '@hooks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  addQuestion,
  updateQuestion,
} from '@store/slice/question/questionSlice';
import { Question } from '@type/models/question';
import { RootStackParamList } from '@type/navigation';
import styles from './styles';

type Props = StackScreenProps<RootStackParamList, 'AskQuestion'>;

const AskQuestionScreen: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { question } = route.params || {};

  const isEdit = !!question;

  const [form, setForm] = useForm({
    title: question?.title || '',
    description: question?.description || '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.title || !form.description) {
      Alert.alert('Error', 'Title and description are required');
      return;
    }

    if (!user) {
      Alert.alert('Error', 'You must be logged in to post a question');
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (isEdit && question) {
        // Update existing question
        dispatch(
          updateQuestion({
            id: question.id,
            title: form.title,
            description: form.description,
            updatedAt: new Date().toISOString(),
          }),
        );
      } else {
        // Create new question
        const newQuestion: Question = {
          id: `q-${Date.now()}`,
          title: form.title,
          description: form.description,
          status: 'open',
          createdAt: new Date().toISOString(),
          authorId: user.id,
          authorName: user.name,
          comments: [],
        };
        dispatch(addQuestion(newQuestion));
      }

      navigation.goBack();
    } catch {
      Alert.alert('Error', 'Failed to save question');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        label={isEdit ? 'Edit Question' : 'Ask Question'}
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View gap={16}>
          <TextInput
            label="Title"
            placeholder="e.g. How to center a div?"
            value={form.title}
            onChangeText={(text) => setForm({ title: text })}
          />

          <TextInputArea
            label="Description"
            placeholder="Describe your problem in detail..."
            value={form.description}
            onChangeText={(text) => setForm({ description: text })}
            multiline
            numberOfLines={10}
            textAlignVertical="top"
          />

          <Button
            label={isEdit ? 'Save Changes' : 'Post Question'}
            onPress={handleSubmit}
            isLoading={loading}
            disabled={loading}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AskQuestionScreen;
