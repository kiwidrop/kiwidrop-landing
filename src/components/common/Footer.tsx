import cn from 'classnames';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import LOGO from '@/assets/logo.png';
import { DS2_URL, installURL } from '@/cons/common';

import Button from './Button';
import css from './Footer.module.scss';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

function Footer({ className, style }: Props): JSX.Element {
  const openDS2 = () => {
    window.open(DS2_URL);
  };

  return (
    <div className={cn(css.ns_com_footer_main, className)} style={style}>
      <div className={css.content}>
        <div className={css.main}>
          <div className={css.section}>
            <div className={css.section_title}>
              <img role="presentation" src={LOGO} alt="Logo" className={css.logo} onClick={openDS2} />
            </div>
            <div className={css.section_title}>Your Dropshipping Partner</div>
            <div className={css.section_body}>
              <div className={css.section_links}>
                <a className={css.contact_us} href="mailto:support@kiwidrop.com">
                  Contact us at support@kiwidrop.com 400 Concar Drive, San Mateo, CA, 97173, United States
                </a>
              </div>
            </div>
          </div>

          <div className={css.section}>
            <div className={css.section_title}>Support</div>
            <div className={css.section_body}>
              <div className={css.section_links}>
                <a href="https://help.kiwidrop.com/knowledge/getting-started" target="_blank" rel="noreferrer">
                  Start Selling
                </a>
                <a href="https://help.kiwidrop.com/knowledge/shipping-policy" target="_blank" rel="noreferrer">
                  Shipping Policy
                </a>
                <a href="https://help.kiwidrop.com/knowledge/returns-cancellations" target="_blank" rel="noreferrer">
                  Returns & Refunds
                </a>
                <a href="https://help.kiwidrop.com/knowledge" target="_blank" rel="noreferrer">
                  More FAQ
                </a>
              </div>
            </div>
          </div>

          <div className={css.section}>
            <div className={css.section_title}>Community</div>
            <div className={css.section_body}>
              <div className={css.section_links}>
                <a href="https://discord.gg/TMBsCXqKKX" target="_blank" rel="noreferrer">
                  Discord Gems
                </a>
                <a href="https://www.facebook.com/KiwiDrop-108899051488263" target="_blank" rel="noreferrer">
                  FB Crew
                </a>
              </div>
              <div className={css.section_icons}>
                <a href="https://www.instagram.com/trykiwidrop" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/KiwiDrop-108899051488263" target="_blank" rel="noreferrer">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          <div className={css.section}>
            <div className={css.section_title}>Download</div>
            <div className={css.section_body}>
              <Button
                color="white"
                shape="rounded"
                bordered
                className={css.install_btn}
                onClick={() => window.open(installURL)}
              >
                Install to Shopify
              </Button>
            </div>
          </div>
        </div>

        <hr />

        <div className={css.secondary}>
          <div className={css.secondary_item_wrapper}>
            <div className={css.secondary_item}>@{new Date().getFullYear()} Kiwidrop Inc.</div>
            <div className={css.secondary_item}>
              <a href="https://app.kiwidrop.com/terms-of-service" target="_blank" rel="noreferrer">
                Terms of Service
              </a>
            </div>
            <div className={css.secondary_item}>
              <a href="https://app.kiwidrop.com/privacy-policy" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>
            </div>
            <div className={css.secondary_item}>
              <a href="https://app.kiwidrop.com/intellectual-property-policy" target="_blank" rel="noreferrer">
                IP Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
