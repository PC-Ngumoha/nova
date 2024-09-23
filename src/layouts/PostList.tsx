import { FC, useState, useEffect } from 'react';

import { IBlog } from '@/types';
import { PostCard, Pagination } from '@/components';
import classNames from '@/layouts/styles/PostList.module.scss';

type PostListProps = { data: IBlog[]; loading: boolean };

/**
 * Displays a list of posts
 *
 * @param data
 * @param loading
 *
 * @returns <PostList />
 */
const PostList: FC<PostListProps> = ({ data, loading }): JSX.Element => {
  const [blogList, setBlogList] = useState<IBlog[] | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const handlePageChange = (idx: number): void => {
    setCurrentPage(idx);
  };

  // Utility: Aids in the pagination of the posts displayed.
  useEffect(() => {
    const start = (currentPage - 1) * postsPerPage;
    const end = currentPage * postsPerPage;
    const displayedPage = [...data.slice(start, end)];

    setBlogList(displayedPage);
  }, [currentPage, data]);

  // State: While content still loading
  if (loading) {
    return (
      <div className={classNames.message}>
        <span>Loading ...</span>
      </div>
    );
  }

  return data.length > 0 ? (
    <div className={classNames.listContainer}>
      <article className={classNames.listing}>
        {blogList?.map((post) => <PostCard post={post} />)}
      </article>
      <Pagination
        length={data.length}
        perPage={postsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  ) : (
    <div className={classNames.message}>
      <span>No blog posts match your search. try again.</span>
    </div>
  );
};

export default PostList;
