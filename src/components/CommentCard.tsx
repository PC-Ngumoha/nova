import { FC, useState, useEffect } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

import { IComment } from '@/types';
import classNames from '@/components/styles/CommentCard.module.scss';

type CommentCardProps = {
  comment: IComment;
  postId: number;
  removeComment: (postId: number, id: number) => void;
};

// TODO: Eliminate prop drilling of too many parameters
// TODO: Make it so that extremely long text gets cut progressively
const CommentCard: FC<CommentCardProps> = ({
  comment,
  postId,
  removeComment,
}): JSX.Element => {
  const [body, setBody] = useState<string[]>([]);
  const [limit, setLimit] = useState<number>(1);

  // Enables progressive viewing of comment paragraphs.
  const showMore = () => {
    setLimit((prev) => {
      if (prev < body.length) {
        prev += 1;
      }
      return prev;
    });
  };

  // Reverts the comments back to a single paragraph.
  const showLess = () => {
    setLimit(1);
  };

  useEffect(() => {
    const toView = comment.body.split('\n');
    console.log(toView);
    setBody(toView);
  }, []);

  return (
    <div
      key={comment.id}
      className={classNames.card}
    >
      <div className={classNames.heading}>
        <span>{comment.authorName}</span>
        <FaRegTrashAlt
          className={classNames.delete}
          onClick={() => removeComment(postId, comment.id)}
        />
      </div>
      <div className={classNames.body}>
        {body.slice(0, limit).map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      {body.length !== 1 && (
        <div className={classNames.showButtons}>
          {limit < body.length ? (
            <button onClick={showMore}>show more</button>
          ) : (
            <button onClick={showLess}>show less</button>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentCard;
