import Header1 from './header1/header1';
import Header2 from './header2/header2';
import s from './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <Header1 />
      <Header2 />
    </header>
  );
};

export default Header;
