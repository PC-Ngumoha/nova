import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react';

import { IBlog, BookmarkContextType } from '@/types';

const bookmarkContext = createContext<BookmarkContextType | null>(null);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const keyName = 'bookmarks';
  const [posts, setPosts] = useState<IBlog[]>([]);

  const saveBookmarks = (collection: IBlog[]): void => {
    localStorage.setItem(keyName, JSON.stringify(collection));
  };

  useEffect(() => {
    if (localStorage.getItem(keyName)) {
      const collection: IBlog[] = JSON.parse(localStorage.getItem(keyName)!);
      setPosts(collection);
    }
  }, []);

  const addToBookmark = (post: IBlog): void => {
    // add a post to bookmarks
    if (!isBookmarked(post.id)) {
      setPosts((prev) => {
        const newPosts = [...prev, post];
        saveBookmarks(newPosts);
        return newPosts;
      });
    }
  };

  const removeFromBookmark = (id: number): void => {
    // remove a post from bookmarks
    if (isBookmarked(id)) {
      setPosts((prev) => {
        const newPosts = [...prev.filter((post) => post.id !== id)];
        saveBookmarks(newPosts);
        return newPosts;
      });
    }
  };

  const isBookmarked = (id: number): boolean => {
    const post = posts.find((post) => post.id === id);

    return post !== undefined;
  };

  return (
    <bookmarkContext.Provider
      value={{ posts, addToBookmark, removeFromBookmark, isBookmarked }}
    >
      {children}
    </bookmarkContext.Provider>
  );
};

export const useBookmark = () => useContext(bookmarkContext);
