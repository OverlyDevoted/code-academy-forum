import React from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { CreateQuestionForm } from "@/components/CreateQuestionForm";

const CreatePage = () => {
  return (
    <MainLayout>
      <CreateQuestionForm />
    </MainLayout>
  );
};

export default CreatePage;
