import { IUser } from "./userTypes";

// TODO: Удалить тестовый тип
export interface ITestComment {
  id: string;
  user: {
    name: string;
    username: string;
  };
  text: string;
  replies: [];
}

interface IReply {
  replyTo: string;
}

export interface IComment {
  id: string;
  user: IUser;
  comment: string;
  replies: Array<IReply>;
}
