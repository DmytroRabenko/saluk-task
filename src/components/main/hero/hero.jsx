import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import heroData from '../../../data/hero';
import s from './hero.module.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
  const swiperRef = useRef();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(heroData);
    //eslint-disable-next-line
  }, []);

  return (
    <section className={`${s.hero}`}>
      <Swiper
        className={s.slider} //border: 3px solid rgba(255, 255, 255, 1)
        style={{
          '--swiper-navigation-color': 'rgba(255, 255, 255, 1)',
          '--swiper-navigation-sides-offset': '51px',
          '--swiper-navigation-size': '32px',
          '--swiper-pagination-bullet-horizontal-gap': '5px',
          '--swiper-pagination-bottom': '20px',
        }}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        keyboard={true}
        slidesPerView={1}
        slidesPerGroup={1}
      >
        {data?.map(item => (
          <SwiperSlide className={s.slide} key={item.id}>
            <Link to={item.href}>
              <div className={s.slidePhoto}>
                <img src={item.img} alt={item.title ? item.title : 'фото товару'} />
              </div>
              <div className={s.titleBlock}>
                <span className={s.title}>{item.title}</span>
                {item.text && <span className={s.text}>{item.text}</span>}
              </div>
              {item.sale && (
                <div className={s.saleBlock}>
                  <span className={s.sale}>{item.sale}</span>
                  {item.saleText && <span className={s.saleText}>{item.saleText}</span>}
                </div>
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
