import React, { FC, MouseEvent } from "react";
import styles from "./UpvotesCounter.module.scss";

interface upvotesCounterProps {
  count: number;
  isActive: boolean;
  onClickCallback: (event: MouseEvent) => void;
}

const UpvotesCounter: FC<upvotesCounterProps> = ({
  count,
  isActive,
  onClickCallback,
}) => {
  return (
    <div
      className={`${styles.upvotesCounter} ${
        isActive ? styles.upvotesCounter__active : ""
      }`}
      onClick={(event) => onClickCallback(event)}
    >
      <i
        className={`ri-arrow-up-s-line ${styles.upvotesCounter__icon} ${
          isActive ? styles.upvotesCounter__icon__active : ""
        }`}
      ></i>
      <h3
        className={`${styles.upvotesCounter__title} ${
          isActive ? styles.upvotesCounter__title__active : ""
        }`}
      >
        {count}
      </h3>
    </div>
  );
};

export default UpvotesCounter;
