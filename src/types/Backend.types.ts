export interface User {
  id: string;
  first_name: string;
  second_name: string;
  email: string;
  createdAt: string;
  hue: number;
}

export interface LoginData {
  message: string;
  jwtToken: string;
}

export type QuestionUser = Omit<User, "email"> & { updatedAt: string };

export interface QuestionServer {
  id: string;
  question_title: string;
  question_text: string;
  category_id: string;
  createdAt: string;
  updatedAt: string;
  user: QuestionUser;
  numberOfAnswers: number;
  user_id?: string;
}

export interface QuestionsResponse {
  questions: QuestionServer[];
}

export type Question = Omit<QuestionServer, "category_id"> & {
  category: Category;
};

export interface QuestionPost {}

export interface Category {
  id: string;
  category_name: string;
  createdAt: string;
  updatedAt: string;
  hue: number;
}

export interface Categories {
  categories: Category[];
}

export interface Answer {
  id: string;
  answer_text: string;
  liked_by: string[];
  disliked_by: string[];
  createdAt: string;
  user: User;
}

export interface QuestionAnswerServer {
  question: QuestionServer;
  answers: Answer[];
}
