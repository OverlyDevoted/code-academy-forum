import React from "react";
import { AuthLayout } from "@/layouts/AuthLayout";
import { RegisterForm } from "@/layouts/AuthLayout/components/RegisterForm";

const SignupPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default SignupPage;
