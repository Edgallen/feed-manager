export interface IFeedPost {
  id: string;
  title: string;
  description: string;
  upVotes: number;
  comments: number;
  tags: Array<string>;
  upVoted: boolean;
}

export interface IFeedNewPost {
  title: string;
  tags: Array<string>;
  description: string;
}

export type TFilters =
  | "Не выбрано"
  | "Больше голосов"
  | "Меньше голосов"
  | "Больше комментариев"
  | "Меньше комментариев";

export type TTag = string;
