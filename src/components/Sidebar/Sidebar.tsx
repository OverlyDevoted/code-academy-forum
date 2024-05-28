import React from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { Card } from "../Card";
import { useUserDatta } from "@/hooks/useUserData";
import { UserBadge } from "./components/UserBadge";
import { useAuth } from "@/hooks/useAuth";
import CodeAcademyLogo from "@/assets/graphics/codeacademy.svg";
import { Divider } from "../Divider";
import NewPostIcon from "@/assets/icons/new-post.svg";
import styles from "./Sidebar.module.css";

const cx = classNames.bind(styles);

interface SidebarProps {
  isExpanded: boolean;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

export const Sidebar = ({ isExpanded, onClose }: SidebarProps) => {
  const { isLogged } = useAuth();
  const { userData, isFetched } = useUserDatta();

  return (
    <aside className={cx("sidebar", { "sidebar--expanded": isExpanded })}>
      <div className={cx("sidebar__card-wrapper")}>
        <Card isFullHeight boxShadow="none">
          <div className={cx("sidebar__content")}>
            <Link className={cx("sidebar__link-home")} href="/">
              <CodeAcademyLogo />
            </Link>
            <UserBadge
              username={
                userData && isLogged
                  ? `${userData.first_name} ${userData.second_name}`
                  : undefined
              }
              isFetched={isLogged ? isFetched : true}
              hue={userData?.hue ?? 0}
            />
            <div className={cx("sidebar__header")}>
              <div className={cx("sidebar__header-content")}>
                <span>Your questions</span>
                <Link className={cx("sidebar__new-post-button")} href="/create">
                  <NewPostIcon />
                </Link>
              </div>
              <Divider />
            </div>
          </div>
        </Card>
      </div>
      {isExpanded && (
        <div className={cx("sidebar__background")} onClick={onClose}></div>
      )}
    </aside>
  );
};
