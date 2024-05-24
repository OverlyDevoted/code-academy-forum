import { BASE_URL } from "@/constants/Helper.constants";
import { ErrorType } from "@/types/Fetch.types";

export const fetchData = async <T>(path: string) => {
  const res = await fetch(`${BASE_URL}${path}`);
  const data: T | ErrorType = await res.json();
  if (res.ok) return data as T;
  const { message: errorMessage } = data as ErrorType;
  throw new Error(errorMessage);
};
