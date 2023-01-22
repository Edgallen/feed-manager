import React, { FC, MouseEvent } from "react";

import styles from "./UpvotesCounter.scss";

interface IProps {
  count: number;
  isActive: boolean;
  onClickCallback: (event: MouseEvent) => void;
}

const UpVotesCounter: FC<IProps> = ({
  count,
  isActive,
  onClickCallback,
}) => {
  return (
    <div
      className={`${styles.upVotesCounter} ${
        isActive ? styles.upVotesCounter__active : ""
      }`}
      onClick={(event) => onClickCallback(event)}
    >
      <i
        className={`ri-arrow-up-s-line ${styles.upVotesCounter__icon} ${
          isActive ? styles.upVotesCounter__icon__active : ""
        }`}
      ></i>
      <h3
        className={`${styles.upVotesCounter__title} ${
          isActive ? styles.upVotesCounter__title__active : ""
        }`}
      >
        {count}
      </h3>
    </div>
  );
};

export default UpVotesCounter;
