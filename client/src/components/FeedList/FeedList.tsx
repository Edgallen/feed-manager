import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./FeedList.module.scss";
import feedStore from "../../stores/feedStore";
import FeedPost from "../FeedPost/FeedPost";

const FeedList = observer(() => {
  return (
    <div className={styles.feedList__container}>
      {feedStore.posts.map((feedPost) => (
        <FeedPost
          feedData={feedPost}
          postId={feedPost.id}
          tagButtonCursor={"pointer"}
          key={feedPost.id}
        />
      ))}
    </div>
  );
});

export default FeedList;
