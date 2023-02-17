import cn from 'classnames';

import { Footer } from '@/components/common';
import { useDesktop } from '@/hooks';

import css from './index.module.scss';
import Part15Minutes from './Part15Minutes';
import PartACurated from './PartACurated';
import PartBackedBy from './PartBackedBy';
import PartCurated from './PartCurated';
import PartFeature from './PartFeature';
import PartOurMission from './PartOurMission';
import PartPlatforms from './PartPlatforms';
import PartQuantityAssured from './PartQuantityAssured';
import PartScaleBrand from './PartScaleBrand';
import PartScaleYourLife from './PartScaleYourLife';
import PartSellWhat from './PartSellWhat';
import PartWhatCustomerSay from './PartWhatCustomerSay';

const LandingPage = () => {
  const isDesktop = useDesktop();

  return (
    <div className={cn(css.landing_page, { [css.is_desktop]: isDesktop }, { [css.is_m]: !isDesktop })}>
      <PartScaleYourLife />

      <PartOurMission />

      <PartPlatforms />

      <div className={cn(css.part_wrapper, css.part_scale_brand_wrapper)}>
        <PartScaleBrand />
      </div>

      <div className={cn(css.part_wrapper, css.part_15_minutes_wrapper)}>
        <Part15Minutes />
      </div>

      <div className={cn(css.part_wrapper, css.part_a_curated_wrapper)}>
        <PartACurated />
      </div>

      <div className={cn(css.part_wrapper, css.part_sell_what_wrapper)}>
        <PartSellWhat />
      </div>

      <div className={cn(css.part_wrapper, css.part_feature_wrapper)}>
        <PartFeature />
      </div>

      <div className={cn(css.part_wrapper, css.part_curated_wrapper)}>
        <PartCurated />
      </div>

      <div className={cn(css.part_wrapper, css.part_quantity_assured_wrapper)}>
        <PartQuantityAssured />
      </div>

      <div className={cn(css.part_wrapper, css.part_what_customer_say_wrapper)}>
        <PartWhatCustomerSay />
      </div>

      <div className={cn(css.part_wrapper, css.part_backed_by_wrapper)}>
        <PartBackedBy />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
