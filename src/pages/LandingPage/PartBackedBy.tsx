import cn from 'classnames';

import g10logos from '@/assets/landing-v2/FundingLogos/g10logos.png';
import g3371logos from '@/assets/landing-v2/FundingLogos/g3371logos.png';
import Grouplogos from '@/assets/landing-v2/FundingLogos/Grouplogos.png';
import image22 from '@/assets/landing-v2/FundingLogos/image22.png';
import image144logos from '@/assets/landing-v2/FundingLogos/image144logos.png';
import image158logos from '@/assets/landing-v2/FundingLogos/image158logos.png';
import image172logos from '@/assets/landing-v2/FundingLogos/image172logos.png';
import image173logos from '@/assets/landing-v2/FundingLogos/image173logos.png';
import layer1logos from '@/assets/landing-v2/FundingLogos/layer1logos.png';
import Rectangle926logos from '@/assets/landing-v2/FundingLogos/Rectangle926logos.png';
import Rectangle926logos1 from '@/assets/landing-v2/FundingLogos/Rectangle926logos1.png';
import Rectangle926logos2 from '@/assets/landing-v2/FundingLogos/Rectangle926logos2.png';
import Rectangle926logos3 from '@/assets/landing-v2/FundingLogos/Rectangle926logos3.png';
import Rectangle927logos from '@/assets/landing-v2/FundingLogos/Rectangle927logos.png';
import { useDesktop } from '@/hooks';

import css from './PartBackedBy.module.scss';

const part_backed_by = [
  layer1logos,
  Rectangle926logos,
  g10logos,
  Rectangle926logos1,
  image158logos,
  g3371logos,
  image22,
  image144logos,
  Grouplogos,
  Rectangle926logos2,
  Rectangle926logos3,
  image173logos,
  image172logos,
  Rectangle927logos,
];
const PartBackedBy = () => {
  const isDesktop = useDesktop();
  let new_part_backed_by = [part_backed_by];
  if (isDesktop) {
    new_part_backed_by = [part_backed_by.slice(0, 3), part_backed_by.slice(3, 8), part_backed_by.slice(8)];
  }

  return (
    <div className={css.part_backed_by}>
      <div className={css.line_1}>Backed by founders and executives from</div>
      <div className={css.line_2}>
        {new_part_backed_by.map((items, idx) => (
          <section
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            className={cn(
              css.section,
              { [css.section0]: idx === 0 },
              { [css.section1]: idx === 1 },
              { [css.section2]: idx === 2 }
            )}
          >
            {items.map((src) => (
              <div className={css.img_wrapper}>
                <img key={src} src={src} alt="img" />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PartBackedBy;
