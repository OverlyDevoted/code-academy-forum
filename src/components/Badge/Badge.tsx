import React from "react";
import classNames from "classnames/bind";
import styles from "./Badge.module.css";

const cx = classNames.bind(styles);

interface BadgeProps {
  label: string;
}

export const Badge = ({ label }: BadgeProps) => {
  return <div className={cx("badge")}>{label}</div>;
};
