import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthPage?: boolean;
  isAuthorizedPage?: boolean;
}

const ProtectedRoute = ({
  children,
  isAuthPage,
  isAuthorizedPage,
}: ProtectedRouteProps) => {
  const router = useRouter();
  const { isLogged } = useAuth();

  useEffect(() => {
    if (isAuthPage && isLogged) router.push("/");
    if (isAuthorizedPage && !isLogged) router.push("/");
  });

  return <>{children}</>;
};

export default ProtectedRoute;
