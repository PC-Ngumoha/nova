import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';

import { IComment } from '@/types';
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

  console.log(comments);

  return (
    open && (
      <section className={classNames.overlay}>
        <div className={classNames.panel}>
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
                // TODO: Refactor card into individual component
                // TODO: Make it so that extremely long text gets cut progressively
                <div
                  key={comment.id}
                  className={classNames.card}
                >
                  <div className={classNames.heading}>
                    <span>{comment.authorName}</span>
                    <MdOutlineDelete
                      className={classNames.delete}
                      onClick={() => removeComment(postId, comment.id)}
                    />
                  </div>
                  <div className={classNames.body}>{comment.body}</div>
                </div>
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
