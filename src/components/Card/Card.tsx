import React from "react";
import classNames from "classnames/bind";
import styles from "./Card.module.css";

const cx = classNames.bind(styles);

interface CardProps {
  children: React.ReactNode;
  borderRadius?: "m" | "xs";
  boxShadow?: "m" | "s" | "xs";
  isFullHeight?: boolean;
  onHover?: boolean;
}

export const Card = ({
  children,
  borderRadius = "xs",
  boxShadow = "xs",
  isFullHeight,
  onHover,
}: CardProps) => {
  return (
    <div
      className={cx(
        "card",
        `card--box-radius-${borderRadius}`,
        `card--box-shadow-${boxShadow}`,
        {
          "card--full-height": isFullHeight,
          "card--on-hover": onHover,
        }
      )}
    >
      {children}
    </div>
  );
};
