import { observer } from "mobx-react-lite";
import React, { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import feedStore from "../../stores/feedStore";
import { IFeedPost } from "../../types/feedTypes";
import CommentsCounter from "../Ui/CommentsCounter/CommentsCounter";
import TagButton from "../Ui/TagButton/TagButton";
import UpvotesCounter from "../Ui/UpvotesCounter/UpvotesCounter";
import styles from "./FeedPost.module.scss";

interface IFeedPostProps {
  feedData: IFeedPost;
  postId: string;
  static?: boolean;
  tagButtonCursor?: "default" | "pointer";
}

const FeedPost: FC<IFeedPostProps> = observer(
  ({ feedData, postId, ...props }) => {
    const navigate = useNavigate();

    const handleUpvote = (event: MouseEvent) => {
      event.stopPropagation();
      if (feedData.upVoted) {
        feedStore.removeUpvote(postId);
        return;
      }

      feedStore.addUpvote(postId);
    };

    const handleFeedPostClick = () => {
      navigate(`/feedPost/${feedData.id}`);
    };

    return (
      <div
        className={`${styles.feedPost}${
          props.static ? ` ${styles.feedPost__static}` : ""
        }`}
        onClick={handleFeedPostClick}
      >
        <div className={styles.feedPost__container}>
          <UpvotesCounter
            count={feedData.upVotes}
            isActive={feedData.upVoted}
            onClickCallback={handleUpvote}
          />
          <div className={styles.post__wrapper}>
            <h1 className={styles.post__title}>{feedData.title}</h1>
            <p className={styles.post__description}>{feedData.description}</p>

            {feedData.tags.map((tag, index) => (
              <TagButton
                title={tag}
                active={false}
                static={true}
                cursor={props.tagButtonCursor}
                key={index}
              />
            ))}
          </div>
        </div>

        <CommentsCounter count={feedData.comments} />
      </div>
    );
  }
);

export default FeedPost;
