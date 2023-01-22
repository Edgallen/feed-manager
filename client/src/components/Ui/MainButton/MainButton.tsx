import React, { FC } from "react";

import styles from "./MainButton.scss";

interface IProps {
  text: string;
  clickCallback?: () => void;
  color?: "main" | "secondary" | "service";
  type?: "button" | "submit" | "reset";
  form?: string;
}

const MainButton: FC<IProps> = ({
  color = "main",
  clickCallback,
  text,
  type,
  form,
}) => {
  const getColor = () => {
    switch (color) {
      case "secondary": {
        return ` ${styles.mainButton__secondaryColor}`;
      }
      case "service": {
        return ` ${styles.mainButton__serviceColor}`;
      }
      default: {
        return "";
      }
    }
  };

  return (
    <button
      className={`${styles.mainButton}${getColor()}`}
      onClick={clickCallback}
      form={form}
      type={type ? type : "button"}
    >
      {text}
    </button>
  );
};

export default MainButton;
