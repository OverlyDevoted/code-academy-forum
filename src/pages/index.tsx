import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Link href={"/signup"}>Register</Link>
      <Link href={"/login"}>Login</Link>
    </main>
  );
}
