import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

import { IComment } from '@/types';
import { CommentCard } from '@/components';
import classNames from '@/components/styles/CommentsPanel.module.scss';

const CommentsPanel = ({
  open,
  setOpen,
  postId,
  comments,
  addComment,
  removeComment,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
  postId: number;
  comments: IComment[];
  addComment: (postId: number, body: IComment) => void;
  removeComment: (postId: number, commentId: number) => void;
}) => {
  const [authorName, setAuthorName] = useState('');
  const [body, setBody] = useState('');

  // TOGGLES page scrolling on mounting and unmounting of panel
  useEffect(() => {
    if (open) {
      // Disable scrolling of page content
      document.body.classList.add(classNames.scrollLock);
    } else {
      document.body.classList.remove(classNames.scrollLock);
    }

    // Ensure that scrolling is enabled when component unmounts
    return () => {
      document.body.classList.remove(classNames.scrollLock);
    };
  }, [open]);

  return (
    open && (
      <section
        className={classNames.overlay}
        // Enabling users close the panel by clicking the space outside it.
        onClick={() => {
          setOpen(false);
        }}
      >
        <div
          className={classNames.panel}
          // Preventing such click event from affecting the normal function of
          // the panel
          onClick={(evt) => {
            evt.stopPropagation();
          }}
        >
          <div className={classNames.heading}>
            <h3>Comments</h3>
            <IoClose
              className={classNames.close}
              onClick={() => setOpen(false)}
            />
          </div>
          <form
            onSubmit={(evt) => {
              evt.preventDefault();

              // Adding a new comment
              addComment(postId, {
                id:
                  comments.length > 0
                    ? comments[comments.length - 1].id + 1
                    : 1,
                authorName: authorName,
                body: body,
              });

              // Clearing input fields
              setAuthorName('');
              setBody('');
            }}
          >
            <input
              type='text'
              role='input'
              aria-label='author'
              placeholder='What is your name ?'
              value={authorName}
              onChange={(evt) => setAuthorName(evt.target.value)}
            />
            <textarea
              role='input'
              aria-label='comment'
              placeholder='Type in your message...'
              value={body}
              onChange={(evt) => setBody(evt.target.value)}
            ></textarea>
            <button type='submit'>Comment</button>
          </form>

          {comments.length > 0 ? (
            <div className={classNames.commentList}>
              {comments.map((comment) => (
                // TODO: Find a way to stop having to drill props
                <CommentCard
                  comment={comment}
                  postId={postId}
                  removeComment={removeComment}
                />
              ))}
            </div>
          ) : (
            <div className={classNames.message}>Be the first to comment 👍🏾</div>
          )}
        </div>
      </section>
    )
  );
};

export default CommentsPanel;
