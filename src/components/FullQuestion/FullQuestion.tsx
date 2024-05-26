import React from "react";
import classNames from "classnames/bind";
import { Answer, QuestionServer } from "@/types/Backend.types";
import { QuestionPart } from "./components/QuestionPart";
import { AnswersPart } from "./components/AnswersPart";
import { Divider } from "../Divider";
import styles from "./FullQuestion.module.css";

const cx = classNames.bind(styles);
interface FullQuestionProps {
  question: QuestionServer;
  answers: Answer[];
}

export const FullQuestion = ({ question, answers }: FullQuestionProps) => {
  return (
    <section className={cx("full-question")}>
      <QuestionPart question={question} />
      <Divider />
      <AnswersPart answers={answers} />
    </section>
  );
};