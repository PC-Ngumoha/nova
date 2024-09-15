export interface IAuthor {
  id: number;
  firstName: string;
  lastName: string;
  occupation: string;
  title: string;
  Institution: string;
  avatar: string;
}

export interface IBlog {
  id: number;
  title: string;
  body: string;
  datePublished: string;
  authorId: number;
  likesCount: number;
  avatar: string;
  category: string;
  author?: IAuthor;
}

export interface IComment {
  id: number;
  authorName: string;
  body: string;
}

export interface IInteraction {
  postId: number;
  liked: boolean;
  comments?: IComment[];
}

export type InteractionContextType = {
  interactions: IInteraction[];
  togglePostLike: (val: number) => void;
  isPostLiked: (val: number) => boolean;
};