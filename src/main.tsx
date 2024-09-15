import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import {
  Home,
  Blog,
  Authors,
  Categories,
  Contact,
  Post,
  Wishlist,
} from '@/views';
import {
  getAllAuthors,
  getAllBlogPosts,
  getSpecificBlogPost,
  getFeaturedBlogPosts,
} from '@/views/utils';
import { InteractionProvider } from '@/context/interaction.context.tsx';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        loader: getFeaturedBlogPosts,
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
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InteractionProvider>
      <RouterProvider router={router} />
    </InteractionProvider>
  </StrictMode>,
);
