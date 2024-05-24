import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { MainPage } from "@/components/MainPage";
import { UserDataProvider } from "@/utils/UserDataContext";
import { fetchData } from "@/utils/fetchData";
import { QuestionsResponse } from "@/types/Backend.types";
import { QuestionCard } from "@/components/QuestionCard";

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

  return <MainPage>{data ? renderQuestionCards : "Loading..."}</MainPage>;
}
