import styles from '../css/portfolio.module.css';

function Portfolio({ language, dayNight }) {
  const arrPortfolio = [
    {
      titleUa: 'Калькулятор',
      titleEng: 'Calculator',
      img: 'https://raw.githubusercontent.com/MykhailoLoniak/project/main/calc.png',
      aboutUa:
        'Це простий калькулятор, який дозволяє вам виконувати арифметичні операції, обчислювати вирази та виконувати деякі одноаргументні операції.',
      aboutEng:
        'This is a simple calculator that allows you to perform arithmetic operations, evaluate expressions, and perform some one-argument operations.',
      alt: 'Logo',
      url: 'https://mykhailoloniak.github.io/project/',
    },
    {
      titleUa: 'Курсів Валют',
      titleEng: 'Exchange rates',
      img: 'https://raw.githubusercontent.com/MykhailoLoniak/Bank/main/Capture.PNG',
      aboutUa:
        'Цей додаток дозволяє отримувати актуальні курси валют з API Національного банку України та відображати їх у списку.',
      aboutEng:
        'This application allows you to retrieve the current currency exchange rates from the API of the National Bank of Ukraine and display them in a list.',
      alt: 'Logo',
      url: 'https://mykhailoloniak.github.io/Bank/',
    },
    {
      titleUa: 'Радіо-програвач',
      titleEng: 'Radio Player',
      img: 'https://raw.githubusercontent.com/MykhailoLoniak/music-player/master/Capture.PNG',
      aboutUa:
        'Цей проект є веб-додатком, який дозволяє користувачам відтворювати різні радіостанції. Додаток створений за допомогою React та CSS, і має ряд функціональних можливостей для відтворення аудіо та управління плейлистами.',
      aboutEng:
        'This project is a web application that allows users to play various radio stations. The application is built using React and CSS, and it incorporates a range of functionalities for audio playback and playlist management.',
      alt: 'Logo',
      url: 'https://music-player-teal-two.vercel.app/',
    },
    {
      titleUa: 'Погодний додаток',
      titleEng: 'Weather app',
      img: 'https://raw.githubusercontent.com/MykhailoLoniak/Weather/master/Capture.PNG',
      aboutUa:
        'Це погодний додаток, який відображає поточну погоду та час для певної локації. Додаток використовує дані з API OpenWeatherMap для отримання інформації про погоду.',
      aboutEng:
        'This is a weather application that displays the current weather and time for a specific location. The application utilizes data from the OpenWeatherMap API to retrieve weather information.',
      alt: 'Logo',
      url: 'https://weather-eight-lyart.vercel.app/',
    },
  ];
  return (
    <div className={styles.container}>
      <div className='hr'></div>
      <h3>{!language ? 'Портфоліо' : 'Portfolio'}</h3>
      <div
        className={
          dayNight ? styles.cards : `${styles.cards} ${styles.activeDayNingt}`
        }
      >
        {arrPortfolio.map((e, index) => (
          <div key={index} className={styles.card}>
            <a href={e.url} target='_blank'>
              <img src={e.img} alt={e.alt} />
              <h4>{!language ? e.titleUa : e.titleEng}</h4>
              <span>{!language ? e.aboutUa : e.aboutEng}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
