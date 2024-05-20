import React, { MouseEventHandler } from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
}

const cx = classNames.bind(styles);

export const Button = ({ label, onClick, type = "button" }: ButtonProps) => {
  return (
    <button className={cx("button")} onClick={onClick} type={type}>
      {label}
    </button>
  );
};
