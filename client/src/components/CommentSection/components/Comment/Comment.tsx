import React, { FC } from "react";

import styles from "./Comment.scss";

interface IProps {
  name: string;
  username: string;
  text: string;
}

const Comment: FC<IProps> = ({ username, text }) => (
  <div className={styles.comment}>
    <div className={styles.avatar__wrapper}>
      {/* TODO: Переделать на настоящий аватар */}
      <div className={styles.avatar}></div>
    </div>
    <div className={styles.comment__body}>
      <div className={styles.title__wrapper}>
        <h3 className={styles.comment__title}>{username}</h3>
        <span className={styles.comment__subtitle}>@{username}</span>
      </div>
      <p className={styles.comment__text}>{text}</p>
    </div>
  </div>
);

export default Comment;
