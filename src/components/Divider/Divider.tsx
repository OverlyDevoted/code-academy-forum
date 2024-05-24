import React from "react";
import classNames from "classnames/bind";
import styles from "./Divider.module.css";

const cx = classNames.bind(styles);

export const Divider = () => {
  return <div className={cx("divider")} />;
};
