import { WiDaySunny, WiNightClear } from 'react-icons/wi';
import styles from '../css/aboutMePage.module.css';

function AboutMePage({ language, setLanguage, dayNight, setDayNight }) {
  return (
    <div className={styles.mainConteiner}>
      <div className={styles.conteiner}>
        {language ? (
          <>
            <h2 id='about'>Mykhailo Loniak</h2>
            <span>
              Frontend developer <br />
              27 years old, Madrid
            </span>
            <div
              className={styles.dayNight}
              onClick={() => setDayNight(!dayNight)}
            >
              {!dayNight ? <WiDaySunny /> : <WiNightClear />}
            </div>
            <div>
              <span
                className={
                  !dayNight
                    ? `${styles.language} ${styles.activeDayNingt}`
                    : styles.language
                }
                onClick={() => setLanguage(!language)}
              >
                UA<span className={language ? styles.active : ''}>ENG</span>
              </span>
            </div>
          </>
        ) : (
          <>
            <h2>Михайло Лоняк</h2>
            <span>
              Фронтенд розробник <br />
              27 років, Мадрид
            </span>
            <div
              className={styles.dayNight}
              onClick={() => setDayNight(!dayNight)}
            >
              {!dayNight ? <WiDaySunny /> : <WiNightClear />}
            </div>
            <div>
              <span
                className={
                  !dayNight
                    ? `${styles.language} ${styles.activeDayNingt}`
                    : styles.language
                }
                onClick={() => setLanguage(!language)}
              >
                <span className={!language ? styles.active : ''}>UA</span>ENG
              </span>
            </div>
          </>
        )}
        <br />
      </div>

      <img src='./photo_2023-08-19_12-21-34.jpg' alt='' />
      <br />
      <h3>About me</h3>
      <span>
        {language
          ? `
          My name is Mykhailo. I spent my childhood in a small village. Since childhood, I have always been curious about how various mechanisms and technologies work. This became one of the reasons why I decided to study mechanical engineering. After finishing school, I enrolled at the National University "Lviv Polytechnic" in the field of mechanical engineering. There, I found answers to many of my questions and learned to apply the knowledge gained during lectures and practical sessions. Later, I became fascinated with CSS, HTML, and JavaScript, which allows me to create user-friendly and visually appealing web pages. Additionally, I developed an interest in React, which enabled me to build complex and interactive web applications.`
          : `Мене звати Михайло. Дитинство я провів у невеликому селі. З дитинства мене завжди цікавило, як працюють різні механізми та технології. Це стало однією з причин, чому я вирішив навчатися на інженера механіка. Після закінчення школи я поступив до Національного університету "Львівська політехніка" на спеціальність машинобудування. Там я знайшов відповіді на багато з моїх запитань і навчився застосовувати знання, отримані під час лекцій та практичних занять. Згодом я захопився CSS, HTML та JavaScript, що дозволяє мені створювати зручні та візуально привабливі веб-сторінки. Пізніше я відкрив для себе React і розпочав захоплюватися ним, що дало мені змогу будувати складні та інтерактивні веб-додатки.`}
      </span>
    </div>
  );
}

export default AboutMePage;
