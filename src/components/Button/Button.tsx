import React, { MouseEventHandler } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  isLoading?: boolean;
  isDisabled?: boolean;
}

const cx = classNames.bind(styles);

export const Button = ({
  label,
  onClick,
  type = "button",
  isLoading = false,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <button
      className={cx("button")}
      onClick={onClick}
      type={type}
      aria-busy={isLoading}
      disabled={isDisabled}
    >
      {isLoading ? <span className={cx("button--loader")}></span> : label}
    </button>
  );
};
