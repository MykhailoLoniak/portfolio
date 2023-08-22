import { TbBrandJavascript, TbBrandCss3, TbBrandHtml5 } from 'react-icons/tb';
import { BiLogoReact, BiLogoGithub } from 'react-icons/bi';
import styles from '../css/skills.module.css';

function Skills({ language }) {
  return (
    <>
      <div className={styles.inonsConteiner}>
        <div className='hr'></div>
        <h3 id='skills'>{language ? 'Skills' : 'Навички'}</h3>
        <div className={styles.iconsSkils}>
          <TbBrandHtml5 style={{ color: '#dd4b25' }} className={styles.img} />{' '}
          <br />
          <span>HTML5</span>
        </div>
        <div className={styles.iconsSkils}>
          <TbBrandCss3 style={{ color: '#29abe0' }} className={styles.img} />{' '}
          <br />
          <span>CSS</span>
        </div>
        <div className={styles.iconsSkils}>
          <TbBrandJavascript
            style={{ color: '#f7e11f' }}
            className={styles.img}
          />{' '}
          <br />
          <span>Js</span>
        </div>
        <div className={styles.iconsSkils}>
          <BiLogoReact style={{ color: '#60d8f9' }} className={styles.img} />{' '}
          <br />
          <span>React</span>
        </div>
        <div className={styles.iconsSkils}>
          <BiLogoGithub style={{ color: '#' }} className={styles.img} /> <br />
          <span>GitHub</span>
        </div>
      </div>
    </>
  );
}

export default Skills;
