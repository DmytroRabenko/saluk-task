import { NavLink } from 'react-router-dom';
import navList from '../../../../data/nav-list';
import Logo from '../../../ui/logo/logo';
import s from './header2.module.scss';
import Search from '../../../ui/search/search';

const Header2 = () => {
  return (
    <div className={s.header2}>
      <div className={`${s.content} container`}>
        <Logo />
        <nav className={s.navList}>
          {navList.map(item => {
            return (
              <NavLink to={item.href} key={item.title}>
                {item.title}
              </NavLink>
            );
          })}
        </nav>

        <div className={s.actions}>
          <Search />
          <button
            className={s.favorite}
            onClick={() => {
              console.log('favirite products in favorite');
            }}
          ></button>
          <button
            className={s.basket}
            onClick={() => {
              console.log('show products in basket');
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
