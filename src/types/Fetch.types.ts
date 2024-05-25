export type FetchMethods = "POST" | "GET";

export interface FetchType {
  url: string;
  method?: string;
  body?: string;
  auth?: boolean;
}

export type ErrorType = {
  message: string;
  error?: { [key: string]: string }[];
};
