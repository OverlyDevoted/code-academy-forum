import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchData } from "@/utils/fetchData";
import { QuestionsResponse } from "@/types/Backend.types";
import { QuestionCard } from "@/components/QuestionCard";
import { MainLayout } from "@/layouts/MainLayout";

const fetchPosts = () => {
  return fetchData<QuestionsResponse>("question");
};

export default function HomePage() {
  const { data } = useQuery({ queryKey: ["globalPosts"], queryFn: fetchPosts });

  const renderQuestionCards = useMemo(() => {
    if (!data) return null;
    return data.questions.map((questionObject) => {
      return <QuestionCard key={questionObject.id} question={questionObject} />;
    });
  }, [data]);

  return <MainLayout>{data ? renderQuestionCards : "Loading..."}</MainLayout>;
}
