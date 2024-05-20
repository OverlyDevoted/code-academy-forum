import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import React, { useRef } from "react";

export const LoginForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    if (!emailInputRef) return;
    console.log(emailInputRef.current?.value, passwordInputRef.current?.value);
  };

  return (
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
  );
};
