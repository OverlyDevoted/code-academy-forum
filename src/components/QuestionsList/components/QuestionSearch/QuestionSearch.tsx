import React, { useState } from "react";
import classNames from "classnames/bind";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import styles from "./QuestionSearch.module.css";

const cx = classNames.bind(styles);

interface QuestionSearchProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const QuestionSearch = ({ checked, onChange }: QuestionSearchProps) => {
  return (
    <Card boxShadow="xs" borderRadius="m">
      <div className={cx("question-search")}>
        <h2>Question Search</h2>
        <Divider />
        <div className={cx("question-search__buttons")}>
          <h3>Sort by</h3>
          <span
            className={cx("question-search__button", {
              "question-search--clicked": checked,
            })}
          >
            Unaswered
            <input
              className={cx("question-search__checkbox")}
              type="checkbox"
              name="answered"
              id="answered"
              checked={checked}
              onChange={onChange}
            />
          </span>
        </div>
      </div>
    </Card>
  );
};
