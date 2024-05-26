import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { Question } from "@/types/Backend.types";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { LIGHTNESS, SATURATION } from "@/constants/Helper.constants";
import styles from "./QuestionCard.module.css";

const cx = classNames.bind(styles);
interface QuestionCardProps {
  question: Question;
}

export const QuestionCard = ({ question }: QuestionCardProps) => {
  const router = useRouter();
  const questionCreationDate = new Date(question.createdAt);

  const handleNavigationToQuestion = () => {
    router.push(`/question/${question.id}`);
  };

  return (
    <Card borderRadius="m" onHover>
      <div className={cx("question-card")} onClick={handleNavigationToQuestion}>
        <h2>{question.question_title}</h2>
        <Divider />
        <div className={cx("question-card__info")}>
          <span
            className={cx("question-card__category")}
            style={{
              backgroundColor: `hsl(${question.category.hue}deg,${SATURATION}%,${LIGHTNESS}%)`,
            }}
          >
            {question.category.category_name}
          </span>
          <span className={cx("question-card__asked-at")}>
            {questionCreationDate.toDateString()}
          </span>
        </div>
      </div>
    </Card>
  );
};
