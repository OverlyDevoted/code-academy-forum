import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthPage?: boolean;
}

const ProtectedRoute = ({ children, isAuthPage }: ProtectedRouteProps) => {
  const router = useRouter();
  const { isLogged } = useAuth();

  if (isAuthPage && isLogged) router.push("/");
  if (!isAuthPage && !isLogged) router.push("/login");

  return <>{children}</>;
};

export default ProtectedRoute;
