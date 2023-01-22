import React, { FC } from "react";

import styles from "./Tag.scss";

interface IProps {
  text: string;
  deleteCallback: (tagName: string) => void;
}

const Tag: FC<IProps> = ({ text, deleteCallback }) => {
  return (
    <div className={styles.tag} onClick={() => deleteCallback(text)}>
      <span className={styles.tag__title}>{text}</span>
      <i className={`ri-close-line ${styles.tag__button}`}></i>
    </div>
  );
};

export default Tag;
