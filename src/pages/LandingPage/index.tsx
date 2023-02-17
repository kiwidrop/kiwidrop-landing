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
    <div className={cn(css.landing_page, { is_desktop: isDesktop }, { is_m: !isDesktop })}>
      <PartScaleYourLife />

      <PartOurMission />

      <PartPlatforms />

      <PartScaleBrand />

      <Part15Minutes />

      <PartACurated />

      <PartSellWhat />

      <PartFeature />

      <PartCurated />

      <PartQuantityAssured />

      <PartWhatCustomerSay />

      <PartBackedBy />

      <Footer />
    </div>
  );
};

export default LandingPage;
