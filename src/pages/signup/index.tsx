import React from "react";
import { AuthLayout } from "@/layouts/AuthLayout";
import { RegisterForm } from "@/components/AuthComponents";

const SignupPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default SignupPage;
