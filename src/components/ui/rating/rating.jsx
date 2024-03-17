import { useState } from 'react';
import s from './rating.module.scss';

const Rating = ({
  count = 5,
  readonly,
  ratingValue,
  onChange,
  label,
}) => {
  const [hoverValue, setHoverValue] = useState(null);
  const [value, setValue] = useState(ratingValue ? Math.floor(ratingValue) : 0);

  const handleMouseMove = index => {
    if (readonly) return;
    setHoverValue(index + 1);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverValue(undefined);
  };

  const handleRating = index => {
    if (readonly) return;

    const newValue = Math.max(0, Math.min(index + 1, count));

    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const stars = Array.from({ length: count }, (_, index) => {
    const filled = hoverValue ? index < hoverValue : index < value;
    return (
      <span
        key={`star_${index}`}
        onClick={() => handleRating(index)}
        onMouseEnter={() => handleMouseMove(index)}
        onMouseLeave={handleMouseLeave}
        className={s.star}
      >
        {filled ? (
          <img src="/images/icons/star-fill.svg" alt="rating star" />
        ) : (
          <img src="/images/icons/star-outline.svg" alt="rating star" />
        )}
      </span>
    );
  });

  return (
    <div className={s.container}>
      {label && <label className={s.label}>{label}</label>}
      {stars}
    </div>
  );
};

export default Rating;
