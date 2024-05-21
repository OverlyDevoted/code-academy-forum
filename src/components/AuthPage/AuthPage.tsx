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
    <div className={cx("container")}>
      <Image
        src={
          "https://codeacademy.online/static/media/register_illustration.66450890.svg"
        }
        alt="Cartoonish drawing of a tall man filling up a register form"
        width={300}
        height={300}
      />
      <section className={cx("container__form")}>{children}</section>
    </div>
  );
};
