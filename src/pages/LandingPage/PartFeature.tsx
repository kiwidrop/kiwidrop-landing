import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

import { Button } from '@/components/common';
import { DS2_URL } from '@/cons/common';
import { useDesktop } from '@/hooks';

import css from './PartFeature.module.scss';

const part_feature = [
  {
    title: 'Inventory Sync & Reliability',
    desc: '100% Automatically sync inventory and orders with zero-touch from you if you choose. ',
  },
  {
    title: 'Curation Meets Variety',
    desc: 'Our AI tools and good old fashion experience work together to ensure in-demand products at your fingertips.',
  },
  {
    title: 'Auto Price Rules',
    desc: 'Automatically set your default markup for fast and easy importing.',
  },
  {
    title: 'Local Pickup',
    desc: 'Easily facility your Shopify or CommentSold local pickups using our Local Pickup feature.',
  },
  {
    title: 'Anonymous Shipping w/ Branded Invoice',
    desc: 'Products arrive to your customer with your branding so no one ever knows we’re your partner.',
  },
  {
    title: 'Branded Invoice',
    desc: 'Products arrive to your customer with your branding so no one ever knows we’re your partner.',
  },
  {
    title: 'Hold & Combine',
    desc: 'Our systems can auto combine orders from the same customers, saving your BIG on shipping costs.',
  },
  {
    title: 'Multi-Store Integration',
    desc: 'Manage multiple Shopify stores from your Kiwi account. ',
  },
];

const PartFeature = () => {
  const isDesktop = useDesktop();
  const [isShow, setIsShow] = useState(false);
  const showMask = !isDesktop && !isShow;

  const variants = {
    show: {
      height: 'fit-content',
    },
    hide: {
      height: '540px',
    },
  };

  const seeMore = () => {
    setIsShow((preState) => !preState);
  };

  const sectionItems = (
    <>
      {part_feature.map(({ title, desc }) => (
        <section className={css.section} key={title}>
          <p className={css.title}>{title}</p>
          <p className={css.desc}>{desc}</p>
        </section>
      ))}
    </>
  );

  return (
    <div className={css.part_feature}>
      <p className={css.line_1}>Features</p>
      <p className={css.line_2}>
        Smart features that <span>de-stress</span> you.
      </p>
      <div className={css.line_3}>
        {isDesktop ? (
          <div className={css.section_wrapper}>{sectionItems}</div>
        ) : (
          <motion.div className={css.section_wrapper} animate={isShow ? 'show' : 'hide'} variants={variants}>
            {sectionItems}
            {showMask && <div className={css.mask} />}
          </motion.div>
        )}
        {!isDesktop && (
          <div className={css.btn_wrapper}>
            {!isShow && (
              <div className={css.see_more} onClick={seeMore}>
                <span>Show more features</span>
                <FaChevronUp />
              </div>
            )}
            <div className={css.line_4}>
              <Button shape="rounded" color="dark" bordered type="link" href={DS2_URL}>
                Get Started For Free
              </Button>
            </div>
          </div>
        )}
      </div>
      {isDesktop && (
        <div className={css.line_4}>
          <Button shape="rounded" color="dark" bordered type="link" href={DS2_URL}>
            Get Started For Free
          </Button>
        </div>
      )}
    </div>
  );
};

export default PartFeature;
