import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { Button, Text, View } from '@components';
import { useInset } from '@hooks';
import { RootState } from '@store/store';
import { Question } from '@type/models/question';
import { MainTabParamList, RootStackParamList } from '@type/navigation';
import QuestionItem from './components/QuestionItem';
import styles from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { top } = useInset();

  const { questions } = useSelector((state: RootState) => state.question);

  const handlePressItem = (item: Question) => {
    navigation.navigate('QuestionDetail', { id: item.id });
  };

  const renderItem: ListRenderItem<Question> = ({ item }) => {
    return <QuestionItem item={item} onPress={handlePressItem} />;
  };

  const renderEmptyComponent = () => (
    <View flexGrow={1} alignItems="center" justifyContent="center">
      <Text center type="body1Regular" color="NEUTRAL_70">
        No questions yet. Be the first to ask!
      </Text>
    </View>
  );

  return (
    <View style={styles.container} paddingTop={top}>
      <View style={styles.header}>
        <Text type="headingS" color="NEUTRAL_90">
          Top Questions
        </Text>
        <Button
          label="Ask Question"
          height={36}
          width={100}
          typeText="buttonSRegular"
          onPress={() => {
            navigation.navigate('AskQuestion');
          }}
        />
      </View>

      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
