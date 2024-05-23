import React from "react";
import classNames from "classnames/bind";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Sidebar } from "../Sidebar";
import styles from "./MainPage.module.css";

const cx = classNames.bind(styles);

interface MainPageProps {
  children: React.ReactNode;
}

export const MainPage = ({ children }: MainPageProps) => {
  return (
    <ProtectedRoute>
      <div className={cx("main-container")}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </ProtectedRoute>
  );
};
