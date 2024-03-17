import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderButtons from '../../ui/slider-buttons/slider-buttons';
import SliderCount from '../../ui/slider-count/slider-count';
import reviews from '../../../data/reviews';
import s from './reviews-slider.module.scss';
import Rating from '../../ui/rating/rating';

const ReviewsSlider = () => {
  const swiperRef = useRef();
  const isLarge = useMediaQuery({ minWidth: 1170 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isLaptop = useMediaQuery({ minWidth: 768 });
  const [data, setData] = useState([]);
  //кількість слайдів для прорахунку сторінок
  const elementOnPage = isLarge ? 4 : isDesktop ? 3 : isLaptop ? 2 : 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setData(reviews);
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
            1170: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {data?.map(item => (
            <SwiperSlide className={s.slide} key={item.id}>
              <div className={s.title}>
                <div className={s.slidePhoto}>
                  <img src={item.img} alt={item.description ? item.description : 'фото товару'} />
                </div>
                <div className={s.description}>
                  <Rating readonly={true} ratingValue={item.rating}/>
                  <h6 className={s.name}>{item.name}</h6>
                </div>
              </div>

              <p className={s.text}>{item.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSlider;
