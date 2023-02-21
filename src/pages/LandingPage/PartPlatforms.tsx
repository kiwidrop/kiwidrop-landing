import commentSold from '@/assets/landing-v2/ChannelsLogos/commentSold.webp';
import facebook from '@/assets/landing-v2/ChannelsLogos/facebook.webp';
import ins from '@/assets/landing-v2/ChannelsLogos/ins.webp';
import poshmark from '@/assets/landing-v2/ChannelsLogos/poshmark.webp';
import shopify from '@/assets/landing-v2/ChannelsLogos/shopify.webp';
import tiktok from '@/assets/landing-v2/ChannelsLogos/tiktok.webp';

import css from './PartPlatforms.module.scss';

const part_platforms = [facebook, shopify, commentSold, tiktok, ins, poshmark];

const PartPlatforms = () => (
  <div className={css.part_platforms}>
    <div className={css.line_1}>Platforms & Integrations</div>
    <p className={css.line_2}>Unleash your ability to grow.</p>
    <p className={css.line_3}>All you need is an iPhone, ring light and Kiwi.</p>
    <div className={css.line_4}>
      {part_platforms.map((src) => (
        <img className={css.img} src={src} alt={src} key={src} />
      ))}
    </div>
  </div>
);

export default PartPlatforms;
