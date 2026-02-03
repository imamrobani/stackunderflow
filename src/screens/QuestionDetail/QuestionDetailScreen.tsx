import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { Button, Header, Text, View } from '@components';
import { useAppDispatch } from '@store/hooks';
import {
  addComment,
  editComment,
  updateQuestionStatus,
} from '@store/slice/question/questionSlice';
import { RootState } from '@store/store';
import { Comment, QuestionStatus } from '@type/models/question';
import { RootStackParamList } from '@type/navigation';
import AnswerInput from './components/AnswerInput';
import AnswerItem from './components/AnswerItem';
import AuthorActions from './components/AuthorActions';
import ModalEditAnswer from './components/ModalEditAnswer';
import QuestionSection from './components/QuestionSection';
import styles from './styles';

type Props = StackScreenProps<RootStackParamList, 'QuestionDetail'>;

const QuestionDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { id } = route.params;
  const dispatch = useAppDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const question = useSelector((state: RootState) =>
    state.question.questions.find((q) => q.id === id),
  );

  const [answerContent, setAnswerContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [editingComment, setEditingComment] = useState<Comment | null>(null);

  const isAuthor = user?.id === question?.authorId;

  const handleEditComment = (comment: Comment) => {
    setEditingComment(comment);
  };

  const handleSaveEditComment = async (content: string) => {
    if (!question) {
      return;
    }

    if (!content.trim()) {
      Alert.alert('Error', 'Answer content cannot be empty');
      return;
    }

    if (!editingComment) {
      return;
    }

    try {
      dispatch(
        editComment({
          questionId: question.id,
          commentId: editingComment.id,
          content,
        }),
      );
      setEditingComment(null);
    } catch {
      Alert.alert('Error', 'Failed to update answer');
    }
  };

  const handleEdit = () => {
    if (!question) {
      return;
    }

    navigation.navigate('AskQuestion', {
      question: {
        id: question.id,
        title: question.title,
        description: question.description,
      },
    });
  };

  const handleChangeStatus = () => {
    if (!question) {
      return;
    }

    const options: {
      text: string;
      status?: QuestionStatus;
      style?: 'cancel' | 'destructive';
    }[] = [{ text: 'Cancel', style: 'cancel' }];

    if (question.status !== 'open') {
      options.push({ text: 'Mark as Open', status: 'open' });
    }
    if (question.status !== 'answered') {
      options.push({ text: 'Mark as Answered', status: 'answered' });
    }
    if (question.status !== 'closed') {
      options.push({
        text: 'Close Question',
        status: 'closed',
        style: 'destructive',
      });
    }

    Alert.alert(
      'Change Status',
      'Select a new status for this question',
      options.map((opt) => ({
        text: opt.text,
        style: opt.style,
        onPress: opt.status
          ? () => {
              dispatch(
                updateQuestionStatus({ id: question.id, status: opt.status! }),
              );
            }
          : undefined,
      })),
    );
  };

  const handlePostAnswer = async () => {
    if (!user) {
      Alert.alert('Authentication Required', 'Please login to post an answer', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Login', onPress: () => navigation.navigate('Login') },
      ]);
      return;
    }

    if (!question) {
      return;
    }

    if (!answerContent.trim()) {
      Alert.alert('Error', 'Answer content cannot be empty');
      return;
    }

    setIsPosting(true);
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newComment: Comment = {
        id: `c-${Date.now()}`,
        content: answerContent,
        authorId: user.id,
        authorName: user.name,
        createdAt: new Date().toISOString(),
      };

      dispatch(addComment({ questionId: question.id, comment: newComment }));
      setAnswerContent('');
    } catch {
      Alert.alert('Error', 'Failed to post answer');
    } finally {
      setIsPosting(false);
    }
  };

  if (!question) {
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <Text>Question not found</Text>
        <Button label="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header label="Question Detail" onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Question Section */}
        <QuestionSection question={question} />

        {isAuthor && (
          <AuthorActions
            onEdit={handleEdit}
            onChangeStatus={handleChangeStatus}
          />
        )}

        {/* Comments Section */}
        <View>
          <Text style={styles.sectionTitle}>
            {question.comments.length} Answers
          </Text>

          {question.comments.length === 0 && (
            <View padding={16} alignItems="center">
              <Text type="body2Regular" color="NEUTRAL_50">
                No answers yet.
              </Text>
            </View>
          )}

          {question.comments.map((comment) => (
            <AnswerItem
              key={comment.id}
              comment={comment}
              currentUserId={user?.id}
              onEdit={handleEditComment}
            />
          ))}
        </View>

        {/* Your Answer Section */}
        <AnswerInput
          value={answerContent}
          onChangeText={setAnswerContent}
          onPost={handlePostAnswer}
          isPosting={isPosting}
        />

        <ModalEditAnswer
          visible={!!editingComment}
          initialContent={editingComment?.content || ''}
          onClose={() => setEditingComment(null)}
          onSave={handleSaveEditComment}
        />
      </ScrollView>
    </View>
  );
};

export default QuestionDetailScreen;
