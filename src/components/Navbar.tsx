import { FC, useEffect, useState, useRef } from 'react';
import { GiGalaxy } from 'react-icons/gi';
import { CgMenuGridO } from 'react-icons/cg';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { BiBookmarkHeart } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
  // {
  //   id: 3,
  //   name: 'Categories',
  //   url: '/categories',
  // },
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
const useOpenAndClose = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
  };
};

type SidebarProps = {
  handleClose: () => void;
  open: boolean;
};

/**
 * SideBar utility component
 *
 * @param handleClose - handles closing the sidebar
 * @param open - is sidebar open ?
 *
 * @returns <SideBar />
 */
const SideBar: FC<SidebarProps> = ({ handleClose, open }): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  // Keeps track of components first render
  const hasPreviouslyRendered = useRef(false);

  // Toggles mounting and unmounting of component with change in location
  useEffect(() => {
    if (hasPreviouslyRendered.current) {
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
      {/* Close Button */}
      <IoCloseCircleOutline
        onClick={() => handleClose()}
        className={classNames.closeButton}
      />
      {/* Logo */}
      <div className={classNames.logo}>
        <GiGalaxy />
        <h1>Nova</h1>
      </div>
      {/* Page Links */}
      <div className={classNames.pages}>
        {pageLinks.map((item) => (
          <span key={item.id}>
            <Link to={item.url}>{item.name}</Link>
          </span>
        ))}
      </div>
      {/* Wishlist Button */}
      <BiBookmarkHeart
        className={classNames.wishlist}
        onClick={() => navigate('/wishlist')}
      />
    </div>
  );
};

/**
 * Navbar main component
 *
 * @returns <Navbar />
 */
const Navbar: FC = (): JSX.Element => {
  const { isOpen, open, close } = useOpenAndClose();
  const navigate = useNavigate();

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
        <BiBookmarkHeart
          className={classNames.wishlist}
          onClick={() => navigate('/wishlist')}
        />
        <div className={classNames.menubar}>
          <CgMenuGridO onClick={() => open()} />
        </div>
      </nav>
      <SideBar
        handleClose={close}
        open={isOpen}
      />
    </>
  );
};

export default Navbar;
