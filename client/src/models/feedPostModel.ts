import { v4 as uuid } from "uuid";

import type { IFeedNewPost } from "../types/feedTypes";
import type { IFeedPost } from "../types/feedTypes";

class FeedPostModel implements IFeedPost {
  id: string;

  title: string;

  description: string;

  upVotes: number;

  comments: number;

  tags: Array<string>;

  upVoted: boolean;

  constructor(newPost: IFeedNewPost) {
    this.id = uuid();
    this.title = newPost.title;
    this.description = newPost.description;
    this.upVotes = 0;
    this.comments = 0;
    this.tags = newPost.tags;
    this.upVoted = false;
  }
}

export default FeedPostModel;
