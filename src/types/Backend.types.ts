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
