import { Link } from 'react-router-dom';
import s from './logo.module.scss';

const Logo = () => {
  return (
    <Link to="/" className={s.logo}>
      Ignat
    </Link>
  );
};

export default Logo;
