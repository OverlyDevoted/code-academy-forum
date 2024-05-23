import { useContext } from "react";
import { UserDataContext } from "@/utils/UserDataContext";

export const useUserDatta = () => {
  const context = useContext(UserDataContext);
  if (!context)
    throw new Error(
      "User data provider must be used inside the User data provider"
    );
  return context;
};
