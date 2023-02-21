import { Button } from '@/components/common';
import { DS2_URL } from '@/cons/common';
import { useDesktop } from '@/hooks';

import css from './PartOurMission.module.scss';

const PartOurMission = () => {
  const isDesktop = useDesktop();
  const videoURL = isDesktop
    ? 'https://cdn.shopify.com/videos/c/o/v/16c1ae80cf374b0083f359278b036a10.webm'
    : 'https://cdn.shopify.com/videos/c/o/v/5fbd7d8039444254a75eb61bbdf60110.webm';

  return (
    <div className={css.part_our_mission}>
      <div
        className={css.video_wrapper}
        style={{
          backgroundImage: `url(https://cdn.shopify.com/s/files/1/0532/6186/1018/files/live-thumbnail.webp?v=1676863824)`,
        }}
      >
        <video
          controls={false}
          muted
          autoPlay
          loop
          poster="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/live-thumbnail.webp?v=1676863824"
          preload="auto"
          playsInline
        >
          <source src={videoURL} type="video/webm" />
          <source src="https://cdn.shopify.com/videos/c/o/v/7d1285ced9724825a4b4bf043f72a95d.mp4" type="video/mp4" />
          Your browser not support HTML5 video tag.
        </video>
      </div>
      <div className={css.block_wrapper_wrapper}>
        <div className={css.block_wrapper}>
          <p className={css.line_1}>Our Mission</p>
          <p className={css.line_2}>
            The future of retail is <span>SOCIAL</span> and driven by <span>INDIVIDUALS</span>
          </p>
          <p className={css.line_3}>
            {`Whether you're a mega boutique or a micro influencer, everyday individuals like you have the power to shape the way we connect, discover, and shop!`}
          </p>
          <p className={css.line_4}>
            Our software, cloud inventory catalog and fulfillment services is the backbone that empowers you with
            zero-overhead access to highly curated and on-demand fashion.
          </p>
          <div className={css.line_5}>
            <Button shape="rounded" color="light_dark" bordered type="link" href={DS2_URL}>
              {isDesktop ? 'Join The Revolution!' : 'Learn More'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartOurMission;
