import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';

import { IInteraction, InteractionContextType, IComment } from '@/types';

const initialState: IInteraction[] = [];

const interactionContext = createContext<InteractionContextType | null>(null);

export const InteractionProvider = ({ children }: { children: ReactNode }) => {
  const keyName = 'interactions';

  const [interactions, setInteractions] = useState(initialState);

  const retrieveInteractions = (): IInteraction[] => {
    let retrieved: IInteraction[] = [];

    if (localStorage.getItem(keyName)) {
      retrieved = JSON.parse(localStorage.getItem(keyName)!);
    }

    return retrieved;
  };

  const saveInteractions = (value: IInteraction[]): void => {
    localStorage.setItem(keyName, JSON.stringify(value));
  };

  useEffect(() => {
    const value = retrieveInteractions();
    setInteractions(value);
  }, []);

  // LIKES
  const togglePostLike = (postId: number): void => {
    let post = interactions.find((post) => post.postId === postId);
    const newInteractions = interactions.filter(
      (post) => post.postId !== postId,
    );

    if (post) {
      // inverts previous value
      post.liked = !post.liked;
    } else {
      // Like the post
      post = { postId, liked: true };
    }

    newInteractions.push(post);
    saveInteractions(newInteractions);
    setInteractions(newInteractions);
  };

  const isPostLiked = (postId: number): boolean => {
    const post = interactions.find((post) => post.postId === postId);

    if (!post) {
      return false;
    }

    return post.liked;
  };

  // COMMENTS

  const addCommentToPost = (postId: number, body: IComment): void => {
    const post = interactions.find(
      (interaction) => interaction.postId === postId,
    );

    if (!post) {
      return;
    }

    if (post.comments) {
      post.comments.push(body);
    } else {
      post.comments = [body];
    }

    const newInteractions = [
      ...interactions,
      { ...post, comments: [...post.comments] },
    ];
    saveInteractions(newInteractions);
    setInteractions(newInteractions);
  };

  const removeCommentFromPost = (postId: number, id: number): void => {
    const post = interactions.find(
      (interaction) => interaction.postId === postId,
    );

    if (!post) {
      return;
    }

    // Filters out the target post from the list of interactions
    // Deletes the comment iin question and then adds the post back.
    const newInteractions = [
      ...interactions.filter((item) => item.postId !== postId),
      {
        ...post,
        comments: [...post.comments!.filter((comment) => comment.id !== id)],
      },
    ];

    saveInteractions(newInteractions);
    setInteractions(newInteractions);
  };

  const retrievePostComments = (postId: number): IComment[] => {
    const output = interactions.find(
      (interaction) => interaction.postId === postId,
    );
    return output?.comments ? output.comments : [];
  };

  return (
    <interactionContext.Provider
      value={{
        interactions,
        togglePostLike,
        isPostLiked,
        addCommentToPost,
        removeCommentFromPost,
        retrievePostComments,
      }}
    >
      {children}
    </interactionContext.Provider>
  );
};

export const useInteraction = () => useContext(interactionContext);
