import { createContext, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";

interface AuthContext {
  isLogged: boolean;
  logout: () => void;
  login: (token: string) => void;
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

const logout = () => {
  Cookies.remove("jwt");
  window.dispatchEvent(new StorageEvent("authStorage"));
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const handleAuthState = () => {
      const logged = checkIsLogged();
      // console.log(logged);
      setIsLogged(logged);
    };
    setIsLogged(checkIsLogged());
    window.addEventListener("authStorage", handleAuthState);
    return () => window.removeEventListener("authStorage", handleAuthState);
  }, []);

  const providerValue: AuthContext = useMemo(
    () => ({ login, logout, isLogged }),
    [isLogged]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
