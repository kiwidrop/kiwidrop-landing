import { Button } from '@/components/common';
import { DS2_URL } from '@/cons/common';
import { useDesktop } from '@/hooks';

import css from './PartOurMission.module.scss';

const PartOurMission = () => {
  const isDesktop = useDesktop();
  const videoURL = isDesktop
    ? 'https://cdn.shopify.com/videos/c/o/v/16c1ae80cf374b0083f359278b036a10.webm'
    : 'https://cdn.shopify.com/videos/c/o/v/707f09be6b2843dcae4eec84577ce669.mp4';
  const videoType = isDesktop ? 'video/webm' : 'video/mp4';

  return (
    <div className={css.part_our_mission}>
      <div className={css.video_wrapper}>
        <video muted autoPlay loop>
          <source src={videoURL} type={videoType} />
          Your browser not support HTML5 video tag.
        </video>
      </div>
      <div className={css.block_wrapper_wrapper}>
        <div className={css.block_wrapper}>
          <div className={css.line_1}>Our Mission</div>
          <div className={css.line_2}>
            The future of retail is <span>SOCIAL</span> and driven by <span>INDIVIDUALS</span>
          </div>
          <div className={css.line_3}>
            {`Whether you're a mega boutique or a micro influencer, everyday individuals like you have the power to shape the way we connect, discover, and shop!`}
          </div>
          <div className={css.line_4}>
            Our software, cloud inventory catalog and fulfillment services is the backbone that empowers you with
            zero-overhead access to highly curated and on-demand fashion.
          </div>
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
