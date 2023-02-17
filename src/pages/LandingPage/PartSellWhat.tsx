import { Button } from '@/components/common';
import { DS2_URL } from '@/cons/common';

import css from './PartSellWhat.module.scss';

const PartSellWhat = () => (
  <div className={css.part_sell_what}>
    <div className={css.line_1}>
      Sell what your customers <span>really</span> want and <span>earns profits</span>. Stay <span>ahead</span> of the
      trend.
    </div>
    <div className={css.line_2}>
      <div className={css.left}>
        <img src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Science-art.webp?v=1676351271" alt="img" />
      </div>
      <div className={css.right}>
        <div className={css.title}>Curated Assortment = Science + Art</div>
        <div className={css.question_wrapper}>
          <div className={css.question}>Science: AI Data-driven popularity predictions</div>
          <div className={css.answer}>
            Our proprietary software predicts trends to ensure you have access to items that increase your sales
            numbers, not just your catalog size.
          </div>
        </div>
        <div className={css.question_wrapper}>
          <div className={css.question}>Art: Consumer Insight & Community Wisdom</div>
          <div className={css.answer}>
            We set the trend, instead of just following them. We utilize community leader feedback loops to ensure we’re
            on top of upcoming hot products.
          </div>
        </div>
        <div className={css.btn_wrapper}>
          <Button shape="rounded" color="dark" type="link" href={DS2_URL}>
            Get Started For Free
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default PartSellWhat;
