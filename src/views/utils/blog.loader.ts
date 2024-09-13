import { Params } from 'react-router-dom';
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
}