import { FC, useEffect, useState } from 'react';
import { GiGalaxy } from 'react-icons/gi';
import { CgMenuGridO } from 'react-icons/cg';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { concatClasses } from '@/utils/helpers';

import classNames from '@/components/styles/Navbar.module.scss';

const pageLinks = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'Blog',
  },
  {
    id: 3,
    name: 'Categories',
  },
  {
    id: 4,
    name: 'Authors',
  },
  {
    id: 5,
    name: 'Contact',
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
          <span key={item.id}>{item.name}</span>
        ))}
      </div>
    </div>
  );
};

/**
 * Navbar main component
 * @returns <Navbar />
 */
const Navbar: FC = () => {
  const { isOpen, open, close } = useToggle();

  useEffect(() => {}, [isOpen]);

  return (
    <>
      <nav className={classNames.navbar}>
        <div className={classNames.logo}>
          <GiGalaxy />
          <h1>Nova</h1>
        </div>
        <ul className={classNames.pages}>
          {pageLinks.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <div className={classNames.menubar}>
          <CgMenuGridO onClick={() => open()} />
        </div>
      </nav>
      <SideBar handleClose={close} open={isOpen} />
    </>
  );
};

export default Navbar;
