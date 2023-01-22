import React, { FC } from "react";

import styles from "./CommentsCounter.scss";

interface IProps {
  count: number;
}

const CommentsCounter: FC<IProps> = ({ count }) => {
  return (
    <div className={styles.commentsCounter}>
      <i className={`ri-chat-1-fill ${styles.commentsCounter__icon}`}></i>
      <h3 className={styles.commentsCounter__title}>{count}</h3>
    </div>
  );
};

export default CommentsCounter;
