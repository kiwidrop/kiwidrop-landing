import cn from 'classnames';
import { FaAngleDown } from 'react-icons/fa';

import { Button } from '@/components/common';
import { DS2_URL, installURL } from '@/cons/common';
import { useDesktop } from '@/hooks';

import css from './PartScaleYourLife.module.scss';

const PartScaleYourLife = () => {
  const isDesktop = useDesktop();

  const handleSee = () => {
    // 点击后滚动到视频部分
    window.scrollTo(0, window.innerHeight);
  };

  if (isDesktop) {
    return (
      <div className={css.part_scale_your_live_main}>
        {/* 背景 */}
        <div className={css.left} />
        <div className={css.right}>
          <div className={css.list}>
            <div className={css.rowup}>
              <img src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Waterfall.webp?v=1676349541" alt="" />
              <img src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Waterfall.webp?v=1676349541" alt="" />
            </div>
          </div>
          <div className={css.right_content}>
            <img src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Floating.webp?v=1676349541" alt="" />
          </div>
        </div>
        <div className={css.content}>
          <div className={css.left_content}>
            <p className={css.line_1}>Scale Your Live Streaming Boutique</p>
            <p className={css.line_2}>
              Stop gambling on inventory. Focus on curating drops, connecting with people, and delighting lives.
            </p>
            <div className={cn(css.btns_wrapper, css.line_3)}>
              <Button shape="rounded" color="dark" className={css.btn1} type="link" href={DS2_URL}>
                Start for free
              </Button>
              <Button bordered shape="rounded" color="white" className={css.btn2} type="link" href={installURL}>
                Install for Shopify
              </Button>
            </div>
            <p className={css.line_4}>
              Join a community of thousands of live selling and traditional boutiques, immediately start selling
              high-margin products from the US and abroad.
            </p>
          </div>
        </div>
        <div className={css.see_why_btn_wrapper}>
          <Button className={css.see_why_btn} shape="rounded" onClick={handleSee}>
            See what happens
            <FaAngleDown />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={css.part_scale_your_live_main}>
      <div className={css.right}>
        <div className={css.list}>
          <div className={css.rowup}>
            <img
              src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/landing-waterfall-mobile.webp?v=16769441911"
              alt=""
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/landing-waterfall-mobile.webp?v=1676944191"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={css.content}>
        <div className={css.left_content}>
          <p className={css.line_1}>Scale Your Live Streaming Boutique</p>
          <p className={css.line_2}>
            Stop gambling on inventory, focus on curating drops from our inventory catalog in the cloud
          </p>
          <div className={cn(css.btns_wrapper, css.line_3)}>
            <Button shape="rounded" color="dark" className={css.btn1} type="link" href={DS2_URL}>
              Start for free
            </Button>
            <Button bordered shape="rounded" color="white" className={css.btn2} type="link" href={installURL}>
              Install for Shopify
            </Button>
          </div>
          <p className={css.line_4}>
            Join a community of thousands of live selling and traditional boutiques, immediately start selling
            high-margin products from the US and abroad.
          </p>
        </div>
        <div className={css.right_content} />
      </div>
    </div>
  );
};

export default PartScaleYourLife;
