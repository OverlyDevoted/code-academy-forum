import { log } from "console";
import Link from "next/link";
import React, { use, useMemo } from "react";
import classNames from "classnames/bind";
import { useQueryClient } from "@tanstack/react-query";
import { getRandomHSL } from "@/utils/getRandomColor";
import { Button } from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";
import styles from "./UserBadge.module.css";

const cx = classNames.bind(styles);

interface UserBadgeProps {
  username?: string;
  hue: number;
  isFetched: boolean;
}

export const UserBadge = ({ username, isFetched, hue }: UserBadgeProps) => {
  const userHSL = useMemo(() => getRandomHSL(), []);
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const renderUserState = () => {
    if (!isFetched) {
      return "Loading...";
    }

    if (username) {
      return username;
    }

    return <Link href="/login">Login</Link>;
  };

  return (
    <div className={cx("user-badge")}>
      {username && (
        <span
          className={cx("user-badge__icon")}
          style={{
            backgroundColor: `hsl(${hue}deg,${userHSL.saturation}%,${userHSL.ligthness}%)`,
          }}
        >
          <span>{username[0]}</span>
        </span>
      )}
      <div>
        <span className={cx("user-badge__username")}>{renderUserState()}</span>
        {username && (
          <button className={cx("user-badge__logout")} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
