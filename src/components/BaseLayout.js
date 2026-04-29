import React, { useEffect, useState } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import Style from './BaseLayout.module.scss';
import App from '../App.module.scss';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Terms from './terms/Terms';
import Portfolio from './portfolio/Portfolio';
import { Box } from '@mui/material';
import PrivacyPolicy from './terms/PrivacyPolicy';
import Termsandconditions from './terms/Termsandconditions';
import DheefitPrivacyPolicy from './terms/DheefitPrivacyPolicy';

export default function BaseLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  function handleToggleDarkMode() {
    const next = !darkMode;
    localStorage.setItem('darkMode', `${next}`);
    setDarkMode(next);
  }

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      setDarkMode(stored === 'true');
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  }, []);

  // Cursor-tracked accent — feeds CSS variables that components can read.
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mx', `${x}%`);
      document.documentElement.style.setProperty('--my', `${y}%`);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  // Reveal-on-scroll for any element with .ed-reveal
  useEffect(() => {
    const els = document.querySelectorAll(`.${App.edReveal || 'ed-reveal'}, .ed-reveal`);
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  const isPolicyRoute = ['/PrivacyPolicy', '/Privacy', '/GamePrivacyPolicy', '/DheefitPrivacyPolicy']
    .includes(location.pathname);

  return (
    <Box className={`${Style.shell} ${darkMode ? Style.dark : Style.light}`}>
      {/* Atmospheric backdrop */}
      <div className={Style.backdrop} aria-hidden="true">
        <div className={`${Style.blob} ${Style.one}`} />
        <div className={`${Style.blob} ${Style.two}`} />
        <div className={`${Style.blob} ${Style.three}`} />
        <div className={Style.gridLines} />
      </div>
      <div className="ed-grain" aria-hidden="true" />

      <div className={Style.content}>
        {!isPolicyRoute && (
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        )}

        <main key={location.pathname} className={Style.pageEnter}>
          <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/portfolio'} element={<Portfolio />} />
            <Route exact path={'/PrivacyPolicy'} element={<Terms />} />
            <Route exact path={'/Privacy'} element={<PrivacyPolicy />} />
            <Route exact path={'/GamePrivacyPolicy'} element={<Termsandconditions />} />
            <Route exact path={'/DheefitPrivacyPolicy'} element={<DheefitPrivacyPolicy />} />
          </Routes>
        </main>

        {!isPolicyRoute && (
          <footer className={Style.footer}>
            <span>© {new Date().getFullYear()} — Dheenadhayalan Perumal</span>
            <span>
              <i className={Style.pulse} /> Available for select work
            </span>
          </footer>
        )}
      </div>
    </Box>
  );
}
