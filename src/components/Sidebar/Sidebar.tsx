import React from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { Card } from "../Card";
import { useAuth } from "@/hooks/useAuth";
import { useUserDatta } from "@/hooks/useUserData";
import styles from "./Sidebar.module.css";

const cx = classNames.bind(styles);

export const Sidebar = () => {
  const { userData } = useUserDatta();

  return (
    <aside className={cx("sidebar")}>
      <Card>
        {userData ? JSON.stringify(userData) : <Link href="/login">Login</Link>}
        {/* {!isFetched && <div>Loading</div>}
        {JSON.stringify(userData) ?? ""}
        {isError && } */}
        Hello
      </Card>
    </aside>
  );
};
