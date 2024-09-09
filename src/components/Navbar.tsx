import { FC, useEffect, useState, useRef } from 'react';
import { GiGalaxy } from 'react-icons/gi';
import { CgMenuGridO } from 'react-icons/cg';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { BiBookmarkHeart } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

import { concatClasses } from '@/utils/helpers';
import classNames from '@/components/styles/Navbar.module.scss';

const pageLinks = [
  {
    id: 1,
    name: 'Home',
    url: '/',
  },
  {
    id: 2,
    name: 'Blog',
    url: '/blog',
  },
  {
    id: 3,
    name: 'Categories',
    url: '/categories',
  },
  {
    id: 4,
    name: 'Authors',
    url: '/authors',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/contact',
  },
];

/**
 * Custom utility hook
 */
const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  return {
    isOpen,
    toggle,
    open,
    close,
  };
};

/**
 * SideBar utility component
 */
const SideBar = ({
  handleClose,
  open,
}: {
  handleClose: () => void;
  open: boolean;
}) => {
  const location = useLocation();

  // Helpful for keeping of first renders of this component
  const hasPreviouslyRendered = useRef(false);

  useEffect(() => {
    if (hasPreviouslyRendered.current === true) {
      handleClose();
    }
    hasPreviouslyRendered.current = true;
    // eslint-disable-next-line
  }, [location]);

  return (
    <div
      className={
        open
          ? concatClasses(classNames.showSidebar, classNames.sidebar)
          : classNames.sidebar
      }
    >
      {/* <button onClick={() => handleClose()}>Close Me</button>
       */}
      <IoCloseCircleOutline
        onClick={() => handleClose()}
        className={classNames.closeButton}
      />
      <div className={classNames.logo}>
        <GiGalaxy />
        <h1>Nova</h1>
      </div>
      <div className={classNames.pages}>
        {pageLinks.map((item) => (
          <span key={item.id}>
            <Link to={item.url}>{item.name}</Link>
          </span>
        ))}
      </div>
      {/* Wishlist Button */}
      <BiBookmarkHeart className={classNames.wishlist} />
    </div>
  );
};

/**
 * Navbar main component
 * @returns <Navbar />
 */
const Navbar: FC = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <nav className={classNames.navbar}>
        <div className={classNames.logo}>
          <GiGalaxy />
          <h1>Nova</h1>
        </div>
        <ul className={classNames.pages}>
          {pageLinks.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {/* Wishlist button */}
        <BiBookmarkHeart className={classNames.wishlist} />
        <div className={classNames.menubar}>
          <CgMenuGridO onClick={() => open()} />
        </div>
      </nav>
      <SideBar handleClose={close} open={isOpen} />
    </>
  );
};

export default Navbar;
