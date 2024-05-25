import React, { MouseEventHandler } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  isSecondary?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  borderRadius?: "xs" | "m" | "xl";
}

const cx = classNames.bind(styles);

export const Button = ({
  label,
  onClick,
  type = "button",
  isSecondary = false,
  isLoading = false,
  isDisabled = false,
  borderRadius = "xl",
}: ButtonProps) => {
  return (
    <button
      className={cx("button", `button--${borderRadius}`, {
        "button--secondary": isSecondary,
      })}
      onClick={onClick}
      type={type}
      aria-busy={isLoading}
      disabled={isDisabled}
    >
      {isLoading ? <span className={cx("button--loader")}></span> : label}
    </button>
  );
};
