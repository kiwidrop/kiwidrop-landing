import allArrows from '@/assets/landing-v2/Arrows/all-arrows.png';
import { Button } from '@/components/common';
import { DS2_URL } from '@/cons/common';
import useDesktop from '@/hooks';

import css from './PartQuantityAssured.module.scss';

const part_quantity_assured = [
  {
    bg: 'https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Closed_Loop_1.webp?v=1676351127',
    title: 'Real quality factory relationships',
    desc: 'Our team visits factories in person to ensure they meet our bar for quality and working conditions. We’re constantly keeping track of defects, delivery times and more. If a factory does not meet our bar, we won’t sell them in our catalog.',
  },
  {
    bg: 'https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Closed_Loop_2.webp?v=1676351127',
    title: 'Final inspection before we ship',
    desc: 'We inspect every item prior to shipping to ensure there are no manufacturing defects. If there is a defect we’ll attempt to replace and keep you informed you through the entire process.',
  },
  {
    bg: 'https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Closed_Loop_3.webp?v=1676351127',
    title: 'Closed loop feedback from you',
    desc: 'Once you or your customer receives an order, be sure to let us know about your experience. If there’s anything that doesn’t meet our bar, it’s out. We’re always looking for ways to improve our service, we depend on your feedback!',
  },
];

const PartQuantityAssured = () => {
  const isDesktop = useDesktop();

  return (
    <div className={css.part_quantity_assured}>
      <div className={css.line_1}>Quality assured Production</div>
      <div className={css.line_2}>
        Add variety and margin by using our care-free international suppliers. No more Alibaba mystery shipments, we
        believe in closed loop quality control and stringent factory vetting.
      </div>
      <div className={css.line_3}>
        {part_quantity_assured.map(({ bg, title, desc }) => (
          <section key={title} className={css.section}>
            <div className={css.left}>
              <img src={bg} alt="" />
            </div>
            <div className={css.right}>
              <div className={css.title}>{title}</div>
              <div className={css.desc}>{desc}</div>
            </div>
          </section>
        ))}
        {isDesktop && <img className={css.back_img} src={allArrows} alt="arrow" />}
      </div>
      <div className={css.line_4}>
        <Button shape="rounded" color="light_dark" bordered type="link" href={DS2_URL}>
          Get Started For Free
        </Button>
      </div>
    </div>
  );
};

export default PartQuantityAssured;
