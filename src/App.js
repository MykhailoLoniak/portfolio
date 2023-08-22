import { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Додано `Routes`
import Nav from './components/Nav';
import ContactsPage from './components/ContactsPage';
import AboutMePage from './components/AboutMePage';
import Skills from './components/Skills';

import './App.css';
import Portfolio from './components/Portfolio';

function App() {
  const [language, setLanguage] = useState(true);
  const [dayNight, setDayNight] = useState(true);

  return (
    <Router>
      <div className={dayNight ? 'html' : 'html activ'}>
        <div className='htmlConteiner'>
          <Nav dayNight={dayNight} language={language} />
          <AboutMePage
            dayNight={dayNight}
            setDayNight={setDayNight}
            language={language}
            setLanguage={setLanguage}
          />
          <Skills language={language} setLanguage={setLanguage} />
          <Portfolio language={language} dayNight={dayNight} />
          <ContactsPage language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
