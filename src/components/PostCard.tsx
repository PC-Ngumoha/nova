import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { IBlog } from '@/types';
import classNames from '@/components/styles/PostCard.module.scss';

const PostCard = ({ post }: { post: IBlog }) => {
  return (
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
            ? post.body.substring(0, 50) + '...'
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
  );
};

export default PostCard;
