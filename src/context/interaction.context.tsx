import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';

import { IInteraction, InteractionContextType } from '@/types';

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
  }, [interactions]);

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

  return (
    <interactionContext.Provider
      value={{ interactions, togglePostLike, isPostLiked }}
    >
      {children}
    </interactionContext.Provider>
  );
};

export const useInteraction = () => useContext(interactionContext);
