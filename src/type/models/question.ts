export type QuestionStatus = 'open' | 'answered' | 'closed';

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  authorName: string; // Denormalized for simpler display
  createdAt: string;
  updatedAt?: string;
}

export interface Question {
  id: string;
  title: string;
  description: string;
  status: QuestionStatus;
  createdAt: string;
  updatedAt?: string;
  authorId: string;
  authorName: string; // Denormalized for simpler display
  comments: Comment[];
}
