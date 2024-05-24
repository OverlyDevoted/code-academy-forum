import React from "react";
import classNames from "classnames/bind";
import { Card } from "../Card";
import { useUserDatta } from "@/hooks/useUserData";
import { UserBadge } from "./components/UserBadge";
import styles from "./Sidebar.module.css";

const cx = classNames.bind(styles);

export const Sidebar = () => {
  const { userData, isFetched } = useUserDatta();

  return (
    <aside className={cx("sidebar")}>
      <Card>
        <UserBadge
          username={
            userData
              ? `${userData.first_name} ${userData.second_name}`
              : undefined
          }
          isFetched={isFetched}
          hue={userData?.hue ?? 0}
        />
      </Card>
    </aside>
  );
};
