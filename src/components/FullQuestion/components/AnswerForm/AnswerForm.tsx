import React from "react";
import classNames from "classnames/bind";
import styles from "./AnswerForm.module.css";

const cx = classNames.bind(styles);

export const AnswerForm = () => {
  return (
    <form className={cx("answer-form")}>
      <h2>Give your answer!</h2>
      <section className={cx("answer-form__inputs")}>
        <div></div>
      </section>
    </form>
  );
};
