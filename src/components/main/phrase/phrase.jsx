import Button from '../../ui/button/button';
import s from './phrase.module.scss';

const Phrase = () => {
  return (
    <section className={`${s.phrase} container`}>
      <div className={s.description}>
        <h2>Ми знаємо, що сподобається вашим “великим” друзям!</h2>
        <p>Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”</p>
        <Button to={'/catalog'}>До каталогу</Button>
      </div>
      <div className={s.photo}></div>
    </section>
  );
};

export default Phrase;
