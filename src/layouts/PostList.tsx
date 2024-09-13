import { useState, useEffect } from 'react';

import { IBlog } from '@/types';
import { PostCard, Pagination } from '@/components';
import classNames from '@/layouts/styles/PostList.module.scss';

const PostList = ({ data }: { data: IBlog[] }) => {
  const [blogList, setBlogList] = useState<IBlog[] | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const handlePageChange = (idx: number): void => {
    setCurrentPage(idx);
  };

  useEffect(() => {
    const start = (currentPage - 1) * postsPerPage;
    const end = currentPage * postsPerPage;
    const displayedPage = [...data.slice(start, end)];

    setBlogList(displayedPage);
  }, [currentPage]);

  return (
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
  );
};

export default PostList;
