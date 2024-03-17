import { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './subscribe.module.scss';

const Subscribe = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit = event => {
      event.preventDefault();
    },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    setMessage(`${data.mail}`);
    console.log(`Ви підписалися на Email розсилку за вказаним Email: ${data.mail}`);
    setShowMessage(true);
    reset();
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    /*
    fetch('http://localhost:3000/callBack', {
      method: 'POST',
      headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: `mail=${data.mail}`,
    })
      .then(result => result.json())
      .then(msg => setMessage(msg.mail));
    reset();
    setShowMessage(true);
    */
  };

  return (
    <section className={`${s.subscribe} container`}>
      <div className={s.content}>
        <h2>Спіймай всі акції!</h2>
        <p className={s.text}>
          Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у
          нас їх багато :D
        </p>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('mail', {
              required: 'Введіть ваш Email',
              pattern: /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/gi,
            })}
            className={s.input}
            placeholder="ВВЕДІТЬ"
          />
          <div className={s.error}>{errors?.mail && <p>{errors?.mail?.message || 'Ваш email не коректний'}</p>}</div>
          <button type="submit" className={s.button}>
            Підписатися
          </button>
          {showMessage && (
            <div className={s.answer}>
              Ви підписалися на Email розсилку за вказаним Email: <span>{message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
