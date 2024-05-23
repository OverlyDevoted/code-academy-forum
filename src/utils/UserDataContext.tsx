import Cookies from "js-cookie";
import { createContext, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/types/User.types";
import { useAuth } from "@/hooks/useAuth";

interface UserDataContext {
  userData: User | undefined;
  isError: boolean;
  isFetched: boolean;
}

interface UserDataContextProps {
  children: React.ReactNode;
}

export const UserDataContext = createContext<UserDataContext | null>(null);

const getUserData = async () => {
  const res = await fetch("http://localhost:8080/user", {
    headers: {
      Authorization: Cookies.get("jwt") ?? "",
    },
  });
  const { user } = await res.json();
  if (res.ok) {
    const userData: User = {
      id: user.id,
      createdAt: user.createdAt,
      email: user.email,
      first_name: user.first_name,
      second_name: user.second_name,
    };
    return userData;
  }
  throw new Error(user.message);
};

export const UserDataProvider = ({ children }: UserDataContextProps) => {
  const { isLogged } = useAuth();
  const { data, isError, isFetched, refetch } = useQuery({
    queryKey: ["userData"],
    queryFn: getUserData,
    enabled: false,
  });

  useEffect(() => {
    if (isLogged) refetch();
  }, [isLogged, refetch]);

  const providerValue: UserDataContext = useMemo(
    () => ({
      userData: data,
      isError,
      isFetched,
    }),
    [data, isError, isFetched]
  );
  return (
    <UserDataContext.Provider value={providerValue}>
      {children}
    </UserDataContext.Provider>
  );
};
