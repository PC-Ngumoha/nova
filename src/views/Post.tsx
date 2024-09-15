import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { TfiCommentAlt } from 'react-icons/tfi';
import { BsBookmarkPlus, BsBookmarkCheck } from 'react-icons/bs';

import { NewsletterSignup, CommentsPanel } from '@/components';
import { useInteraction } from '@/context/interaction.context';
import { IBlog, InteractionContextType } from '@/types';
import { formatDate } from '@/utils/helpers';
import classNames from '@/views/styles/Post.module.scss';

const Post = () => {
  const data = useLoaderData() as IBlog;
  const [post] = useState<IBlog>(data);
  const [openComments, setOpenComments] = useState(false);
  const {
    togglePostLike,
    isPostLiked,
    retrievePostComments,
    addCommentToPost,
    removeCommentFromPost,
  } = useInteraction() as InteractionContextType;

  const feedbackOptions = [
    {
      id: 1,
      icon: isPostLiked(post.id) ? FaHeart : FaRegHeart,
      action: () => togglePostLike(post.id),
    },
    {
      id: 2,
      icon: TfiCommentAlt,
      action: () => setOpenComments(true),
    },
    {
      id: 3,
      icon: BsBookmarkPlus,
      altIcon: BsBookmarkCheck,
    },
  ];

  return (
    <main className={classNames.page}>
      {/* Main content */}
      <section className={classNames.post}>
        <img src={post?.avatar} />
        <div className={classNames.meta}>
          <span className={classNames.title}>{post?.title}</span>
          <div className={classNames.author}>
            <img src={post?.author?.avatar} />
            <span>
              {post?.author?.firstName} {post?.author?.lastName}
            </span>
          </div>
          <span className={classNames.date}>
            {formatDate(post?.datePublished)}
          </span>
        </div>
        <div className={classNames.body}>
          {post?.body.split('\n').map((line, idx) => (
            <>
              <p key={idx}>{line}</p>
              <br />
            </>
          ))}
        </div>
      </section>
      {/* Like, comment or add to wishlist */}
      <div className={classNames.feedback}>
        {feedbackOptions.map((option) => (
          <button
            key={option.id}
            onClick={option.action ? option.action : () => {}}
          >
            <option.icon />
          </button>
        ))}
      </div>
      {/* Signup for newsletter */}
      <NewsletterSignup authorName='Thyrone Adebayo' />
      {/* Written By */}
      <section className={classNames.writtenBy}>
        <span>Written By</span>
        <hr />
        <div className={classNames.author}>
          <div className={classNames.heading}>
            <img src={post?.author?.avatar} />
            <span>
              {post?.author?.firstName} {post?.author?.lastName}
            </span>
          </div>
          <div className={classNames.bio}>
            <span className={classNames.occupation}>
              {post?.author?.occupation}
            </span>
            <span className={classNames.institution}>
              {post?.author?.Institution}
            </span>
          </div>
        </div>
      </section>
      {/* Type your commensts here */}
      <CommentsPanel
        open={openComments}
        setOpen={setOpenComments}
        postId={post.id}
        comments={retrievePostComments(post.id)}
        addComment={addCommentToPost}
        removeComment={removeCommentFromPost}
      />
    </main>
  );
};

export default Post;
