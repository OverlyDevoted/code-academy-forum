import React from "react";
import classNames from "classnames/bind";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Sidebar } from "../Sidebar";
import { UserDataProvider } from "@/utils/UserDataContext";
import styles from "./MainPage.module.css";

const cx = classNames.bind(styles);

interface MainPageProps {
  children: React.ReactNode;
}

export const MainPage = ({ children }: MainPageProps) => {
  return (
    <ProtectedRoute>
      <UserDataProvider>
        <div className={cx("main-layout")}>
          <Sidebar />
          <main className={cx("main-layout__main-container")}>{children}</main>
        </div>
      </UserDataProvider>
    </ProtectedRoute>
  );
};
