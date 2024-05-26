import React from "react";
import { Answer } from "@/types/Backend.types";
import { AnswerCard } from "./components";

interface AnwersPartProps {
  answers: Answer[];
}

export const AnswersPart = ({ answers }: AnwersPartProps) => {
  return (
    <section>
      {answers.length
        ? answers.map((answer) => (
            <AnswerCard key={answer.id} answer={answer} />
          ))
        : "No answers yet"}
    </section>
  );
};
