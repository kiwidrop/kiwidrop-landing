import cn from 'classnames';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import LOGO from '@/assets/logo.png';
import { DS2_URL } from '@/cons/common';

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
            <div className={css.section_body}>
              <div className={css.section_links}>
                <a href="https://help.kiwidrop.com/knowledge/about-us" target="_blank" rel="noreferrer">
                  Your Dropshipping Partner
                </a>
                <a href="https://help.kiwidrop.com/knowledge" target="_blank" rel="noreferrer">
                  Contact us at support@kiwidrop.com 400 Concar Drive, San Mateo, CA, 97173, United States
                </a>
              </div>
              {/* <div className={css.section_links}>
                <a href="https://help.kiwidrop.com/knowledge/about-us" target="_blank" rel="noreferrer">
                  About us
                </a>
                <a href="https://help.kiwidrop.com/knowledge" target="_blank" rel="noreferrer">
                  Career
                </a>
                <a href="https://blog.kiwidrop.com" target="_blank" rel="noreferrer">
                  Blog
                </a>
                <a href="mailto:support@kiwidrop.com" target="_blank" rel="noreferrer">
                  Contact us
                </a>
              </div> */}
            </div>
          </div>

          <div className={css.section}>
            <div className={css.section_title}>SUPPORT</div>
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
            <div className={css.section_title}>COMMUNITY</div>
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
        </div>

        <hr />

        <div className={css.secondary}>
          <div className={css.secondary_item_wrapper}>
            <div className={css.secondary_item}>@{new Date().getFullYear()} Kiwidrop Inc.</div>
            <div className={css.secondary_item}>
              <a href="/terms-of-service" onClick={() => window.scrollTo(0, 0)}>
                Terms of Service
              </a>
            </div>
            <div className={css.secondary_item} onClick={() => window.scrollTo(0, 0)}>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
            <div className={css.secondary_item} onClick={() => window.scrollTo(0, 0)}>
              <a href="/intellectual-property-policy">IP Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
