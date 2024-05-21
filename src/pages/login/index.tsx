import React from "react";
import { AuthPage } from "@/components/AuthPage";
import { LoginForm } from "@/components/AuthPage/LoginForm";

const LoginPage = () => {
  return (
    <AuthPage>
      <LoginForm />
    </AuthPage>
  );
};

export default LoginPage;
