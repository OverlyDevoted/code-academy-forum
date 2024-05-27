import React, { useState } from "react";
import classNames from "classnames/bind";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { Sidebar } from "../../components/Sidebar";
import { UserDataProvider } from "@/utils/UserDataContext";
import { CategoryDataProvider } from "@/utils/CategoryContext";
import { Header } from "@/components/Header";
import styles from "./MainLayout.module.css";

const cx = classNames.bind(styles);

interface MainPageProps {
  children: React.ReactNode;
  isAuthorizedPage?: boolean;
}

export const MainLayout = ({ children, isAuthorizedPage }: MainPageProps) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  return (
    <ProtectedRoute isAuthorizedPage={isAuthorizedPage}>
      <UserDataProvider>
        <CategoryDataProvider>
          <Header onClick={() => setIsSidebarExpanded(true)} />
          <div className={cx("main-layout")}>
            <Sidebar
              isExpanded={isSidebarExpanded}
              onClose={(e) => {
                setIsSidebarExpanded(false);
              }}
            />
            <main className={cx("main-layout__main-container")}>
              {children}
            </main>
          </div>
        </CategoryDataProvider>
      </UserDataProvider>
    </ProtectedRoute>
  );
};
