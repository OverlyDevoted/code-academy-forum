import classNames from "classnames/bind";
import { Question, QuestionUser } from "@/types/Backend.types";
import { Card } from "../Card";
import styles from "./QuestionCard.module.css";

const cx = classNames.bind(styles);
interface QuestionCardProps {
  question: Question;
}

export const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <Card borderRadius="m">
      <div className={cx("question-card")}>{question.question_title}</div>
    </Card>
  );
};
