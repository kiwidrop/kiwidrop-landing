import cn from 'classnames';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { HiMinus } from 'react-icons/hi';

import LOGO from '@/assets/logo.png';
import { Button } from '@/components/common';
import { DS2_URL, installURL } from '@/cons/common';
import { useDesktop } from '@/hooks';

import css from './Header.module.scss';
import MenuToggle from './MenuToggle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(25px at 40px 40px)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const isDesktop = useDesktop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const openDS2 = () => {
    window.open(DS2_URL);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(document.documentElement.scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (containerRef?.current) {
      setHeight(containerRef?.current?.offsetHeight);
    }
  }, []);

  const logo = <img role="presentation" src={LOGO} alt="Logo" className={css.logo} onClick={openDS2} />;
  const menu = (
    <ul className={css.menu_wrapper}>
      <li className={css.menu_item_wrapper}>
        <a href={DS2_URL} target="_blank" rel="noreferrer">
          Start Selling
        </a>
      </li>
      <li className={css.menu_item_wrapper}>
        <a href={installURL} target="_blank" rel="noreferrer">
          Install now
        </a>
      </li>
      <li className={css.menu_item_wrapper}>
        <a href="mailto:support@kiwidrop.com" target="_blank" rel="noreferrer">
          Contact us
        </a>
      </li>
    </ul>
  );
  const secondMenu = (
    <ul className={css.menu_wrapper}>
      <li className={css.menu_item_wrapper}>
        <a href={DS2_URL} target="_blank" rel="noreferrer">
          Join now
        </a>
      </li>
      <li className={css.menu_item_wrapper}>
        <a href={installURL} target="_blank" rel="noreferrer">
          Log in
        </a>
      </li>
    </ul>
  );

  const toggleMenu = () => {
    setIsMenuVisible((preState) => !preState);
  };

  if (isDesktop) {
    return (
      <div className={cn(css.ns_com_header_main, css.is_desktop, { [css.scrolled]: isScrolled })}>
        <div className={css.content}>
          <div className={css.left}>
            {logo}
            {menu}
          </div>
          <div className={css.right}>
            <Button shape="rounded" color={isScrolled ? 'dark' : 'white'} type="link" href={DS2_URL}>
              Log in
            </Button>
            <Button shape="rounded" color="white" style={{ background: '#CFF963' }} type="link" href={DS2_URL}>
              Join Now
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(css.ns_com_header_main, css.is_m)}>
      <div className={css.content}>
        <motion.div initial={false} animate={isMenuVisible ? 'open' : 'closed'} custom={height} ref={containerRef}>
          <motion.div className={css.menu_back} variants={sidebar}>
            <div className={css.logo}>{logo}</div>
            {menu}
            <div className={css.minus}>
              <HiMinus />
            </div>
            {secondMenu}
          </motion.div>
          <MenuToggle toggle={toggleMenu} />
        </motion.div>
        {logo}
        <a className={css.join_now} href={DS2_URL}>
          Join Now
        </a>
      </div>
    </div>
  );
};

export default Header;
