import { FC } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';

import classNames from '@/components/styles/CommentsPanel.module.scss';

const CommentsPanel: FC = () => {
  return (
    <section className={classNames.overlay}>
      <div className={classNames.panel}>
        <div className={classNames.heading}>
          <h3>Comments</h3>
          <IoClose className={classNames.close} />
        </div>
        <form action=''>
          <input
            type='text'
            role='input'
            aria-label='author'
            placeholder='What is your name ?'
          />
          <textarea
            role='input'
            aria-label='comment'
            placeholder='Type in your message...'
          ></textarea>
          <button type='submit'>Comment</button>
        </form>
        <div className={classNames.commentList}>
          <div className={classNames.card}>
            <div className={classNames.heading}>
              <span>Thyrone Adebayo</span>
              <MdOutlineDelete className={classNames.delete} />
            </div>
            <div className={classNames.body}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              animi quos praesentium aperiam cupiditate. Incidunt laborum
              reprehenderit neque tenetur minima vitae mollitia illum, inventore
              possimus, voluptatem dolores labore error dicta.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsPanel;
