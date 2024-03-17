import { Link } from 'react-router-dom';
import s from './button.module.scss';

const Button = ({ children, onClick, styleType, to }) => {
  const styleClass = styleType ? s[styleType] : '';
  if (to) {
    return (
      <Link to={to} className={`${s.button}  ${styleClass}`} onClick={onClick}>
        {children}
      </Link>
    );
  } else {
    <button className={`${s.button}  ${styleClass}`} onClick={onClick}>
      {children}
    </button>;
  }
};

export default Button;
