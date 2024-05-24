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
}

export interface QuestionsResponse {
  questions: QuestionServer[];
}

export type Question = Omit<QuestionServer, "category_id"> & {
  category: Category;
};

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
