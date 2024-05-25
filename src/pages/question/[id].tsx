import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { fetchData } from "@/utils/fetchData";
import { MainLayout } from "@/layouts/MainLayout";

const DynamicQuestionPage = () => {
  const router = useRouter();
  const { data, isLoading, error } = useQuery({
    queryKey: ["questionPage"],
    queryFn: () => {
      const question_id = router.query.id as string;
      return fetchData(`question/${question_id}`);
    },
    retry: false,
  });
  return (
    <MainLayout>
      <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
    </MainLayout>
  );
};

export default DynamicQuestionPage;
