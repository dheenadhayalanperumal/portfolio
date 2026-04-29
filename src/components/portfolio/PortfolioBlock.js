import React, { useRef } from 'react';
import Style from './PortfolioBlock.module.scss';

function PortfolioBlock({ image, live, source, title, index = 0 }) {
  const cardRef = useRef(null);

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`);
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  const validUrl = (u) =>
    typeof u === 'string' && /^https?:\/\//i.test(u);

  return (
    <article
      className={Style.block}
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className={Style.thumb}>
        <span className={Style.index}>0{index + 1}</span>
        <img src={image} alt={title} />
        <div className={Style.gloss} aria-hidden="true" />
      </div>

      <div className={Style.meta}>
        <h3 className={Style.title}>{title}</h3>
        <div className={Style.actions}>
          {validUrl(live) && (
            <a
              className={Style.action}
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-safari" aria-hidden="true" />
              <span>live demo</span>
              <span className={Style.arrow}>↗</span>
            </a>
          )}
          {validUrl(source) && (
            <a
              className={`${Style.action} ${Style.actionGhost}`}
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-code" aria-hidden="true" />
              <span>source</span>
            </a>
          )}
          {!validUrl(live) && !validUrl(source) && (
            <span className={Style.locked}>private · ask for access</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default PortfolioBlock;
