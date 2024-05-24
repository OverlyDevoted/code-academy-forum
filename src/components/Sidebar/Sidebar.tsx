import React from "react";
import classNames from "classnames/bind";
import { Card } from "../Card";
import { useUserDatta } from "@/hooks/useUserData";
import { UserBadge } from "./components/UserBadge";
import { useAuth } from "@/hooks/useAuth";
import styles from "./Sidebar.module.css";

const cx = classNames.bind(styles);

export const Sidebar = () => {
  const { isLogged } = useAuth();
  const { userData, isFetched } = useUserDatta();

  return (
    <aside className={cx("sidebar")}>
      <Card isFullHeight boxShadow="s">
        <UserBadge
          username={
            userData
              ? `${userData.first_name} ${userData.second_name}`
              : undefined
          }
          isFetched={isLogged ? isFetched : true}
          hue={userData?.hue ?? 0}
        />
      </Card>
    </aside>
  );
};
