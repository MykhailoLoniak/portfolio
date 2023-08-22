import { SocialIcon } from 'react-social-icons';
import styles from '../css/contactsPage.module.css';

function ContactsPage({ language, setLanguage }) {
  const social = [
    'https://www.instagram.com/lonyakmisha/?igshid=MzNlNGNkZWQ4Mg%3D%3D',
    'https://t.me/MykhailoLoniak',
    'mailto:loniakmykhail@gmail.com',
    'https://github.com/MykhailoLoniak',
  ];
  return (
    <div className={styles.cont} id='contacts'>
      <div className='hr'></div>
      {language ? (
        <>
          <h3>Contacts</h3>
          <span>
            Want to know more or just chat?
            <br /> You are welcome!
          </span>
        </>
      ) : (
        <>
          <h3>Контакти</h3>
          <span>
            Хочете дізнатися більше чи просто поспілкуватися?
            <br /> Будь ласка!
          </span>
        </>
      )}

      <br />
      <br />
      {social.map((e, index) => (
        <SocialIcon key={index} className={styles.imgCont} url={e} />
      ))}

      <span></span>
    </div>
  );
}

export default ContactsPage;
