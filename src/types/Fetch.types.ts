export type FetchMethods = "POST" | "GET";

export interface FetchType {
  url: string;
  method?: string;
  body?: string;
  auth?: boolean;
}
