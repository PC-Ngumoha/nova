import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { Home, Blog, Authors, Categories, Contact, Post } from '@/views';
import {
  getAllAuthors,
  getAllBlogPosts,
  getSpecificBlogPost,
} from '@/views/utils';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'blog',
        loader: getAllBlogPosts,
        element: <Blog />,
      },
      {
        path: 'blog/post/:postID',
        loader: getSpecificBlogPost,
        element: <Post />,
      },
      {
        path: 'authors',
        loader: getAllAuthors,
        element: <Authors />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
