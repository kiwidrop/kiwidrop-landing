import AutoCheckoutHowto from '@/assets/landing-v2/Howto/AutocheckoutHowto.svg';
import BuySamplesHowto from '@/assets/landing-v2/Howto/BuySamplesHowto.svg';
import MarginHowto from '@/assets/landing-v2/Howto/MarginHowto.svg';
import OrderHowto from '@/assets/landing-v2/Howto/OrderHowto.svg';
import QAHowto from '@/assets/landing-v2/Howto/QAHowto.svg';

import css from './Part15Minutes.module.scss';

const part_15_minutes = [
  {
    icon: BuySamplesHowto,
    title: 'Buy Samples, No Minimums',
    desc: 'One or two pieces is all you need to try-on, make fit videos and ads, or go live. Your content is king!',
  },
  {
    icon: MarginHowto,
    title: 'Decide your margin and sell!',
    desc: 'Say goodbye to slim affiliate commissions. Import and sell on  Shopify/CommentSold, with 1 click',
  },
  {
    icon: AutoCheckoutHowto,
    title: 'Auto Checkout',
    desc: 'Our fully automated checkout means you can skip the manual work!',
  },
  {
    icon: QAHowto,
    title: 'Quality Assurance & Shipping',
    desc: 'Your orders are combined, and every item quality-controlled prior to shipping.',
  },
  {
    icon: OrderHowto,
    title: 'Customer Delight!',
    desc: 'Your customers receive orders within 2-10 business days, and leave you glowing reviews!',
  },
];
const Part15Minutes = () => (
  <div className={css.part_15_minutes}>
    <div className={css.line_1}>
      15 minutes from sign up to <span>selling</span>!
    </div>
    <div className={css.line_2}>
      {part_15_minutes.map(({ title, desc, icon }) => (
        <section key={title} className={css.section_item}>
          <div className={css.icon}>
            <img src={icon} alt={title} />
          </div>
          <div className={css.others}>
            <div className={css.title}>{title}</div>
            <div className={css.desc}>{desc}</div>
          </div>
        </section>
      ))}
    </div>
  </div>
);

export default Part15Minutes;
