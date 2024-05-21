import React, { MouseEventHandler } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  isLoading?: boolean;
}

const cx = classNames.bind(styles);

export const Button = ({
  label,
  onClick,
  type = "button",
  isLoading = false,
}: ButtonProps) => {
  return (
    <button
      className={cx("button")}
      onClick={onClick}
      type={type}
      disabled={isLoading}
    >
      {isLoading ? <span className={cx("button--loader")}></span> : label}
    </button>
  );
};
