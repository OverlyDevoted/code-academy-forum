import React from "react";
import classNames from "classnames/bind";
import { Answer } from "@/types/Backend.types";
import { AnswerCard } from "./components";
import styles from "./AnswerPart.module.css";
const cx = classNames.bind(styles);
interface AnwersPartProps {
  answers: Answer[];
}

export const AnswersPart = ({ answers }: AnwersPartProps) => {
  return (
    <section className={cx("answer-part")}>
      <h2>{`Answers ${answers.length}`}</h2>
      {answers.length
        ? answers.map((answer) => (
            <AnswerCard key={answer.id} answer={answer} />
          ))
        : "No answers yet"}
    </section>
  );
};
