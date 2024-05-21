import React from "react";
import { AuthPage } from "@/components/AuthPage";
import { RegisterForm } from "@/components/AuthPage/RegisterForm";

const SignupPage = () => {
  return (
    <AuthPage>
      <RegisterForm />
    </AuthPage>
  );
};

export default SignupPage;
