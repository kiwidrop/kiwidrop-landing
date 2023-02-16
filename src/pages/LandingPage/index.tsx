import cn from 'classnames';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaAngleUp, FaArrowDown, FaArrowUp, FaChevronUp, FaPlus, FaStar } from 'react-icons/fa';

import commentSold from '@/assets/landing-v2/ChannelsLogos/commentSold.webp';
import facebook from '@/assets/landing-v2/ChannelsLogos/facebook.webp';
import ins from '@/assets/landing-v2/ChannelsLogos/ins.webp';
import poshmark from '@/assets/landing-v2/ChannelsLogos/poshmark.webp';
import shopify from '@/assets/landing-v2/ChannelsLogos/shopify.webp';
import tiktok from '@/assets/landing-v2/ChannelsLogos/tiktok.webp';
import customer1 from '@/assets/landing-v2/Customers/customer1.png';
import customer2 from '@/assets/landing-v2/Customers/customer2.png';
import customer3 from '@/assets/landing-v2/Customers/customer3.png';
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
import AutoCheckoutHowto from '@/assets/landing-v2/Howto/AutocheckoutHowto.svg';
import BuySamplesHowto from '@/assets/landing-v2/Howto/BuySamplesHowto.svg';
import MarginHowto from '@/assets/landing-v2/Howto/MarginHowto.svg';
import OrderHowto from '@/assets/landing-v2/Howto/OrderHowto.svg';
import QAHowto from '@/assets/landing-v2/Howto/QAHowto.svg';
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
import { Button, Footer } from '@/components/common';
import { useDesktop } from '@/hooks';

import css from './index.module.scss';

const part_platforms = [facebook, shopify, commentSold, tiktok, ins, poshmark];
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
const part_15_minutes = [
  {
    icon: BuySamplesHowto,
    title: 'Buy Samples',
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
    desc: 'Our warehouse will combine your orders and quality control every item prior to shipping.',
  },
  {
    icon: OrderHowto,
    title: 'Order Received!',
    desc: 'Your customers receives orders with your branded invoice and leave you a glowing review!',
  },
];
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
const part_feature = [
  {
    title: 'Inventory Sync & Reliability',
    desc: '100% Automatically sync inventory and orders with zero-touch from you if you choose. ',
  },
  {
    title: 'Curation Meets Variety',
    desc: 'Our AI tools and good old fashion experience work together to ensure in-demand products at your fingertips.',
  },
  {
    title: 'Auto Price Rules',
    desc: 'Automatically set your default markup for fast and easy importing.',
  },
  {
    title: 'Local Pickup',
    desc: 'Easily facility your Shopify or CommentSold local pickups using our Local Pickup feature.',
  },
  {
    title: 'Anonymous Shipping w/ Branded Invoice',
    desc: 'Products arrive to your customer with your branding so no one ever knows we’re your partner.',
  },
  {
    title: 'Branded Invoice',
    desc: 'Products arrive to your customer with your branding so no one ever knows we’re your partner.',
  },
  {
    title: 'Hold & Combine',
    desc: 'Our systems can auto combine orders from the same customers, saving your BIG on shipping costs.',
  },
  {
    title: 'Multi-Store Integration',
    desc: 'Manage multiple Shopify stores from your Kiwi account. ',
  },
];
const part_what_customer_say = [
  {
    logo: customer1,
    title: 'Jenny Boston Boutique',
    desc: 'We love this company and the people...top notch. They are innovative, approachable, extremely hard working and have become a true partner for us. As both a traditional e-comm and LIVE selling company, we were looking for a way to secure more inventory in a seamless manner. Kiwi has done that and will continue to expand!',
  },
  {
    logo: customer2,
    title: 'Bella Jade',
    desc: 'Been using this app for a few months and am in love! Price point is great for margins, styles are on trend, photos are perfect and shipping is on fire! Thank you for providing excellent customer service when needed!',
  },
  {
    logo: customer3,
    title: 'Amber Moon',
    desc: 'Highly recommend! I use several other drop shippers and kiwi by far is my favorite. They are very intentional with the collections they offer and the inventory choice is the best out there. I feel like they sell styles I actually want in my shop that I would pick myself. So happy with the kiwi experience and look forward to a continued relationship as we both grow together.',
  },
];
const part_quantity_assured = [
  {
    bg: 'https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Closed_Loop_1.webp?v=1676351127',
    title: 'Real quality factory relationships',
    desc: 'Our team visits factories in person to ensure they meet our bar for quality and working conditions. We’re constantly keeping track of defects, delivery times and more. If a factory does not meet our bar, we won’t sell them in our catalog.',
  },
  {
    bg: 'https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Closed_Loop_2.webp?v=1676351127',
    title: 'Final inspection before we ship',
    desc: 'We inspect every item prior to shipping to ensure there are no manufacturing defects. If there is a defect we’ll attempt to replace and keep you informed you through the entire process.',
  },
  {
    bg: 'https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Closed_Loop_3.webp?v=1676351127',
    title: 'Closed loop feedback from you',
    desc: 'Once you or your customer receives an order, be sure to let us know about your experience. If there’s anything that doesn’t meet our bar, it’s out. We’re always looking for ways to improve our service, we depend on your feedback!',
  },
];
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

const PartOurMission = () => {
  const isDesktop = useDesktop();
  const videoURL = isDesktop
    ? 'https://cdn.shopify.com/videos/c/o/v/16c1ae80cf374b0083f359278b036a10.webm'
    : 'https://cdn.shopify.com/videos/c/o/v/5fbd7d8039444254a75eb61bbdf60110.webm';

  return (
    <div className={css.part_our_mission}>
      <div className={css.video_wrapper}>
        <video muted autoPlay loop>
          <source src={videoURL} type="video/webm" />
          Your browser not support HTML5 video tag.
        </video>
      </div>
      <div className={css.block_wrapper_wrapper}>
        <div className={css.block_wrapper}>
          <div className={css.line_1}>Our Mission</div>
          <div className={css.line_2}>
            We believe the future of retail is <span>SOCIAL</span> and the majority of product discovery will be driven
            by
            <span>INDIVIDUALS</span> that have <span>INFLUENCE</span> their audiences.
          </div>
          <div className={css.line_3}>
            Our software and cloud inventory is the backbone that empowers everyone from micro influencers to mega
            boutiques with zero-overhead access to highly curated, on-demand, trending fashion.
          </div>
          <div className={css.line_4}>Start now and sell in less than 15 minutes.</div>
          <div className={css.line_5}>
            <Button shape="rounded">Join The Revolution!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const PartScaleYourLife = () => {
  const isDesktop = useDesktop();

  return (
    <div className={css.part_scale_your_live}>
      <div className={css.left}>
        <div className={css.line_1}>Scale Your Live Streaming Boutique</div>
        <div className={css.line_2}>
          Stop gambling on inventory, focus on curating drops from our inventory catalog in the cloud
        </div>
        <div className={cn(css.btns_wrapper, css.line_3)}>
          <Button shape="rounded" color="main" className={css.btn1}>
            Start for free
          </Button>
          <Button shape="rounded" className={css.btn2}>
            Install for Shopify
          </Button>
        </div>
        <div className={css.line_4}>
          Join a community of 5,000s of live selling and traditional boutiques, immediately start selling high-margin
          products from the US and abroad
        </div>
      </div>
      <div className={cn(css.right)}>
        <div className={css.list}>
          <div className={css.rowup}>
            <img src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Waterfall.webp?v=1676349541" alt="img" />
            <img src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Waterfall.webp?v=1676349541" alt="img" />
          </div>
        </div>
        <img
          className={css.pre_img}
          src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Floating.webp?v=1676349541"
          alt="img"
        />
      </div>
      {isDesktop && (
        <div className={css.see_why_btn_wrapper}>
          <Button shape="rounded">
            See what happens
            <FaAngleUp />
          </Button>
        </div>
      )}
    </div>
  );
};

const PartFeature = () => {
  const isDesktop = useDesktop();
  const [isShow, setIsShow] = useState(false);
  const showMask = !isDesktop && !isShow;

  const variants = {
    show: {
      height: 'fit-content',
    },
    hide: {
      height: '540px',
    },
  };

  const seeMore = () => {
    setIsShow((preState) => !preState);
  };

  const sectionItems = (
    <>
      {part_feature.map(({ title, desc }) => (
        <section className={css.section} key={title}>
          <div className={css.title}>{title}</div>
          <div className={css.desc}>{desc}</div>
        </section>
      ))}
    </>
  );

  return (
    <div className={css.part_feature}>
      <div className={css.line_1}>Features</div>
      <div className={css.line_2}>
        Smart features that <span>de-stress</span> you.
      </div>
      <div className={css.line_3}>
        {isDesktop ? (
          <div className={css.section_wrapper}>{sectionItems}</div>
        ) : (
          <motion.div className={css.section_wrapper} animate={isShow ? 'show' : 'hide'} variants={variants}>
            {sectionItems}
            {showMask && <div className={css.mask} />}
          </motion.div>
        )}
        {!isDesktop && (
          <div className={css.btn_wrapper}>
            {!isShow && (
              <div className={css.see_more} onClick={seeMore}>
                <span>Show more features</span>
                <FaChevronUp />
              </div>
            )}
            <div className={css.line_4}>
              <Button shape="rounded" color="main">
                Get Started For Free
              </Button>
            </div>
          </div>
        )}
      </div>
      {isDesktop && (
        <div className={css.line_4}>
          <Button shape="rounded" color="main">
            Get Started For Free
          </Button>
        </div>
      )}
    </div>
  );
};

const LandingPage = () => {
  const isDesktop = useDesktop();

  return (
    <div className={cn(css.landing_page, { [css.is_desktop]: isDesktop }, { [css.is_m]: !isDesktop })}>
      <PartScaleYourLife />

      <PartOurMission />

      <div className={css.part_platforms}>
        <div className={css.line_1}>Platforms & Integrations</div>
        <div className={css.line_2}>
          <div>Unleash your ability to grow.</div>
          <div className={css.second_text}>All you need is an iPhone, ring light and Kiwi.</div>
        </div>
        <div className={css.line_3}>
          {part_platforms.map((src) => (
            <img className={css.img} src={src} alt={src} key={src} />
          ))}
        </div>
      </div>

      <div className={css.part_scale_brand}>
        <div className={css.line_1}>
          Scale your <span>brand</span>, not your overhead.
        </div>
        <div className={css.line_2}>
          On average retailers stock 2-4x their monthly revenue in product. Utilizing Kiwi’s cloud inventory retailers
          can finally stop turning their margin into long tail small qty, slow moving, off season dead inventory. Fix
          your cash flow problem and KEEP every dollar of profit you generate.
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
          <Button shape="rounded">Get Started For Free</Button>
        </div>
      </div>

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

      <div className={css.part_a_curated}>
        <div className={css.line_1}>
          <div>
            A <span>curated</span> catalog by a community of tastemakers featuring the hottest US and Intl. fashion
            lines.
          </div>
          <div className={css.second_text}>
            Everything we sell has been personally selected using our technology and a dedicated product expert. Our
            experts bring a wealth of experience, knowledge, and intuition to our product selection.
          </div>
        </div>

        <div className={css.line_3}>
          {part_a_curated.map(({ title, desc, brand }) => (
            <section className={css.section} key={title}>
              <div className={css.title}>{title}</div>
              <div className={css.desc_wrapper}>
                <div className={css.desc}>{desc}</div>
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
          <Button shape="rounded">Get Started For Free</Button>
        </div>
      </div>

      <div className={css.part_sell_what}>
        <div className={css.line_1}>
          Sell what your customers <span>really</span> want and <span>earns profits</span>. Stay <span>ahead</span> of
          the trend.
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
                We set the trend, instead of just following them. We utilize community leader feedback loops to ensure
                we’re on top of upcoming hot products.
              </div>
            </div>
            <div className={css.btn_wrapper}>
              <Button shape="rounded" color="main">
                Get Started For Free
              </Button>
            </div>
          </div>
        </div>
      </div>

      <PartFeature />

      <div className={css.part_curated}>
        <div className={css.left}>
          <div className={css.line_1}>
            <span>Curate</span> and build your digital rack using Pinterest-style like boards!
          </div>
          <div className={css.line_2}>
            Add, remove and share items from our catalog to manage your curation and plan your releases. Build a
            collection easily by bulk importing!
          </div>
          <div className={css.line_3}>
            <Button shape="rounded" color="main">
              Get Started For Free
            </Button>
          </div>
        </div>
        <div className={css.right}>
          <img src="https://cdn.shopify.com/s/files/1/0532/6186/1018/files/Likes.webp?v=1676351271" alt="img" />
        </div>
      </div>

      <div className={css.part_quantity_assured}>
        <div className={css.line_1}>Quality assured Production</div>
        <div className={css.line_2}>
          Closed loop quality control, <span>care-free international??</span>
          (highlight this is for interantional ) we know you love the price and variety of international lines but....
        </div>
        <div className={css.line_3}>
          {part_quantity_assured.map(({ bg, title, desc }) => (
            <section key={title} className={css.section}>
              <div className={css.left}>
                <img src={bg} alt="" />
              </div>
              <div className={css.right}>
                <div className={css.title}>{title}</div>
                <div className={css.desc}>{desc}</div>
              </div>
            </section>
          ))}
        </div>
        <div className={css.line_4}>
          <Button size="middle" shape="rounded" color="main">
            Get Started For Free
          </Button>
        </div>
      </div>

      <div className={css.part_what_customer_say}>
        <div className={css.line_1}>What our customers say</div>
        <div className={css.line_2}>
          <div>We love you!</div>
          <div>
            But we really love that you... <span>love us!</span>
          </div>
          <div className={css.second_text}>
            The Kiwidrop family is growing! Join the movement of like-minded fashion retailers, influencers and live
            sellers.
          </div>
        </div>
        <div className={css.line_3}>
          {part_what_customer_say.map(({ title, desc, logo }) => (
            <section className={css.section}>
              <div className={css.logo}>
                <img src={logo} alt="logo" />
              </div>
              <div className={css.title}>{title}</div>
              <div className={css.star}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className={css.desc}>{desc}</div>
            </section>
          ))}
        </div>
        <div className={css.line_4}>
          <Button size="middle" shape="rounded" color="main">
            Get Started For Free
          </Button>
        </div>
      </div>

      <PartBackedBy />

      <Footer />
    </div>
  );
};

export default LandingPage;
