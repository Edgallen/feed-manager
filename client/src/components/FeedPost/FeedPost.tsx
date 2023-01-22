import React, { FC, MouseEvent } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import CommentsCounter from "../Ui/CommentsCounter/CommentsCounter";
import TagButton from "../Ui/TagButton/TagButton";
import UpVotesCounter from "../Ui/UpvotesCounter/UpVotesCounter";

import feedStore from "../../stores/feedStore";

import type { IFeedPost } from "../../types/feedTypes";

import styles from "./FeedPost.scss";

interface IProps {
  feedData: IFeedPost;
  postId: string;
  isStatic?: boolean;
  tagButtonCursor?: "default" | "pointer";
}

const FeedPost: FC<IProps> = observer(({
  feedData,
  postId,
  isStatic,
  tagButtonCursor,
}) => {
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
          isStatic ? ` ${styles.feedPost__static}` : ""
        }`}
        onClick={handleFeedPostClick}
    >
        <div className={styles.feedPost__container}>
            <UpVotesCounter
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
                        isStatic={true}
                        cursor={tagButtonCursor}
                        key={index}
                    />
                ))}
            </div>
        </div>

        <CommentsCounter count={feedData.comments}/>
    </div>
  );
},
);

export default FeedPost;
