import classNames from '@/components/styles/Banner.module.scss';

const Banner = ({ caption, pitch }: { caption: string; pitch: string }) => {
  return (
    <div className={classNames.banner}>
      <span className={classNames.caption}>{caption}</span>
      <span className={classNames.pitch}>{pitch}</span>
    </div>
  );
};

export default Banner;
