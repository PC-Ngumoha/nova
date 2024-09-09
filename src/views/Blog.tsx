import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import { PiHandsClappingFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

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
            <span className={classNames.date}>4th December, 2024</span>
            <span className={classNames.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className={classNames.snippet}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              tempora necessitatibus corrupti sed! Unde quae fuga...
            </span>
            <div className={classNames.extras}>
              <span>
                <PiHandsClappingFill /> 70
              </span>
              <Link to={'#'}>
                {/* <PiArrowFatLinesRightFill />
                 */}
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
