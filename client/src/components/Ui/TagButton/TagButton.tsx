import React, { FC } from "react";
import classnames from "classnames";

import styles from "./TagButton.scss";

interface IProps {
  title: string;
  active: boolean;
  onClickCallback?: (newTag: string) => void;
  isStatic?: boolean;
  cursor?: "pointer" | "default";
}

const TagButton: FC<IProps> = ({
  title,
  active,
  onClickCallback,
  isStatic,
  cursor,
}) => (
    <button
      className={classnames(styles.tagButton, {
        [styles.tagButton__active]: active,
        [styles.tagButton__static]: isStatic,
        [styles.tagButton__cursor]: cursor !== "pointer",
      })}
      onClick={() => onClickCallback(title)}
    >
      <span className={styles.tagButton__title}>{title}</span>
    </button>
);

export default TagButton;
