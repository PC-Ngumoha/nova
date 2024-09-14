import { GiGalaxy } from 'react-icons/gi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import classNames from '@/components/styles/Footer.module.scss';

const socialLinks = [
  {
    id: 1,
    link: 'https://www.linkedin.com/in/prince-ngumoha-95a633194/',
    icon: FaLinkedin,
  },
  {
    id: 2,
    link: 'https://github.com/PC-Ngumoha',
    icon: FaGithub,
  },
  {
    id: 3,
    link: 'https://twitter.com/PNgumoha',
    icon: FaSquareXTwitter,
  },
];

const Footer = () => {
  return (
    <footer className={classNames.footer}>
      <span className={classNames.logo}>
        <GiGalaxy />
        <span>Nova</span>
      </span>
      <span className={classNames.copyright}>&copy; Copyright @Nova 2024</span>
      <span className={classNames.tagline}>
        Made with love 💓💓 by PC-Ngumoha
      </span>
      <div>
        {socialLinks.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            target='_blank'
            rel='noopener'
          >
            <item.icon />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
