import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function HomePage() {
  return (
    <main>
      <ProtectedRoute>
        <Link href={"/signup"}>Register</Link>
        <Link href={"/login"}>Login</Link>
      </ProtectedRoute>
    </main>
  );
}
