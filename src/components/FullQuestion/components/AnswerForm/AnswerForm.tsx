import React, { useMemo, useRef, useState } from "react";
import classNames from "classnames/bind";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Button";
import {
  ANSWER_TEXT_MAX,
  ANSWER_TEXT_MIN,
} from "./constants/AnswerForm.constants";
import styles from "./AnswerForm.module.css";

const cx = classNames.bind(styles);

export const AnswerForm = () => {
  const answerTextRef = useRef<HTMLTextAreaElement>(null);
  const [answerTextLength, setAnswerTextLength] = useState(0);
  const isAnswerTextValid = useMemo(() => {
    return (
      answerTextLength <= ANSWER_TEXT_MAX && answerTextLength >= ANSWER_TEXT_MIN
    );
  }, [answerTextLength]);
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
            console.log("post");
          }}
          isDisabled={!isAnswerTextValid}
        />
      </section>
    </form>
  );
};
