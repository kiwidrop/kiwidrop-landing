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
      <div className={css.video_wrapper}>
        <video muted autoPlay loop>
          <source src={videoURL} type="video/webm" />
          Your browser not support HTML5 video tag.
        </video>
      </div>
      <div className={css.block_wrapper_wrapper}>
        <div className={css.block_wrapper}>
          <div className={css.line_1}>Our Mission</div>
          <div className={css.line_2}>
            We believe the future of retail is <span>SOCIAL</span> and the majority of product discovery will be driven
            by
            <span>INDIVIDUALS</span> that have <span>INFLUENCE</span> their audiences.
          </div>
          <div className={css.line_3}>
            Our software and cloud inventory is the backbone that empowers everyone from micro influencers to mega
            boutiques with zero-overhead access to highly curated, on-demand, trending fashion.
          </div>
          <div className={css.line_4}>Start now and sell in less than 15 minutes.</div>
          <div className={css.line_5}>
            <Button shape="rounded" color="light_dark" bordered type="link" href={DS2_URL}>
              Join The Revolution!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartOurMission;
