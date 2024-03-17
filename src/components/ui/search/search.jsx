import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useClickOutside } from '../../../hooks/hooks';
import s from './search.module.scss';

const Search = () => {
  const searchRef = useRef(null);
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  useClickOutside(true, searchRef, () => {
    if (visible) {
      setVisible(false);
    }
  });
  const handleChange = event => {
    if (event.target.value.length > 1) {
      setVisible(true);
    } else {
      setVisible(false);
      setData([]);
    }
    setValue(event.target.value);
  };

  return (
    <div className={s.searchBlock} ref={searchRef}>
      <form autoComplete="off" className={s.search}>
        <input value={value} onChange={handleChange} name="search" className={s.input} />
      </form>

      {!visible ? (
        <button className={s.searchButton}></button>
      ) : (
        <button
          className={s.closeButton}
          onClick={() => {
            setValue('');
            setVisible(false);
          }}
        ></button>
      )}

      {visible && (
        <div className={s.searchList}>
          {Array.isArray(data) && data.length > 0 ? (
            <>
              <div className={s.title}>
                Знайдено <span>{data.length}</span> співпадінь:
              </div>
              <ul className={s.list}>
                {data.map((item, i) => (
                  <div key={i}>результат пошуку{i}</div>
                ))}
              </ul>
              <div className={s.footer}>
                <Link href="/">Всі результати пошуку</Link>
              </div>
            </>
          ) : (
            <>
              <div className={s.notFined}>За даним запитом нічого не знайдено</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
