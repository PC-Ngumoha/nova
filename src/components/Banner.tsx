import { FC } from 'react';

import classNames from '@/components/styles/Banner.module.scss';

type BannerProps = { caption: string; pitch: string };

/**
 * Displays a banner for a page
 *
 * @param caption
 * @param pitch
 *
 * @returns <Banner />
 */
const Banner: FC<BannerProps> = ({ caption, pitch }): JSX.Element => {
  return (
    <div className={classNames.banner}>
      <span className={classNames.caption}>{caption}</span>
      <span className={classNames.pitch}>{pitch}</span>
    </div>
  );
};

export default Banner;
