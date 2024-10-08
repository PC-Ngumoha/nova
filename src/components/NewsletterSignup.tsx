import { FC } from 'react';

import classNames from '@/components/styles/NewsletterSignup.module.scss';

type NewsletterSignupProps = { authorName?: string };

/**
 * Displays a newsletter signup form.
 *
 * @param authorName
 *
 * @returns <NewsletterSignup />
 */
const NewsletterSignup: FC<NewsletterSignupProps> = ({
  authorName = '',
}): JSX.Element => {
  return (
    <div className={classNames.newsletter}>
      <h3>Subscribe to {authorName !== '' ? 'my' : 'our'} newsletter</h3>
      <span>
        Read more articles from{' '}
        <span className={classNames.authorName}>
          {authorName !== '' ? authorName : 'Us'}
        </span>{' '}
        directly inside your Inbox. Subscribe to the newsletter and don't miss
        out.
      </span>
      <form>
        <input
          type='text'
          role='input'
          aria-label='email'
          placeholder='Enter your email'
        />
        <button type='submit'>Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
