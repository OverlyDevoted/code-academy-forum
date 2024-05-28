import React from "react";
import classNames from "classnames/bind";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import router from "next/router";
import { Answer, AnswerLikePatch } from "@/types/Backend.types";
import { Card } from "@/components/Card";
import { LIGHTNESS, SATURATION } from "@/constants/Helper.constants";
import ThumbsUpIcon from "@/assets/icons/thumbs-up.svg";
import ThumbsUpFilledIcon from "@/assets/icons/thumbs-up-filled.svg";
import ThumbsDownIcon from "@/assets/icons/thumbs-down.svg";
import ThumbsDownFilledIcon from "@/assets/icons/thumbs-down-filled.svg";
import TrashCan from "@/assets/icons/trash.svg";
import { useUserDatta } from "@/hooks/useUserData";
import { useAuth } from "@/hooks/useAuth";
import { deleteData } from "@/utils/deleteData";
import { ErrorType } from "@/types/Fetch.types";
import { postData } from "@/utils/postData";
import styles from ".//AnswerCard.module.css";

const cx = classNames.bind(styles);
interface AnswerCardProps {
  answer: Answer;
}

export const AnswerCard = ({ answer }: AnswerCardProps) => {
  const { isLogged } = useAuth();
  const { userData } = useUserDatta();
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const { isError, mutate: deleteMutate } = useMutation({
    mutationFn: (variable: { answer_id: string; token: string }) => {
      return deleteData(`answer/${variable.answer_id}`, variable.token);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["questionPage"] });
    },
  });

  const { isError: isLikeError, mutate: patchMutate } = useMutation({
    mutationFn: (variable: {
      answer_id: string;
      is_like: boolean;
      token: string;
    }) => {
      return postData<ErrorType, AnswerLikePatch>(
        `answer/${variable.answer_id}`,
        { is_like: variable.is_like },
        variable.token,
        true
      );
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["questionPage"] });
    },
  });

  const { hue, first_name, second_name } = answer.user;
  const username = `${first_name} ${second_name}`;
  const isOwner = userData?.id === answer.user.id;

  const hasLiked = answer.liked_by.some((user) => user === userData?.id);
  const hasDisliked = answer.disliked_by.some((user) => user === userData?.id);

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
        <pre className={cx("answer-card__answer")}>{answer.answer_text}</pre>
        <div className={cx("answer-card__extras")}>
          <div className={cx("answer-card__indicator")}>
            <span className={cx("answer-card__answered")}>Answered on</span>
            <span>{new Date(answer.createdAt).toDateString()}</span>
          </div>

          <div className={cx("answer-card__actions")}>
            <div className={cx("answer-card__action", "answer-card__like")}>
              <span>{answer.liked_by.length}</span>
              <div>
                {hasLiked ? (
                  <ThumbsUpFilledIcon className={cx("answer-card__icon")} />
                ) : (
                  <ThumbsUpIcon
                    className={cx("answer-card__icon", {
                      "answer-card__icon--disabled": !isLogged,
                    })}
                    onClick={() => {
                      if (isLogged)
                        patchMutate({
                          answer_id: answer.id,
                          is_like: true,
                          token: getToken() ?? "",
                        });
                    }}
                  />
                )}
              </div>
            </div>
            <div className={cx("answer-card__action", "answer-card__dislike")}>
              <span>{answer.disliked_by.length}</span>
              <div>
                {hasDisliked ? (
                  <ThumbsDownFilledIcon className={cx("answer-card__icon")} />
                ) : (
                  <ThumbsDownIcon
                    className={cx("answer-card__icon", {
                      "answer-card__icon--disabled": !isLogged,
                    })}
                    onClick={() => {
                      if (isLogged)
                        patchMutate({
                          answer_id: answer.id,
                          is_like: false,
                          token: getToken() ?? "",
                        });
                    }}
                  />
                )}
              </div>
            </div>
            {isOwner && (
              <div className={cx("answer-card__action", "answer-card__delete")}>
                <TrashCan
                  className={cx("answer-card__icon")}
                  onClick={() => {
                    deleteMutate({
                      answer_id: answer.id,
                      token: getToken() ?? "",
                    });
                  }}
                />
                {isError && <div>Unable to delete answer</div>}
              </div>
            )}
          </div>
        </div>
      </article>
    </Card>
  );
};
