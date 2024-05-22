import React from "react";
import classNames from "classnames/bind";
import styles from "./Card.module.css";

const cx = classNames.bind(styles);

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className={cx("card")}>{children}</div>;
};
