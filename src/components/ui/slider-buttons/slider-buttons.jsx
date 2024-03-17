import s from './slider-buttons.module.scss';

const SliderButtons = ({ slidePrev, slideNext }) => {
  return (
    <div className={s.sliderButtons}>
      <button className={s.left} onClick={slidePrev}>
        <img src="/images/icons/arrow.svg" alt="arrow left" />
      </button>
      <button className={s.right} onClick={slideNext}>
        <img src="/images/icons/arrow.svg" alt="arrow left" />
      </button>
    </div>
  );
};

export default SliderButtons;
