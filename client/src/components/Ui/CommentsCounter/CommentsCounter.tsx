import React, { FC } from "react";
import styles from "./CommentsCounter.module.scss";

interface commentsCounterProps {
  count: number;
}

const CommentsCounter: FC<commentsCounterProps> = ({ count }) => {
  return (
    <div className={styles.commentsCounter}>
      <i className={`ri-chat-1-fill ${styles.commentsCounter__icon}`}></i>
      <h3 className={styles.commentsCounter__title}>{count}</h3>
    </div>
  );
};

export default CommentsCounter;
