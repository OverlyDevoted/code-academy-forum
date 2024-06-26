import { useQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";
import classNames from "classnames/bind";
import { MainLayout } from "@/layouts/MainLayout";
import { QuestionCard } from "./components/QuestionCard";
import { Category, Question, QuestionsResponse } from "@/types/Backend.types";
import { fetchData } from "@/utils/fetchData";
import { QuestionSearch } from "./components/QuestionSearch";
import styles from "./QuestionList.module.scss";
import { Divider } from "../Divider";
import { useCategories } from "@/hooks/useCategories";

const cx = classNames.bind(styles);

const fetchPosts = () => {
  return fetchData<QuestionsResponse>("question");
};

export const QuestionList = () => {
  const { data } = useQuery({ queryKey: ["globalPosts"], queryFn: fetchPosts });
  const { categoryData, isFetched, isError } = useCategories();
  const [isSortedByUnanswered, setIsSortedByUnanswered] = useState(false);

  const renderQuestionCards = useMemo(() => {
    if (!data || !categoryData) return null;

    const filtered = data.questions.filter(
      (question) => !isSortedByUnanswered || question.numberOfAnswers === 0
    );

    return filtered.map((questionObject) => {
      const foundCategory = categoryData.categories.find(
        (category) => category.id === questionObject.category_id
      ) as Category;
      const question: Question = { ...questionObject, category: foundCategory };
      return <QuestionCard key={questionObject.id} question={question} />;
    });
  }, [data, categoryData, isSortedByUnanswered]);

  return (
    <div className={cx("container")}>
      <div className={cx("container__header")}>
        <h1>Questions</h1>
      </div>
      <QuestionSearch
        checked={isSortedByUnanswered}
        onChange={(e) => {
          setIsSortedByUnanswered(!isSortedByUnanswered);
        }}
      />
      <Divider />
      <div className={cx("container__list")}>
        {data ? renderQuestionCards : "Loading..."}
      </div>
    </div>
  );
};
