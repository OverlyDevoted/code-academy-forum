import { useContext } from "react";
import { AuthContext } from "@/utils/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Use useAuth hook inside AuthContext provider");
  return context;
};
