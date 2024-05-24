import { useContext } from "react";
import { CategoryDataContext } from "@/utils/CategoryContext";

export const useCategories = () => {
  const context = useContext(CategoryDataContext);
  if (!context)
    throw new Error(
      "Use useCategories hook inside CategoryDataContext provider"
    );
  return context;
};
