import React from "react";
import classNames from "classnames/bind";
import { Card } from "../Card";
import styles from "./Sidebar.module.css";

const cx = classNames.bind(styles);

export const Sidebar = () => {
  return (
    <aside className={cx("sidebar")}>
      <Card>Helo</Card>
    </aside>
  );
};
