import { FC, useEffect, useState } from 'react';

import { concatClasses } from '@/utils/helpers';
import classNames from '@/components/styles/Pagination.module.scss';

type PaginationProps = {
  length: number;
  perPage: number;
  currentPage: number;
  handlePageChange: (value: number) => void;
};

/**
 * Displays a set of buttons representing pages of paginated content
 *
 * @param length
 * @param perPage
 * @param currentPage
 * @param handlePageChange
 *
 * @returns <Pagination />
 */
const Pagination: FC<PaginationProps> = ({
  length,
  perPage,
  currentPage,
  handlePageChange,
}): JSX.Element => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const newPages = [];
    for (let i = 1; i <= Math.ceil(length / perPage); i++) {
      newPages.push(i);
    }
    setPages(newPages);
  }, [length]);

  return (
    <div className={classNames.pagination}>
      {pages.map((page, idx) =>
        page === currentPage ? (
          <button
            key={idx}
            className={concatClasses(
              classNames.pageButtons,
              classNames.current,
            )}
            onClick={() => handlePageChange(idx + 1)}
          >
            {page}
          </button>
        ) : (
          <button
            key={idx}
            className={classNames.pageButtons}
            onClick={() => handlePageChange(idx + 1)}
          >
            {page}
          </button>
        ),
      )}
    </div>
  );
};

export default Pagination;
