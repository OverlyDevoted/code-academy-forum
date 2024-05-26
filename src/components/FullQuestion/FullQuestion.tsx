import React from "react";
import { Answer, QuestionServer } from "@/types/Backend.types";
import { QuestionPart } from "./components/QuestionPart";
import { AnswersPart } from "./components/AnswersPart";
import { Divider } from "../Divider";

interface FullQuestionProps {
  question: QuestionServer;
  answers: Answer[];
}

export const FullQuestion = ({ question, answers }: FullQuestionProps) => {
  return (
    <section>
      <QuestionPart question={question} />
      <Divider />
      <AnswersPart answers={answers} />
    </section>
  );
};
