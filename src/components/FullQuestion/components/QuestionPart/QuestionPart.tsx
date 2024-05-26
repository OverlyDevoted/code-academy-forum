import React from "react";
import { QuestionServer } from "@/types/Backend.types";
import { Divider } from "@/components/Divider";

interface QuestionPart {
  question: QuestionServer;
}

export const QuestionPart = ({ question }: QuestionPart) => {
  return (
    <section>
      <h1>{question.question_title}</h1>
      <Divider />
      <p>{question.question_text}</p>
    </section>
  );
};
