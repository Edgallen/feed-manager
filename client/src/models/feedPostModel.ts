import { IFeedNewPost } from "../types/feedTypes";
import { IFeedPost } from "../types/feedTypes";
import { v4 as uuid } from "uuid";

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
