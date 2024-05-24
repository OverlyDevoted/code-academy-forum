import React from "react";
import { AuthLayout } from "@/layouts/AuthLayout";
import { LoginForm } from "@/layouts/AuthLayout/components/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
