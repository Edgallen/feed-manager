import React, { useState } from "react";

import Comment from "./components/Comment/Comment";

import type { ITestComment } from "../../types/commentTypes";

import styles from "./CommentSection.scss";

const CommentSection = () => {
  // TODO: Убрать ITestComment
  const [comments] = useState<Array<ITestComment>>([
    {
      id: "test",
      user: { name: "Jackson Barker", username: "countryspirit" },
      text: "Hello World!",
      replies: [],
    },
  ]);

  return (
    <div className={styles.commentSection}>
      <h1 className={styles.comments__title}>{comments.length} Комментария</h1>

      <div className={styles.comments__wrapper}>
        {comments.map((comment) => (
          <Comment
            name={comment.user.name}
            username={comment.user.username}
            text={comment.text}
            key={comment.id}
          />
        ))}
      </div>

      <div className={styles.commentInput__wrapper}></div>
    </div>
  );
};

export default CommentSection;
