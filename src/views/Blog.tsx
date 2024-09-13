import { FC, useState, useEffect } from 'react';
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
  const loaderData = useLoaderData() as IBlog[];
  const [data, setData] = useState<IBlog[]>(loaderData);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const handleFiltering = async (s: string) => {
      if (s === '') {
        setData(loaderData);
      } else {
        const newData = [
          // Filters the post based on title only for now.
          // FIXME: Make this more extensive (include filtering by category)
          ...loaderData.filter((post) =>
            post.title.toLocaleLowerCase().includes(s.toLocaleLowerCase()),
          ),
        ];

        setData(newData);
      }
      setLoading(false);
    };

    // Experimental
    setTimeout(handleFiltering, 300, search);
  }, [search]);

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
              placeholder='Search for any title you want'
              value={search}
              onChange={(evt) => setSearch(evt.target.value)}
            />
          </div>
          <div className={classNames.filters}>
            {categories.map((category) => (
              <button key={category.id}>{category.name}</button>
            ))}
          </div>
        </aside>
        <PostList
          data={data}
          loading={loading}
        />
      </main>
    </>
  );
};

export default Blog;
