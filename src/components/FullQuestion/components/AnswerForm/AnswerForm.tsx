import React, { useMemo, useRef, useState } from "react";
import classNames from "classnames/bind";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Button";
import {
  ANSWER_TEXT_MAX,
  ANSWER_TEXT_MIN,
} from "./constants/AnswerForm.constants";
import { postData } from "@/utils/postData";
import { ErrorType } from "@/types/Fetch.types";
import { AnswerPost } from "@/types/Backend.types";
import { useAuth } from "@/hooks/useAuth";
import styles from "./AnswerForm.module.css";

const cx = classNames.bind(styles);

interface AnswerFormProps {
  question_id: string;
}

export const AnswerForm = ({ question_id }: AnswerFormProps) => {
  const { getToken } = useAuth();
  const answerTextRef = useRef<HTMLTextAreaElement>(null);
  const [answerTextLength, setAnswerTextLength] = useState(0);
  const isAnswerTextValid = useMemo(() => {
    return (
      answerTextLength <= ANSWER_TEXT_MAX && answerTextLength >= ANSWER_TEXT_MIN
    );
  }, [answerTextLength]);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (variable: {
      question_id: string;
      answer_text: string;
      token: string;
    }) => {
      const { question_id, answer_text, token } = variable;
      return postData<ErrorType, AnswerPost>(
        "answer",
        { answer_text, question_id },
        token
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["questionPage"] });
    },
  });

  return (
    <form className={cx("answer-form")}>
      <h2>Give your answer!</h2>
      <section className={cx("answer-form__inputs")}>
        <div>
          <TextArea
            ref={answerTextRef}
            id="answer-text"
            placeholder="Enter your answer here..."
            onChange={(e) => {
              setAnswerTextLength(e.target.value.length);
            }}
          />
          <div
            className={cx("answer-form__textarea-counter")}
            aria-invalid={!isAnswerTextValid}
          >
            {answerTextLength}
          </div>
        </div>
        <Button
          label="Post answer"
          onClick={() => {
            mutate({
              answer_text: answerTextRef.current?.value ?? "",
              question_id,
              token: getToken() ?? "",
            });
            if (answerTextRef.current) answerTextRef.current.value = "";
          }}
          isDisabled={!isAnswerTextValid}
          isLoading={isPending}
        />
      </section>
    </form>
  );
};
