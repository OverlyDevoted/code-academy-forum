import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export const LoginForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    if (!emailInputRef) return;
    console.log(emailInputRef.current?.value, passwordInputRef.current?.value);
  };

  return (
    <>
      <form>
        <h1>Login</h1>
        <p>Start your coding journey now</p>
        <div>
          <Input
            placeholder="email"
            id="email"
            ref={emailInputRef}
            type="email"
          />
          <Input
            placeholder="password"
            id="password"
            ref={passwordInputRef}
            type="password"
          />
        </div>
        <Button
          label="Login"
          onClick={(e) => {
            handleLogin();
          }}
        />
      </form>
      <p>
        Don&apos;t have an account yet?{" "}
        <Link href={"/signup"}>Sign up here!</Link>
      </p>
    </>
  );
};
