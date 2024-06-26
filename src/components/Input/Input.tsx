import React, { LegacyRef, forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./Input.module.css";

const cx = classNames.bind(styles);

type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  error?: string;
  type?: "text" | "password" | "email";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, placeholder, label, type = "text", error, onChange },
  ref
) {
  return (
    <div className={cx("container")}>
      {label && (
        <label id={`${id}-label`} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={cx("container__input")}
        ref={ref}
        type={type}
        id={id}
        placeholder={placeholder}
        aria-labelledby={`${id}-label`}
        onChange={onChange}
      />
      {error && <div className={cx("container__error")}>{error}</div>}
    </div>
  );
});
