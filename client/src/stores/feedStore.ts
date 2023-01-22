import { makeAutoObservable } from "mobx";
import FeedPostModel from "../models/feedPostModel";
import { IFeedNewPost, IFeedPost, TFilters, TTag } from "../types/feedTypes";

class FeedStore {
  posts: Array<IFeedPost> = [
    {
      id: "test",
      title: "Добавить валидацию",
      description: "Необходимо добавить валидацию",
      upVotes: 21,
      comments: 2,
      tags: ["UI"],
      upVoted: false,
    },
  ];
  selectedPost: IFeedPost | null = null;
  activeFilter: TFilters = "Не выбрано";
  activeTag: TTag = "Все";
  isLoading = false;
  isFailed = false;

  constructor() {
    makeAutoObservable(this);
  }

  addNewPost(newPost: IFeedNewPost) {
    const feedPost = new FeedPostModel(newPost);
    this.posts.push(feedPost);
  }

  getSinglePost(postId: string) {
    this.isLoading = true;

    this.selectedPost = this.posts.find((post) => post.id === postId);

    this.isLoading = false;
  }

  addUpvote(postId: string) {
    const postIndexToUpdate = this.posts.findIndex(
      (post) => post.id === postId
    );
    const postToUpdate = this.posts[postIndexToUpdate];

    this.posts[postIndexToUpdate] = {
      ...postToUpdate,
      upVotes: postToUpdate.upVotes + 1,
      upVoted: true,
    };
  }

  removeUpvote(postId: string) {
    const postIndexToUpdate = this.posts.findIndex(
      (post) => post.id === postId
    );

    const postToUpdate = this.posts[postIndexToUpdate];

    this.posts[postIndexToUpdate] = {
      ...postToUpdate,
      upVotes: postToUpdate.upVotes - 1,
      upVoted: false,
    };
  }

  changeActiveTag(newTag: TTag) {
    this.activeTag = newTag;
  }

  setNewFilter(filterValue: TFilters) {
    this.activeFilter = filterValue;
  }
}

export default new FeedStore();
