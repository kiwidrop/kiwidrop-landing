import { Button } from '@/components/common';
import { DS2_URL } from '@/cons/common';

import css from './PartCurated.module.scss';

const PartCurated = () => (
  <div className={css.part_curated}>
    <div className={css.left}>
      <p className={css.line_1}>
        <span>Curate</span> and build your digital rack using Pinterest-style like boards!
      </p>
      <p className={css.line_2}>
        Add, remove and share items from our catalog to manage your curation and plan your releases. Build a collection
        easily by bulk importing!
      </p>
      <div className={css.line_3}>
        <Button shape="rounded" color="dark" type="link" href={DS2_URL}>
          Get Started For Free
        </Button>
      </div>
    </div>
    <div className={css.right}>
      <img src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Likes.webp?v=1676351271" alt="" />
    </div>
  </div>
);

export default PartCurated;
