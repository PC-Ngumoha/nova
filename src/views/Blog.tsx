import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

import classNames from '@/views/styles/Blog.module.scss';
import rocket from '@/assets/images/spacex_rocket.jpg';

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

const Blog: FC = () => {
  return (
    <main className={classNames.main}>
      <section className={classNames.sidebar}>
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
      </section>
      <section className={classNames.listing}>
        <div className={classNames.card}>
          <img src={rocket} />
          <div className={classNames.preview}>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
