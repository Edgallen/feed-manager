import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CommentSection from "../../components/CommentSection/CommentSection";
import FeedPost from "../../components/FeedPost/FeedPost";
import BackNavigationButton from "../../components/Ui/BackNavigationButton/BackNavigationButton";
import MainButton from "../../components/Ui/MainButton/MainButton";

import feedStore from "../../stores/feedStore";

import type { IFeedPost } from "../../types/feedTypes";

// import styles from "./feedPostPage.scss";

export const FeedPostPage = observer(() => {
  const params = useParams();
  const [post, setPost] = useState<IFeedPost | null>(null);

  useEffect(() => {
    feedStore.getSinglePost(params.feedPostId);

    setPost(feedStore.selectedPost);
  }, [feedStore.selectedPost]);

  if (post === null || feedStore.isLoading) {
    return <h1>Post is loading...</h1>;
  }

  return (
    <section>
      <div>
        <BackNavigationButton navigateTo="/" />
        <MainButton text={"Редактировать"} color={"service"} />
      </div>
      <FeedPost
        feedData={post}
        isStatic={true}
        tagButtonCursor={"default"}
        postId={post.id}
      />
      <CommentSection />
    </section>
  );
});
