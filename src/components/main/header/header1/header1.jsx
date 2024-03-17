import { Link } from 'react-router-dom';
import s from './header1.module.scss';

const Header1 = () => {
  return (
    <div className={s.header1}>
      <div className={`${s.content} container`}>
        <div className={s.links}>
          <Link className={s.phone} to="tel:+380989000909">
            098 900 09 09
          </Link>
          <Link to="#">Допомога</Link>
        </div>
        <div>
          <Link to="#">Увійти </Link>/<Link to="#"> Зареєструватися</Link>
        </div>
      </div>
    </div>
  );
};

export default Header1;
