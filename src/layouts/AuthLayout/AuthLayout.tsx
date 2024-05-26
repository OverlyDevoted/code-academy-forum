import Image from "next/image";
import React from "react";
import classNames from "classnames/bind";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import styles from "./AuthLayout.module.css";
interface AuthPageProps {
  children: React.ReactNode;
}

const cx = classNames.bind(styles);

export const AuthLayout = ({ children }: AuthPageProps) => {
  return (
    <ProtectedRoute isAuthPage>
      <main className={cx("container")}>
        <figure className={cx("container__hero-container")}></figure>
        <section className={cx("container__form")}>{children}</section>
      </main>
    </ProtectedRoute>
  );
};
