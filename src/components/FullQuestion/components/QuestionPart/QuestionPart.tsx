import React from "react";
import classNames from "classnames/bind";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { QuestionServer } from "@/types/Backend.types";
import styles from "./QuestionPart.module.scss";
import { Card } from "@/components/Card";
import { useUserDatta } from "@/hooks/useUserData";
import { SATURATION, LIGHTNESS } from "@/constants/Helper.constants";
import TrashCan from "@/assets/icons/trash.svg";
import { deleteData } from "@/utils/deleteData";
import { useAuth } from "@/hooks/useAuth";

const cx = classNames.bind(styles);

interface QuestionPart {
  question: QuestionServer;
}

export const QuestionPart = ({ question }: QuestionPart) => {
  const { getToken } = useAuth();
  const { userData } = useUserDatta();
  const router = useRouter();
  const { id, first_name, second_name, hue } = question.user;

  const { isError, mutate } = useMutation({
    mutationFn: (variable: { question_id: string; token: string }) => {
      console.log(variable);
      return deleteData(`question/${variable.question_id}`, variable.token);
    },
    onSuccess: (data, variables, context) => {
      router.push("/");
    },
  });

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
            <span className={cx("question-part__asked")}>Asked on</span>
            <span>{new Date(question.createdAt).toDateString()}</span>
          </div>
          {isOwner && (
            <div>
              <TrashCan
                className={cx("question-part__icon")}
                onClick={() => {
                  mutate({ question_id: question.id, token: getToken() ?? "" });
                }}
              />
              {isError && (
                <span>Something went wrong while deleting question</span>
              )}
            </div>
          )}
        </div>
      </section>
    </Card>
  );
};
