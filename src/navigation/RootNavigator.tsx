import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StorageKey } from '@constants';
import { AskQuestionScreen, LoginScreen, QuestionDetailScreen } from '@screens';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { loadAuth } from '@store/slice/auth/authSlice';
import { loadQuestions } from '@store/slice/question/questionSlice';
import { RootStackParamList } from '@type/navigation';
import { storeDataStorage } from '@utils/storage';
import MainTabNavigator from './tab/MainTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const questions = useAppSelector((state) => state.question.questions);

  useEffect(() => {
    dispatch(loadAuth());
    dispatch(loadQuestions());
  }, [dispatch]);

  useEffect(() => {
    storeDataStorage(StorageKey.QUESTIONS, questions);
  }, [questions]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!token ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <Stack.Group>
          <Stack.Screen name="MainTab" component={MainTabNavigator} />
          <Stack.Screen name="AskQuestion" component={AskQuestionScreen} />
          <Stack.Screen
            name="QuestionDetail"
            component={QuestionDetailScreen}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
