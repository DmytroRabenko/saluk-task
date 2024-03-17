import s from './slider-count.module.scss';

const SliderCount = ({ currentPage, totalPages }) => {
  return (
    <div className={s.sliderCount}>
      <span>0{currentPage}</span> / <span>0{totalPages}</span>
    </div>
  );
};

export default SliderCount;
