import React from "react";
import { Answer } from "@/types/Backend.types";

interface AnswerCardProps {
  answer: Answer;
}

export const AnswerCard = ({ answer }: AnswerCardProps) => {
  return (
    <article>
      <h2>{answer.answer_text}</h2>
    </article>
  );
};
