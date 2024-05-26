import { log } from "console";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Cookies from "js-cookie";
import { useQueryClient } from "@tanstack/react-query";

interface AuthContext {
  isLogged: boolean;
  logout: () => void;
  login: (token: string) => void;
  getToken: () => string | undefined;
}

export const AuthContext = createContext<AuthContext | null>(null);

const checkIsLogged = () => {
  const jwt = Cookies.get("jwt");

  return !!jwt;
};

const login = (token: string) => {
  if (typeof window !== "undefined") {
    Cookies.set("jwt", token);
    window.dispatchEvent(new StorageEvent("authStorage"));
  }
};

const getToken = () => {
  return Cookies.get("jwt");
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    const handleAuthState = () => {
      const logged = checkIsLogged();
      setIsLogged(logged);
    };
    setIsLogged(checkIsLogged());
    window.addEventListener("authStorage", handleAuthState);
    return () => window.removeEventListener("authStorage", handleAuthState);
  }, []);

  const logout = useCallback(() => {
    queryClient.removeQueries({ queryKey: ["login"], exact: true });
    queryClient.removeQueries({ queryKey: ["userData"], exact: true });

    Cookies.remove("jwt");
    window.dispatchEvent(new StorageEvent("authStorage"));
  }, [queryClient]);

  const providerValue: AuthContext = useMemo(
    () => ({ login, logout, isLogged, getToken }),
    [isLogged, logout]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
