import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../../components/CommentSection/CommentSection";
import FeedPost from "../../components/FeedPost/FeedPost";
import BackNavigationButton from "../../components/Ui/BackNavigationButton/BackNavigationButton";
import MainButton from "../../components/Ui/MainButton/MainButton";
import feedStore from "../../stores/feedStore";
import { IFeedPost } from "../../types/feedTypes";
import styles from "./feedPostPage.module.scss";

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
    <section className={styles.feedPostPage}>
      <div className={styles.feedPostPage__header}>
        <BackNavigationButton navigateTo="/" />
        <MainButton text={"Редактировать"} color={"service"} />
      </div>
      <FeedPost
        feedData={post}
        static={true}
        tagButtonCursor={"default"}
        postId={post.id}
      />
      <CommentSection />
    </section>
  );
});
