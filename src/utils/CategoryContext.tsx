import { createContext, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Categories, Category } from "@/types/Backend.types";
import { fetchData } from "./fetchData";

interface CategoryDataContext {
  categoryData: Categories | undefined;
  isError: boolean;
  isFetched: boolean;
}

interface CategoryDataContextProps {
  children: React.ReactNode;
}

export const CategoryDataContext = createContext<CategoryDataContext | null>(
  null
);

const fetchCategory = () => {
  return fetchData<Categories>("category");
};

export const CategoryDataProvider = ({
  children,
}: CategoryDataContextProps) => {
  const { data, isError, isFetched } = useQuery({
    queryKey: ["categoryData"],
    queryFn: fetchCategory,
  });

  const providerValue: CategoryDataContext = useMemo(
    () => ({
      categoryData: data,
      isError,
      isFetched,
    }),
    [data, isError, isFetched]
  );
  return (
    <CategoryDataContext.Provider value={providerValue}>
      {children}
    </CategoryDataContext.Provider>
  );
};
