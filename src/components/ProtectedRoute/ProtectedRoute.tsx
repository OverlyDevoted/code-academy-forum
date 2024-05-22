import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthPage?: boolean;
}

const ProtectedRoute = ({ children, isAuthPage }: ProtectedRouteProps) => {
  const router = useRouter();
  const { isLogged } = useAuth();

  useEffect(() => {
    if (isAuthPage && isLogged) router.push("/");
    if (!isAuthPage && !isLogged) router.push("/login");
  });

  return <>{children}</>;
};

export default ProtectedRoute;
