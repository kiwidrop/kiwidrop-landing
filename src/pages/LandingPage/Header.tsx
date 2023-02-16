import cn from 'classnames';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import LOGO from '@/assets/logo.png';
import { Button } from '@/components/common';
import { useDesktop } from '@/hooks';

import css from './Header.module.scss';
import MenuToggle from './MenuToggle';

const joinNow = 'Join Now';

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

  const logo = <img src={LOGO} alt="Logo" className={css.logo} />;
  const menu = (
    <ul className={css.menu_wrapper}>
      <li className={css.menu_item_wrapper}>
        <a href="https://help.kiwidrop.com/knowledge/about-us" target="_blank" rel="noreferrer">
          About us
        </a>
      </li>
      <li className={css.menu_item_wrapper}>
        <a href="https://apps.shopify.com/kiwidrop" target="_blank" rel="noreferrer">
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

  const toggleMenu = () => {
    setIsMenuVisible((preState) => !preState);
  };

  const handleJoinNow = () => {};

  if (isDesktop) {
    return (
      <div className={cn(css.ns_com_header_main, css.is_desktop, { [css.scrolled]: isScrolled })}>
        <div className={css.left}>
          {logo}
          {menu}
        </div>
        <div className={css.right}>
          <Button shape="rounded">{joinNow}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(css.ns_com_header_main, css.is_m)}>
      <motion.div initial={false} animate={isMenuVisible ? 'open' : 'closed'} custom={height} ref={containerRef}>
        <motion.div className={css.menu_back} variants={sidebar}>
          {menu}
        </motion.div>
        <MenuToggle toggle={toggleMenu} />
      </motion.div>
      {logo}
      <div className={css.join_now} onClick={handleJoinNow}>
        {joinNow}
      </div>
    </div>
  );
};

export default Header;
