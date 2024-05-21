import Image from "next/image";
import React from "react";
import classNames from "classnames/bind";
import styles from "./AuthPage.module.css";
interface AuthPageProps {
  children: React.ReactNode;
}

const cx = classNames.bind(styles);

export const AuthPage = ({ children }: AuthPageProps) => {
  return (
    <main className={cx("container")}>
      <figure className={cx("container__hero-container")}>
        <Image
          src={
            "https://codeacademy.online/static/media/register_illustration.66450890.svg"
          }
          alt="Cartoonish drawing of a tall man filling up a register form"
          layout="fill"
          className={cx("container__hero")}
        />
      </figure>
      <section className={cx("container__form")}>{children}</section>
    </main>
  );
};
