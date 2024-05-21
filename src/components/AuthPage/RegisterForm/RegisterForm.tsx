import React, { useCallback, useRef, useState } from "react";
import classNames from "classnames/bind";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Link from "next/link";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { RegisterErrorStates } from "./RegisterForm.types";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../helpers/validationHelpers";
import styles from "./RegisterForm.module.css";

const cx = classNames.bind(styles);

const handleRegistration = async (
  firstName: string,
  secondName: string,
  email: string,
  password: string
) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: firstName,
      second_name: secondName,
      email,
      password,
    }),
  });
  const data = await res.json();
  if (res.ok) return data;
  throw new Error(data.message);
};

const handleValidation = (
  firstName: string,
  secondName: string,
  email: string,
  password: string
): RegisterErrorStates => {
  const errorState: RegisterErrorStates = {
    email: "",
    firstName: "",
    password: "",
    secondName: "",
  };

  errorState.firstName = validateName(firstName, "First name");
  errorState.secondName = validateName(secondName, "Second name");
  errorState.email = validateEmail(email);
  errorState.password = validatePassword(password);

  return errorState;
};

const initialErrorState = {
  email: "",
  firstName: "",
  password: "",
  secondName: "",
};

export const RegisterForm = () => {
  const router = useRouter();
  const [errorState, setErrorState] =
    useState<RegisterErrorStates>(initialErrorState);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const secondNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const { isLoading, isRefetching, refetch, isError, error } = useQuery({
    queryKey: ["register"],
    queryFn: () => {
      const firstName = firstNameRef.current?.value ?? "";
      const secondName = secondNameRef.current?.value ?? "";
      const email = emailRef.current?.value ?? "";
      const password = passwordRef.current?.value ?? "";
      return handleRegistration(firstName, secondName, email, password);
    },
    enabled: false,
    retry: false,
  });

  const handleRegisterSubmit = useCallback(async () => {
    const firstName = firstNameRef.current?.value ?? "";
    const secondName = secondNameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    const errors = handleValidation(firstName, secondName, email, password);

    if (Object.values(errors).some((error) => error)) setErrorState(errors);
    else {
      setErrorState(initialErrorState);
      try {
        await refetch({ throwOnError: true });
        router.push("/login");
      } catch (e) {
        console.log(e);
      }
    }
  }, [refetch, router]);

  return (
    <>
      <form className={cx("container")}>
        <h1>Sign-up</h1>
        <p>And start your journey right away</p>
        <div className={cx("container__name-inputs")}>
          <Input
            id="first-name"
            placeholder="First Name"
            ref={firstNameRef}
            error={errorState.firstName}
          />
          <Input
            id="second-name"
            placeholder="Second Name"
            ref={secondNameRef}
            error={errorState.secondName}
          />
        </div>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          ref={emailRef}
          error={errorState.email}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
          error={errorState.password}
        />
        <Button
          type="submit"
          label="Register"
          onClick={(e) => {
            e.preventDefault();
            handleRegisterSubmit();
          }}
          isLoading={isRefetching || isLoading}
        />
        {error && (!isRefetching || isLoading) && (
          <p className={cx("container__register-error")}>{error.message}</p>
        )}
      </form>
      <p>
        Don&apos;t have an account yet? <Link href={"/login"}>Login here</Link>
      </p>
    </>
  );
};
