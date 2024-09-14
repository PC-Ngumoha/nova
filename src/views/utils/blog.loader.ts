import { Params } from 'react-router-dom';

import {IBlog} from '@/types';
import BlogsData from '@/data/blogPosts.json';
import AuthorsData from '@/data/authors.json';

export const getAllBlogPosts = () => {
  return BlogsData;
};

export const getSpecificBlogPost = ({ params }: { params: Params<"postID"> }) => {
  const postId = params.postID;

  // get the specific post
  const post = BlogsData.find(post => post.id === Number(postId));
  const author = AuthorsData.find(author => author.id === Number(post?.authorId));

  // if author found
  if (author) {
    return {...post, author: {...author}};
  } else {
    return {...post };
  }
};

export const getFeaturedBlogPosts = () => {
  const featured: IBlog[] = [];
  const chosen: number[] = [];

  // Tries to select three posts at random;
  while (featured.length < 3) {
    const idx = Math.floor(Math.random() * BlogsData.length);

    // Prevents selecting the same blog post more than once
    if (!chosen.includes(idx)) {
      featured.push(BlogsData[idx]);
      chosen.push(idx);
    }
  }

  return featured;
};