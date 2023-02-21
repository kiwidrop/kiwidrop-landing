import kissMeJane from '@/assets/landing-v2/IntlBrandsLogos/Group1270.png';
import brightAF from '@/assets/landing-v2/IntlBrandsLogos/Group1271.png';
import fawnFit from '@/assets/landing-v2/IntlBrandsLogos/Rectangle75-1.png';
import dc from '@/assets/landing-v2/IntlBrandsLogos/Rectangle78-1.png';
import simplee from '@/assets/landing-v2/IntlBrandsLogos/Rectangle79-1.png';
import JudyBlue from '@/assets/landing-v2/USABrandsLogos/Rectangle75.png';
import mano from '@/assets/landing-v2/USABrandsLogos/Rectangle78.png';
import whiteBirch from '@/assets/landing-v2/USABrandsLogos/Rectangle79.png';
import davidani from '@/assets/landing-v2/USABrandsLogos/Rectangle80.png';
import zenana from '@/assets/landing-v2/USABrandsLogos/Rectangle81.png';
import { Button } from '@/components/common';
import { DS2_URL } from '@/cons/common';

import css from './PartACurated.module.scss';

const part_a_curated = [
  {
    title: 'USA Based Brands',
    desc: 'Top quality, US based trending products from the best lines in the LA & New York Fashion districts and beyond.',
    brand: [JudyBlue, mano, whiteBirch, davidani, zenana],
  },
  {
    title: 'Vetted International Lines',
    desc: 'Get access to branded & white label (non-branded) products from top international manufacturers.',
    brand: [kissMeJane, brightAF, fawnFit, dc, simplee],
  },
];
const PartACurated = () => (
  <div className={css.part_a_curated}>
    <div className={css.line_1}>
      <p>
        A <span>curated</span> catalog by a community of tastemakers featuring the hottest US and Intl. fashion lines.
      </p>
      <p className={css.second_text}>
        Everything we sell has been personally selected using our technology and a dedicated product expert. Our experts
        bring a wealth of experience, knowledge, and intuition to our product selection.
      </p>
    </div>

    <div className={css.line_3}>
      {part_a_curated.map(({ title, desc, brand }) => (
        <section className={css.section} key={title}>
          <p className={css.title}>{title}</p>
          <div className={css.desc_wrapper}>
            <p className={css.desc}>{desc}</p>
            <div className={css.brand_wrapper_wrapper}>
              <div className={css.brand_wrapper}>
                {brand.map((src) => (
                  <img src={src} alt="brand" key={src} />
                ))}
              </div>
            </div>
          </div>
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

export default PartACurated;
