import React from "react";
import classNames from "classnames/bind";
import { Answer } from "@/types/Backend.types";
import { Card } from "@/components/Card";
import { LIGHTNESS, SATURATION } from "@/constants/Helper.constants";
import ThumbsUpIcon from "@/assets/icons/thumbs-up.svg";
import ThumbsDownIcon from "@/assets/icons/thumbs-down.svg";
import TrashCan from "@/assets/icons/trash.svg";
import { useUserDatta } from "@/hooks/useUserData";
import { useAuth } from "@/hooks/useAuth";
import styles from ".//AnswerCard.module.css";

const cx = classNames.bind(styles);
interface AnswerCardProps {
  answer: Answer;
}

export const AnswerCard = ({ answer }: AnswerCardProps) => {
  const { isLogged } = useAuth();
  const { userData } = useUserDatta();
  const { hue, first_name, second_name } = answer.user;
  const username = `${first_name} ${second_name}`;
  const isOwner = userData?.id === answer.user.id;
  return (
    <Card>
      <article className={cx("answer-card")}>
        <span
          className={cx("answer-card__user-icon")}
          style={{
            backgroundColor: `hsl(${hue}deg,${SATURATION}%,${LIGHTNESS}%)`,
          }}
        >
          <span>{username[0]}</span>
        </span>
        <h3>{username}</h3>
        <p className={cx("answer-card__answer")}>{answer.answer_text}</p>
        <div className={cx("answer-card__extras")}>
          <div className={cx("answer-card__indicator")}>
            <span className={cx("answer-card__answered")}>Answered on</span>
            <span>{new Date(answer.createdAt).toDateString()}</span>
          </div>
          {isLogged && (
            <div className={cx("answer-card__actions")}>
              <div className={cx("answer-card__action", "answer-card__like")}>
                <span>{answer.liked_by.length}</span>
                <ThumbsUpIcon className={cx("answer-card__icon")} />
              </div>
              <div
                className={cx("answer-card__action", "answer-card__dislike")}
              >
                <span>{answer.disliked_by.length}</span>
                <ThumbsDownIcon className={cx("answer-card__icon")} />
              </div>
              {isOwner && (
                <div
                  className={cx("answer-card__action", "answer-card__delete")}
                >
                  <TrashCan className={cx("answer-card__icon")} />
                </div>
              )}
            </div>
          )}
        </div>
      </article>
    </Card>
  );
};
