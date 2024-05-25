import { BASE_URL } from "@/constants/Helper.constants";
import { ErrorType } from "@/types/Fetch.types";

export const postData = async <RESPONSE_TYPE, BODY_TYPE extends object>(
  path: string,
  body: BODY_TYPE,
  token: string | undefined
): Promise<RESPONSE_TYPE> => {
  if (!token) throw new Error("Must be authorized to post data");

  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data: RESPONSE_TYPE | ErrorType = await res.json();
  if (res.ok) return data as RESPONSE_TYPE;
  const { message: errorMessage } = data as ErrorType;
  throw new Error(errorMessage);
};
