import React from "react";
import { observer } from "mobx-react-lite";

import FeedPost from "../FeedPost/FeedPost";

import feedStore from "../../stores/feedStore";

import styles from "./FeedList.scss";

const FeedList = observer(() => (
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
));

export default FeedList;
