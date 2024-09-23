import { FC } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { IBlog } from '@/types';
import { formatDate } from '@/utils/helpers';
import classNames from '@/components/styles/PostCard.module.scss';

type PostCardProps = {
  post: IBlog;
  featured?: boolean;
};

/**
 * Displays a summary card for individual posts
 *
 * @param post
 * @param featured
 *
 * @returns <PostCard />
 */
const PostCard: FC<PostCardProps> = ({
  post,
  featured = false,
}): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      key={post.id}
      className={featured ? classNames.featureCard : classNames.card}
    >
      <img src={post.avatar} />
      <div className={classNames.preview}>
        <span className={classNames.date}>
          {formatDate(post.datePublished)}
        </span>
        <span className={classNames.title}>{post.title}</span>
        <span className={classNames.snippet}>
          {post.body.length >= 80
            ? post.body.substring(0, 100) + '...'
            : post.body}
        </span>
        <div className={classNames.extras}>
          <span>
            <FaRegHeart />
            {post.likesCount}
          </span>
          <Link
            to={`/blog/post/${post.id}`}
            onClick={() => scrollToTop()}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
