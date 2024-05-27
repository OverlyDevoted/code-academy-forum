import React, { useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "@/layouts/MainLayout";
import { CreateQuestionForm } from "@/components/CreateQuestionForm";
import { Dialog } from "@/components/Dialog";
import { Divider } from "@/components/Divider";

const CreatePage = () => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <MainLayout isAuthorizedPage>
      <CreateQuestionForm onSuccess={() => setIsDialogOpen(true)} />
      {isDialogOpen && (
        <Dialog
          onClose={() => setIsDialogOpen(false)}
          label="Go to questions"
          secondaryLabel="Create new"
          onConfirm={() => {
            router.push("/");
          }}
        >
          <h2>New question added!</h2>
          <Divider />
          You have successfully created a question. Would you like to create
          another one or go to the created question?
        </Dialog>
      )}
    </MainLayout>
  );
};

export default CreatePage;
