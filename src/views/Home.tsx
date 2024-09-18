import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { IBlog } from '@/types';
import { NewsletterSignup, PostCard } from '@/components';
import rocket from '@/assets/images/spacex_rocket.jpg';
import classNames from '@/views/styles/Home.module.scss';

const Home: FC = () => {
  const loaderData = useLoaderData() as IBlog[];
  console.log(loaderData);

  return (
    <main className={classNames.home}>
      <section className={classNames.hero}>
        <img src={rocket} />
        <div className={classNames.cta}>
          <span>Fascinated with space ?</span>
          <Link to='/blog'>Read the blog...</Link>
        </div>
      </section>
      <section className={classNames.about}>
        <img src={rocket} />
        <div className={classNames.body}>
          <span>About Us</span>
          <p>
            At Nova, we’re passionate about exploring the universe and sharing
            its wonders with the world. From the latest space missions to
            groundbreaking discoveries, we bring you the stories that shape
            humanity's journey into the stars. Join us as we explore the cosmos,
            one post at a time.
          </p>
        </div>
      </section>
      <section className={classNames.featured}>
        <h3>Featured Blog Posts</h3>
        <div>
          {loaderData.map((data) => (
            <PostCard
              post={data}
              featured
            />
          ))}
        </div>
      </section>
      <NewsletterSignup />
    </main>
  );
};

export default Home;
