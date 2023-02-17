import cn from 'classnames';
import { FaAngleUp } from 'react-icons/fa';

import { Button } from '@/components/common';
import { DS2_URL, installURL } from '@/cons/common';
import { useDesktop } from '@/hooks';

import css from './PartScaleYourLife.module.scss';

const PartScaleYourLife = () => {
  const isDesktop = useDesktop();

  return (
    <div className={css.part_scale_your_live}>
      <div className={css.left}>
        <div className={css.line_1}>Scale Your Live Streaming Boutique</div>
        <div className={css.line_2}>
          Stop gambling on inventory, focus on curating drops from our inventory catalog in the cloud
        </div>
        <div className={cn(css.btns_wrapper, css.line_3)}>
          <Button shape="rounded" color="dark" className={css.btn1} type="link" href={DS2_URL}>
            Start for free
          </Button>
          <Button bordered shape="rounded" color="white" className={css.btn2} type="link" href={installURL}>
            Install for Shopify
          </Button>
        </div>
        <div className={css.line_4}>
          Join a community of thousands of live selling and traditional boutiques, immediately start selling high-margin
          products from the US and abroad.
        </div>
      </div>
      <div className={cn(css.right)}>
        <div className={css.list}>
          <div className={css.rowup}>
            <img src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Waterfall.webp?v=1676349541" alt="img" />
            <img src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Waterfall.webp?v=1676349541" alt="img" />
          </div>
        </div>
        <img
          className={css.pre_img}
          src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Floating.webp?v=1676349541"
          alt="img"
        />
      </div>
      {isDesktop && (
        <div className={css.see_why_btn_wrapper}>
          <Button className={css.see_why_btn} shape="rounded" type="link" href={DS2_URL}>
            See what happens
            <FaAngleUp />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PartScaleYourLife;
