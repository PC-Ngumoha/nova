import { FC } from 'react';

import { Banner } from '@/components';
import classNames from '@/views/styles/Authors.module.scss';
import thyrone from '@/assets/images/thyrone_adebayo.jpg';
import trace from '@/assets/images/trace_constant.jpg';
import chioma from '@/assets/images/chioma_modi.jpg';

const pitchMessage =
  'Discover the passionate explorers, scientists, and writers who bring the universe to life. Learn about their expertise, stories, and the journeys that inspire their cosmic insights.';

const Authors: FC = () => {
  return (
    <>
      <Banner
        caption='Our Authors'
        pitch={pitchMessage}
      />
      <main className={classNames.authors}>
        <div className={classNames.card}>
          <img src={thyrone} />
          <span>Thyrone Adebayo</span>
        </div>

        <div className={classNames.card}>
          <img src={trace} />
          <span>Trace Constant</span>
        </div>

        <div className={classNames.card}>
          <img src={chioma} />
          <span>Chioma Modi</span>
        </div>
      </main>
    </>
  );
};

export default Authors;
