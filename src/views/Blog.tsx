import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

import { Banner } from '@/components';
import { PostList } from '@/layouts';
import { IBlog } from '@/types';
import classNames from '@/views/styles/Blog.module.scss';

const categories = [
  {
    id: 1,
    name: 'space missions',
  },
  {
    id: 2,
    name: 'space technology',
  },
  {
    id: 3,
    name: 'astronauts & space travel',
  },
  {
    id: 4,
    name: 'space news',
  },
  {
    id: 5,
    name: 'the future of space exploration',
  },
];

const pitchMessage =
  'Stay up-to-date on the latest space missions, tech innovations, and discoveries. From distant galaxies to the future of human space travel, dive into the wonders of the universe with us!';

const Blog: FC = () => {
  const data = useLoaderData() as IBlog[];

  return (
    <>
      <Banner
        caption='Blog'
        pitch={pitchMessage}
      />
      <main className={classNames.main}>
        <aside className={classNames.sidebar}>
          <div className={classNames.search}>
            <FaSearch className={classNames.searchButton} />
            <input
              className={classNames.searchBar}
              type='text'
              role='input'
              aria-label='search'
              placeholder='Search by title, tag or category'
            />
          </div>
          <div className={classNames.filters}>
            {categories.map((category) => (
              <button key={category.id}>{category.name}</button>
            ))}
          </div>
        </aside>
        <PostList data={data} />
      </main>
    </>
  );
};

export default Blog;
