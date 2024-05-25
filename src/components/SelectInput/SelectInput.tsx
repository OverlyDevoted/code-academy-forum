import { ReactElement, useRef, useState } from "react";
import classNames from "classnames/bind";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import styles from "./SelectInput.module.css";

const cx = classNames.bind(styles);

export type SelectInputOption = {
  label: string;
  value: string;
};

interface SelectInputProps {
  options: SelectInputOption[];
  value?: SelectInputOption;
  placeholder?: string;
  label?: string;
  onChange: (option: SelectInputOption | undefined) => void;
}

export function SelectInput({
  options,
  placeholder,
  value,
  label,
  onChange,
}: SelectInputProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const selectInputRef = useRef<HTMLDivElement>(null);

  const isSelected = (option: SelectInputOption): boolean =>
    value?.value === option.value;

  return (
    <div ref={selectInputRef} className={cx("select")}>
      {label && <p className={cx("select__label")}>{label}</p>}
      <button
        tabIndex={0}
        type="button"
        className={cx("select__input", {
          "select__input--focused": isOpen,
        })}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {value ? (
          <p className={cx("select__value", {})}>{value.label}</p>
        ) : (
          <p className={cx("select__placeholder")}>{placeholder}</p>
        )}
        <ChevronDownIcon className={cx("select__icon")} />
      </button>
      {isOpen && (
        <div className={cx("select__list")}>
          {options.map((option) => (
            <button
              type="button"
              className={cx("select__list-item", {
                "select__list-item--selected": isSelected(option),
              })}
              key={option.value}
              value={option.label}
              onClick={() => {
                if (isSelected(option)) {
                  onChange(undefined);
                  setIsOpen((prev) => !prev);
                } else {
                  onChange(option);
                  setIsOpen((prev) => !prev);
                }
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
