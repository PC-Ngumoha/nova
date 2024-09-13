import { FC, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Banner } from '@/components';
import { IAuthor } from '@/types';
import classNames from '@/views/styles/Authors.module.scss';

const pitchMessage =
  'Discover the passionate explorers, scientists, and writers who bring the universe to life. Learn about their expertise, stories, and the journeys that inspire their cosmic insights.';

const Authors: FC = () => {
  const data = useLoaderData() as IAuthor[];

  const [authors, setAuthors] = useState<IAuthor[] | undefined>();

  useEffect(() => {
    setAuthors(data);
  }, []);

  return (
    <>
      <Banner
        caption='Our Authors'
        pitch={pitchMessage}
      />
      <main className={classNames.authors}>
        {authors?.map((author) => (
          <div
            key={author.id}
            className={classNames.card}
          >
            <img src={author.avatar} />
            <div className={classNames.summary}>
              <span className={classNames.name}>
                {author.firstName} {author.lastName}
              </span>
              <span className={classNames.occupation}>{author.occupation}</span>
              <span className={classNames.institution}>
                {author.Institution}
              </span>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Authors;
