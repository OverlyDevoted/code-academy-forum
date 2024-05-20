import React, { LegacyRef, forwardRef } from "react";
import styles from "./Input.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email";
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, placeholder, label, type = "text" },
  ref
) {
  return (
    <div className={cx("container")}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={cx("container__input")}
        ref={ref}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
});
