import s from './footer.module.scss';
import Footer1 from './footer1/footer1';
import Footer2 from './footer1 copy/footer2';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Footer1 />
      <Footer2 />
    </footer>
  );
};

export default Footer;
