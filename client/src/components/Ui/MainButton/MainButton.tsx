import React, { FC } from "react";
import styles from "./MainButton.module.scss";

interface mainButtonProps {
  text: string;
  clickCallback?: () => void;
  color?: "main" | "secondary" | "service";
  type?: "button" | "submit" | "reset";
  form?: string;
}

const MainButton: FC<mainButtonProps> = ({
  color = "main",
  text,
  ...props
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
      onClick={props.clickCallback}
      form={props.form}
      type={props.type ? props.type : "button"}
    >
      {text}
    </button>
  );
};

export default MainButton;
