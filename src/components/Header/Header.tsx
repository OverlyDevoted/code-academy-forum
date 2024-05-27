import React from "react";
import classNames from "classnames/bind";
import SidebarIcon from "@/assets/icons/sidebar.svg";
import styles from "./Header.module.css";

const cx = classNames.bind(styles);

interface HeaderProps {
  onClick: () => void;
}

export const Header = ({ onClick }: HeaderProps) => {
  return (
    <header className={cx("header")}>
      <SidebarIcon onClick={onClick} className={cx("header__icon")} />
    </header>
  );
};
