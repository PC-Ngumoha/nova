import classNames from '@/components/styles/NewsletterSignup.module.scss';

const NewsletterSignup = ({ authorName = '' }: { authorName: string }) => {
  return (
    <div className={classNames.newsletter}>
      <h3>Subscribe to my newsletter</h3>
      <span>
        Read more articles from <b>{authorName !== '' ? authorName : 'us'}</b>{' '}
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
