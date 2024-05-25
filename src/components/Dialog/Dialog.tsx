import React from "react";
import classNames from "classnames/bind";
import { Button } from "../Button";
import { Card } from "../Card";
import styles from "./Dialog.module.css";

const cx = classNames.bind(styles);

interface DialogProps {
  children?: React.ReactNode;
  label: string;
  onConfirm: () => void;
  onClose: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
}

export const Dialog = ({
  children,
  label,
  onConfirm,
  onClose,
  secondaryLabel,
  onSecondary,
}: DialogProps) => {
  return (
    <>
      <div className={cx("backdrop")} />
      <div className={cx("dialog")}>
        <Card>
          <div className={cx("dialog__children")}>{children}</div>
          <div className={cx("dialog__buttons")}>
            {secondaryLabel && (
              <Button
                label={secondaryLabel}
                isSecondary
                onClick={() => {
                  if (onSecondary) onSecondary();
                  onClose();
                }}
                borderRadius="m"
              />
            )}
            <Button
              label={label}
              onClick={() => {
                onClose();
                onConfirm();
              }}
              borderRadius="m"
            />
          </div>
        </Card>
      </div>
    </>
  );
};
