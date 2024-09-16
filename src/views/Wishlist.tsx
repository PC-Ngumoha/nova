import { FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Banner } from '@/components';
import { formatDate } from '@/utils/helpers';
import { BookmarkContextType } from '@/types';
import { useBookmark } from '@/context/bookmark.context';
import classNames from '@/views/styles/Wishlist.module.scss';
import rocket from '@/assets/images/spacex_rocket.jpg';

const pitchMessage =
  'articles that you may not be able to live without. Trust us to keep them for you.';

const Wishlist = () => {
  const { posts, removeFromBookmark } = useBookmark() as BookmarkContextType;
  const navigate = useNavigate();

  return (
    <>
      <Banner
        caption='saved posts'
        pitch={pitchMessage}
      />
      {posts.length > 0 ? (
        <main className={classNames.wishlist}>
          {posts.map((post) => (
            <div
              key={post.id}
              className={classNames.card}
              onClick={() => {
                navigate(`/blog/post/${post.id}`);
              }}
            >
              <img src={rocket} />
              <div>
                <span>{formatDate(post.datePublished)}</span>
                <span className={classNames.title}>{post.title}</span>
              </div>
              <div className={classNames.deleteContainer}>
                <FaRegTrashAlt
                  onClick={(evt) => {
                    evt.stopPropagation();
                    removeFromBookmark(post.id);
                  }}
                />
              </div>
            </div>
          ))}
        </main>
      ) : (
        <div className={classNames.message}>No posts added yet</div>
      )}
    </>
  );
};

export default Wishlist;
