import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import { PiHandsClappingFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { Banner } from '@/components';
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

const pitchMessage =
  'Stay up-to-date on the latest space missions, tech innovations, and discoveries. From distant galaxies to the future of human space travel, dive into the wonders of the universe with us!';

const Blog: FC = () => {
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
        <article className={classNames.listing}>
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
        </article>
      </main>
    </>
  );
};

export default Blog;
