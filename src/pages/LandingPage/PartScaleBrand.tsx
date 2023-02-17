import cn from 'classnames';
import { FaArrowDown, FaArrowUp, FaPlus } from 'react-icons/fa';

import { Button } from '@/components/common';
import { DS2_URL } from '@/cons/common';

import css from './PartScaleBrand.module.scss';

const part_scale_brand = [
  {
    icon: <FaArrowUp />,
    num: '3.2x',
    title: 'Return On Invested Capital Increased.',
    desc: 'Keep ALL your profit. No more buying packs or meeting minimums. Get your margins back from unsold inventories.',
  },
  {
    icon: <FaArrowDown />,
    num: '74%',
    title: 'Reduced Overhead.',
    desc: 'Shrink or completely eliminate your existing warehouse, inventory and personnel.',
  },
  {
    num: '99.8%',
    title: 'Fulfillment Accuracy. ',
    desc: 'Our technology ensures the right items get to the right customer.',
  },
  {
    icon: <FaPlus />,
    num: '6,000',
    title: 'Curated Variety.',
    desc: 'Access our ever-expanding catalog of in demand fashion products & accessories',
  },
];

const PartScaleBrand = () => (
  <div className={css.part_scale_brand}>
    <div className={css.line_1}>
      Scale your <span>brand</span>, not your overhead.
    </div>
    <div className={css.line_2}>
      On average retailers stock 2-4x their monthly revenue in product. Utilizing Kiwi’s cloud inventory retailers can
      finally stop turning their margin into long tail small qty, slow moving, off season dead inventory. Fix your cash
      flow problem and KEEP every dollar of profit you generate.
    </div>
    <div className={css.line_3}>
      {part_scale_brand.map(({ icon, num, title, desc }, idx) => (
        <section className={css.section_item} key={title}>
          <div className={css.num_wrapper}>
            {icon && idx !== part_scale_brand.length - 1 && <span className={cn(css.icon, css.left)}>{icon}</span>}
            <span className={css.num}>{num}</span>
            {icon && idx === part_scale_brand.length - 1 && <span className={cn(css.icon, css.right)}>{icon}</span>}
          </div>
          <div className={css.title}>{title}</div>
          <div className={css.desc}>{desc}</div>
        </section>
      ))}
    </div>
    <div className={css.line_4}>
      <Button shape="rounded" color="light_dark" bordered type="link" href={DS2_URL}>
        Get Started For Free
      </Button>
    </div>
  </div>
);

export default PartScaleBrand;
