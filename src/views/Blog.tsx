import { FC, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

import { Banner } from '@/components';
import classNames from '@/views/styles/Blog.module.scss';
// import rocket from '@/assets/images/spacex_rocket.jpg';

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

interface IBlog {
  id: number;
  title: string;
  body: string;
  datePublished: string;
  authorId: number;
  likesCount: number;
  avatar: string;
  category: string;
}

const Blog: FC = () => {
  const [blogList, setBlogList] = useState<IBlog[] | undefined>();
  const data = useLoaderData() as IBlog[];

  useEffect(() => {
    // FIXME: For the purpose of testing - output only 6 posts until I
    // implement pagination
    const limitedData = [...data.slice(0, 6)];

    setBlogList(limitedData);
  }, []);

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
          {blogList?.map((post) => (
            <div
              key={post.id}
              className={classNames.card}
            >
              <img src={post.avatar} />
              <div className={classNames.preview}>
                <span className={classNames.date}>{post.datePublished}</span>
                <span className={classNames.title}>{post.title}</span>
                <span className={classNames.snippet}>
                  {post.body.length >= 30
                    ? post.body.substring(0, 30) + '...'
                    : post.body}
                </span>
                <div className={classNames.extras}>
                  <span>
                    <FaRegHeart /> {post.likesCount}
                  </span>
                  <Link to={`/blog/post/${post.id}`}>
                    {/* <PiArrowFatLinesRightFill />
                     */}
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </article>
      </main>
    </>
  );
};

export default Blog;
