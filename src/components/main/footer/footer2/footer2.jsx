import { Link } from 'react-router-dom';
import navList from '../../../../data/nav-list';
import s from './footer2.module.scss';

const Footer2 = () => {
  return (
    <div className={s.footer2}>
      <div className={`${s.content} container`}>
        <div className={s.navList}>
          {navList.map(item => {
            return (
              <Link to={item.href} key={item.title}>
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className={s.information}>© 2022 — 2023 IGNAT. Усі права захищені.</div>
      </div>
    </div>
  );
};

export default Footer2;
