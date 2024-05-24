import React from "react";
import classNames from "classnames/bind";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { Sidebar } from "../../components/Sidebar";
import { UserDataProvider } from "@/utils/UserDataContext";
import { CategoryDataProvider } from "@/utils/CategoryContext";
import styles from "./MainLayout.module.css";

const cx = classNames.bind(styles);

interface MainPageProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainPageProps) => {
  return (
    <ProtectedRoute>
      <UserDataProvider>
        <CategoryDataProvider>
          <div className={cx("main-layout")}>
            <Sidebar />
            <main className={cx("main-layout__main-container")}>
              {children}
            </main>
          </div>
        </CategoryDataProvider>
      </UserDataProvider>
    </ProtectedRoute>
  );
};
