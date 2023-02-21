// Import Swiper React components
import 'swiper/css/bundle';

import cn from 'classnames';
import { FaStar } from 'react-icons/fa';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import customer1 from '@/assets/landing-v2/Customers/customer1.png';
import customer2 from '@/assets/landing-v2/Customers/customer2.png';
import customer3 from '@/assets/landing-v2/Customers/customer3.png';
import { Button } from '@/components/common';
import { DS2_URL } from '@/cons/common';
import useDesktop from '@/hooks';

import css from './PartWhatCustomerSay.module.scss';

const part_what_customer_say = [
  {
    logo: customer1,
    title: 'Jenny Boston Boutique',
    desc: '“We love this company and the people...top notch. They are innovative, approachable, extremely hard working and have become a true partner for us. As both a traditional e-comm and LIVE selling company, we were looking for a way to secure more inventory in a seamless manner. Kiwi has done that and will continue to expand!”',
  },
  {
    logo: customer2,
    title: 'Bella Jade',
    desc: '“Been using this app for a few months and am in love! Price point is great for margins, styles are on trend, photos are perfect and shipping is on fire! Thank you for providing excellent customer service when needed!”',
  },
  {
    logo: customer3,
    title: 'Amber Moon',
    desc: '“Highly recommend! I use several other drop shippers and kiwi by far is my favorite. They are very intentional with the collections they offer and the inventory choice is the best out there. I feel like they sell styles I actually want in my shop that I would pick myself. So happy with the kiwi experience and look forward to a continued relationship as we both grow together.”',
  },
];

const PartWhatCustomerSay = () => {
  const isDesktop = useDesktop();
  return (
    <div>
      <div className={cn(css.part_what_customer_say, { [css.is_m]: !isDesktop })}>
        <p className={css.line_1}>What our customers say</p>
        <div className={css.line_2}>
          <p>We love you!</p>
          <p>
            But we really love that you... <span>love us!</span>
          </p>
          <p className={css.second_text}>
            The Kiwidrop family is growing! Join the movement of like-minded fashion retailers, influencers and live
            sellers.
          </p>
        </div>
        <div className={css.line_3}>
          {isDesktop ? (
            part_what_customer_say.map(({ title, desc, logo }) => (
              <section className={css.section} key={title}>
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
                <p className={css.desc}>{desc}</p>
              </section>
            ))
          ) : (
            <Swiper effect="cards" grabCursor modules={[EffectCards]} className="mySwiper">
              {part_what_customer_say.map(({ title, desc, logo }) => (
                <SwiperSlide key={title}>
                  <section className={css.section}>
                    <div className={css.logo}>
                      <img src={logo} alt="logo" />
                    </div>
                    <p className={css.title}>{title}</p>
                    <div className={css.star}>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className={css.desc}>{desc}</p>
                  </section>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <div className={css.line_4}>
          <Button shape="rounded" color="dark" type="link" href={DS2_URL}>
            Get Started For Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartWhatCustomerSay;
