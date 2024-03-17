import { Link } from 'react-router-dom';
import footerLinks from '../../../../data/footer-links';
import s from './footer1.module.scss';

const Footer1 = () => {
  return (
    <div className={s.footer1}>
      <div className={`${s.content} container`}>
        <div className={s.contacts}>
          <span className={s.title}>Контакт - центр</span>
          <ul className={s.list}>
            <li>
              <Link to={footerLinks.contacts[0].href}>{footerLinks.contacts[0].title}</Link>
            </li>
            <li>Пн - Пт 09:00 - 21:00</li>
            <li>Пн - Пт 09:00 - 21:00</li>
          </ul>
        </div>
        <div className={s.linksBlock}>
          <div className={s.customer}>
            <span className={s.title}>Покупцям</span>
            <ul className={s.list}>
              {footerLinks.customer.map(item => {
                return (
                  <Link to={item.href} key={item.title}>
                    {item.title}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className={s.cabinet}>
            <span className={s.title}>Особистий кабінет</span>
            <ul className={s.list}>
              {footerLinks.cabinet.map(item => {
                return (
                  <Link to={item.href} key={item.title}>
                    {item.title}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className={s.aboutUs}>
            <span className={s.title}>Про компанію</span>
            <ul className={s.list}>
              {footerLinks.aboutUs.map(item => {
                return (
                  <Link to={item.href} key={item.title}>
                    {item.title}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
