import { Banner } from '@/components';
import classNames from '@/views/styles/Wishlist.module.scss';

const pitchMessage =
  'articles that you may not be able to live without. Trust us to keep them for you.';

const Wishlist = () => {
  return (
    <>
      <Banner
        caption='saved posts'
        pitch={pitchMessage}
      />
      <main className={classNames.wishlist}>
        list of saved articles goes here.
      </main>
    </>
  );
};

export default Wishlist;
