import React from "react";
import classNames from "classnames/bind";
import { QuestionServer } from "@/types/Backend.types";
import styles from "./QuestionPart.module.scss";
import { Card } from "@/components/Card";
import { useUserDatta } from "@/hooks/useUserData";
import { SATURATION, LIGHTNESS } from "@/constants/Helper.constants";
import TrashCan from "@/assets/icons/trash.svg";

const cx = classNames.bind(styles);

interface QuestionPart {
  question: QuestionServer;
}

export const QuestionPart = ({ question }: QuestionPart) => {
  const { userData } = useUserDatta();
  const { id, first_name, second_name, hue } = question.user;
  const isOwner = question.user.id === userData?.id;
  const username = `${first_name} ${second_name}`;
  return (
    <Card>
      <section className={cx("question-part")}>
        <span
          className={cx("question-part__user-icon")}
          style={{
            backgroundColor: `hsl(${hue}deg,${SATURATION}%,${LIGHTNESS}%)`,
          }}
        >
          <span>{username[0]}</span>
        </span>
        <h1 className={cx("question-part__header")}>
          {question.question_title}
          <span className={cx("question-part__username")}>{username}</span>
        </h1>
        <p className={cx("question-part__paragraph")}>
          {question.question_text}
        </p>

        <div className={cx("question-part__extras")}>
          <div className={cx("question-part__indicator")}>
            <span>Asked on</span>
            <span>{new Date(question.createdAt).toDateString()}</span>
          </div>
          {isOwner && (
            <div>
              <TrashCan className={cx("question-part__icon")} />
            </div>
          )}
        </div>
      </section>
    </Card>
  );
};
