import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import products from '../../../data/products';
import SliderButtons from '../../ui/slider-buttons/slider-buttons';
import SliderCount from '../../ui/slider-count/slider-count';
import s from './catalog-slider.module.scss';
import { Link } from 'react-router-dom';

const CatalogSlider = () => {
  const swiperRef = useRef();
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isLaptop = useMediaQuery({ minWidth: 768 });
  const [data, setData] = useState([]);
  //кількість слайдів для прорахунку сторінок
  const elementOnPage = isDesktop ? 3 : isLaptop ? 2 : 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setData(products);
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      setTotalPages(Math.ceil(data.length / elementOnPage));
    }
  }, [data, elementOnPage]);
  //попередній слайд
  const prevSlide = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //наступний слайд
  const nextSlide = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <section className={`${s.catalogSlider} container`}>
      <div className={s.titleBlock}>
        <h3>Найгарячіші товари</h3>
        <div className={s.actions}>
          <SliderCount totalPages={totalPages} currentPage={currentPage} />
          <SliderButtons
            slidePrev={() => {
              prevSlide();
              swiperRef?.current?.slidePrev();
            }}
            slideNext={() => {
              nextSlide();
              swiperRef?.current?.slideNext();
            }}
          />
        </div>
      </div>
      <div className={s.sliderContainer}>
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          onSlidePrevTransitionStart={prevSlide}
          onSlideNextTransitionStart={nextSlide}
          className={s.slider}
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        >
          {data?.map(item => (
            <SwiperSlide className={s.slide} key={item.id}>
              <Link to="#">
                <div className={s.slidePhoto}>
                  <img src={item.img} alt={item.title ? item.title : 'фото товару'} />
                </div>
                <h4 className={s.title}>{item.title}</h4>
                <span className={s.category}>{item.category}</span>
                <span className={s.info}>{item.info}</span>
                <span className={s.price}>{item.price} грн</span>
              </Link>
              <button className={s.favoriteButton}><img src="/images/icons/heart.svg" alt="add to favorite button" /></button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CatalogSlider;
