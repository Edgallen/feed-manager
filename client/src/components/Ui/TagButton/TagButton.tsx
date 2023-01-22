import React, { FC } from "react";
import styles from "./TagButton.module.scss";

interface tagButtonProps {
  title: string;
  active: boolean;
  onClickCallback?: (newTag: string) => void;
  static?: boolean;
  cursor?: "pointer" | "default";
}

const TagButton: FC<tagButtonProps> = ({ title, active, ...props }) => {
  const dynamicStyles = {
    active: active ? ` ${styles.tagButton__active}` : "",
    static: props.static ? ` ${styles.tagButton__static}` : "",
    cursor: props.cursor === "default" ? "" : ` ${styles.tagButton__cursor}`,
  };

  return (
    <button
      className={`${styles.tagButton}${dynamicStyles.active}${dynamicStyles.static}${dynamicStyles.cursor}`}
      onClick={() => props.onClickCallback(title)}
    >
      <span className={styles.tagButton__title}>{title}</span>
    </button>
  );
};

export default TagButton;
