import React, { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./TextArea.module.css";

const cx = classNames.bind(styles);

type TextAreaProps = {
  id: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ id, onChange, placeholder }, ref) {
    return (
      <textarea
        ref={ref}
        id={id}
        aria-labelledby={`${id}-label`}
        placeholder={placeholder}
        className={cx("textarea")}
        onChange={onChange}
      />
    );
  }
);
