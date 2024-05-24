import React, { useRef, useState } from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { LoginErrorStates } from "./LoginForm.types";
import {
  validateEmail,
  validatePassword,
} from "../../../layouts/AuthLayout/helpers/validationHelpers";
import { useAuth } from "@/hooks/useAuth";
import styles from "./LoginForm.module.css";

const cx = classNames.bind(styles);

const handleLogin = async (email: string, password: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await res.json();
  if (res.ok) return data;
  throw new Error(data.message);
};

const handleValidation = (
  email: string,
  password: string
): LoginErrorStates => {
  const errorState: LoginErrorStates = {
    email: "",
    password: "",
  };

  errorState.email = validateEmail(email);
  errorState.password = validatePassword(password);

  return errorState;
};

const initialErrorState: LoginErrorStates = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const { login } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errorState, setErrorState] =
    useState<LoginErrorStates>(initialErrorState);

  const { data, isLoading, isRefetching, refetch, isError, error } = useQuery({
    queryKey: ["login"],
    queryFn: () => {
      const email = emailRef.current?.value ?? "";
      const password = passwordRef.current?.value ?? "";
      return handleLogin(email, password);
    },
    enabled: false,
    retry: false,
  });

  const handleLoginSubmit = async () => {
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const errors = handleValidation(email, password);

    if (Object.values(errors).some((error) => error)) setErrorState(errors);
    else {
      setErrorState(initialErrorState);
      try {
        await refetch({ throwOnError: true });
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (!!data) {
    // console.log(data);
    login(data.jwtToken);
  }

  return (
    <>
      <form className={cx("container")}>
        <h1>Login</h1>
        <p>Start your coding journey now</p>
        <Input
          placeholder="email"
          id="email"
          ref={emailRef}
          type="email"
          error={errorState.email}
        />
        <Input
          placeholder="password"
          id="password"
          ref={passwordRef}
          type="password"
          error={errorState.password}
        />
        <Button
          label="Login"
          onClick={(e) => {
            handleLoginSubmit();
          }}
          isLoading={isRefetching || isLoading}
        />
        {error && (!isRefetching || isLoading) && (
          <p className={cx("container__register-error")}>{error.message}</p>
        )}
      </form>
      <p>
        Don&apos;t have an account yet?{" "}
        <Link href={"/signup"}>Sign up here!</Link>
      </p>
    </>
  );
};
