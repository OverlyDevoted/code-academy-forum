import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { fetchData } from "@/utils/fetchData";
import { MainLayout } from "@/layouts/MainLayout";
import { QuestionAnswerServer, QuestionServer } from "@/types/Backend.types";
import { FullQuestion } from "@/components/FullQuestion";

const DynamicQuestionPage = () => {
  const router = useRouter();
  const { data, isLoading, error, isRefetching } = useQuery({
    queryKey: ["questionPage"],
    queryFn: () => {
      const question_id = router.query.id as string;
      return fetchData<QuestionAnswerServer>(`question/${question_id}`);
    },
    retry: false,
  });

  const renderComponent = () => {
    if ((isRefetching || isLoading) && !data) return <div>Loading...</div>;

    if (error) return <div>{error.message}</div>;

    if (!data) return <div>Data is missing</div>;

    return <FullQuestion question={data.question} answers={data.answers} />;
  };

  return <MainLayout>{renderComponent()}</MainLayout>;
};

export default DynamicQuestionPage;
