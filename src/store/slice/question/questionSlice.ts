import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StorageKey } from '@constants';
import { Question, Comment, QuestionStatus } from '@type/models/question';
import { getDataStorage } from '@utils/storage';
import { AppDispatch } from '../../store';

interface QuestionState {
  questions: Question[];
}

const initialState: QuestionState = {
  questions: [
    {
      id: '1',
      title: 'How to patch KDE2 under FreeBSD?',
      description:
        'I am trying to patch KDE2 under FreeBSD but I am stuck. Can anyone help?',
      status: 'open',
      createdAt: new Date().toISOString(),
      authorId: 'user1',
      authorName: 'Alex',
      comments: [
        {
          id: 'c1',
          content: 'Have you tried turning it off and on again?',
          authorId: 'user2',
          authorName: 'Bob',
          createdAt: new Date().toISOString(),
        },
      ],
    },
    {
      id: '2',
      title: 'What is the meaning of life?',
      description: 'Just wondering if anyone has figured this out yet.',
      status: 'answered',
      createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      authorId: 'user3',
      authorName: 'Charlie',
      comments: [],
    },
    {
      id: '3',
      title: 'React Native vs Flutter',
      description: 'Which one is better for a simple Q&A app?',
      status: 'closed',
      createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      authorId: 'user1',
      authorName: 'Alex',
      comments: [],
    },
  ],
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.unshift(action.payload);
    },
    updateQuestion: (
      state,
      action: PayloadAction<Partial<Question> & { id: string }>,
    ) => {
      const index = state.questions.findIndex(
        (q) => q.id === action.payload.id,
      );
      if (index !== -1) {
        state.questions[index] = {
          ...state.questions[index],
          ...action.payload,
        };
      }
    },
    deleteQuestion: (state, action: PayloadAction<string>) => {
      state.questions = state.questions.filter((q) => q.id !== action.payload);
    },
    updateQuestionStatus: (
      state,
      action: PayloadAction<{ id: string; status: QuestionStatus }>,
    ) => {
      const question = state.questions.find((q) => q.id === action.payload.id);
      if (question) {
        question.status = action.payload.status;
      }
    },
    addComment: (
      state,
      action: PayloadAction<{ questionId: string; comment: Comment }>,
    ) => {
      const question = state.questions.find(
        (q) => q.id === action.payload.questionId,
      );
      if (question) {
        question.comments.push(action.payload.comment);
      }
    },
    editComment: (
      state,
      action: PayloadAction<{
        questionId: string;
        commentId: string;
        content: string;
      }>,
    ) => {
      const question = state.questions.find(
        (q) => q.id === action.payload.questionId,
      );
      if (question) {
        const comment = question.comments.find(
          (c) => c.id === action.payload.commentId,
        );
        if (comment) {
          comment.content = action.payload.content;
          comment.updatedAt = new Date().toISOString();
        }
      }
    },
  },
});

export const {
  setQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
  updateQuestionStatus,
  addComment,
  editComment,
} = questionSlice.actions;

export const loadQuestions = () => async (dispatch: AppDispatch) => {
  try {
    const stored = await getDataStorage<Question[]>(StorageKey.QUESTIONS);
    if (stored && Array.isArray(stored)) {
      dispatch(setQuestions(stored));
    }
  } catch {
    //
  }
};

export default questionSlice.reducer;
