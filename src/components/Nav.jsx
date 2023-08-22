import { Link } from 'react-scroll';
import styles from '../css/nav.module.css';
import { useState } from 'react';

function Nav({ language, dayNight }) {
  const [tach, setTach] = useState(true);

  return (
    <div className={styles.navConteiner}>
      <nav>
        <div
          className={`${styles.burgerButton} ${!tach ? styles.active : ''}`}
          onClick={() => setTach(!tach)}
        >
          {' '}
          <div
            className={!dayNight ? styles.activDayNignt : styles.burgerBar}
          ></div>
          <div
            className={!dayNight ? styles.activDayNignt : styles.burgerBar}
          ></div>
          <div
            className={!dayNight ? styles.activDayNignt : styles.burgerBar}
          ></div>
        </div>
        <div
          className={
            tach ? styles.conteiner : `${styles.conteiner} ${styles.active}`
          }
        >
          <div className={styles.buttonConteiner}>
            <Link to='about' smooth={true} duration={500}>
              <button className={styles.button}>
                {language ? 'About me' : 'Про мене'}
              </button>
            </Link>
            <Link to='portfolio'>
              <button className={styles.button}>
                {language ? 'Portfolio' : 'Портфоліо'}
              </button>
            </Link>
            <Link to='skills'>
              <button className={styles.button}>
                {language ? 'Skills' : 'Навички'}
              </button>
            </Link>
            <Link to='contacts' smooth={true} duration={500}>
              <button className={styles.button}>
                {language ? 'Contacts' : 'Контакти'}{' '}
              </button>
            </Link>{' '}
          </div>
        </div>
      </nav>
      {!tach && (
        <div className={styles.overlay} onClick={() => setTach(true)}></div>
      )}
    </div>
  );
}

export default Nav;
