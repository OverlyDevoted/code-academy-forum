import { BASE_URL } from "@/constants/Helper.constants";
import { ErrorType } from "@/types/Fetch.types";

export const deleteData = async <RESPONSE_TYPE,>(
  path: string,
  token: string | undefined
): Promise<RESPONSE_TYPE> => {
  if (!token) throw new Error("Must be authorized to delete data");

  const res = await fetch(`${BASE_URL}${path}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const data: RESPONSE_TYPE | ErrorType = await res.json();
  if (res.ok) return data as RESPONSE_TYPE;
  const { message: errorMessage } = data as ErrorType;
  throw new Error(errorMessage);
};
