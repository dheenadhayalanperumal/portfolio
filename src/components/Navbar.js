import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Style from './Navbar.module.scss';
import { info } from '../info/Info';

const links = [
  { name: 'home',      to: '/',          key: 'home' },
  { name: 'about',     to: '/about',     key: 'about' },
  { name: 'portfolio', to: '/portfolio', key: 'portfolio' },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const navigate = useNavigate();
  const active = location.pathname === '/'
    ? 'home'
    : location.pathname.replace('/', '').toLowerCase();

  const containerRef = useRef(null);
  const itemRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const el = itemRefs.current[active];
    const parent = containerRef.current;
    if (el && parent) {
      const elRect = el.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      setIndicator({
        left: elRect.left - parentRect.left,
        width: elRect.width,
      });
    }
  }, [active, location.pathname]);

  // Recalc indicator on resize
  useEffect(() => {
    const onResize = () => {
      const el = itemRefs.current[active];
      const parent = containerRef.current;
      if (el && parent) {
        const elRect = el.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
        setIndicator({
          left: elRect.left - parentRect.left,
          width: elRect.width,
        });
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active]);

  return (
    <nav className={Style.bar}>
      <div
        className={Style.brand}
        onClick={() => navigate('/')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
      >
        <span className={Style.mono}>{info.initials}</span>
        <span className={Style.label}>
          {info.firstName}<br />Studio · {new Date().getFullYear()}
        </span>
      </div>

      <div className={Style.pill} ref={containerRef}>
        <span
          className={Style.indicator}
          style={{ left: `${indicator.left}px`, width: `${indicator.width}px` }}
          aria-hidden="true"
        />
        {links.map((link) => (
          <Link
            key={link.key}
            to={link.to}
            ref={(el) => (itemRefs.current[link.key] = el)}
            className={`${Style.link} ${active === link.key ? Style.activeLink : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className={Style.right}>
        <button
          type="button"
          aria-label="Toggle theme"
          className={`${Style.toggle} ${darkMode ? Style.toggleOn : ''}`}
          onClick={handleClick}
        >
          <span className={Style.knob}>{darkMode ? '☀' : '☾'}</span>
        </button>
      </div>
    </nav>
  );
}
