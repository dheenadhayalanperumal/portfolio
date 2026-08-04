import React from 'react';
import { Link } from 'react-router-dom';
import Style from './DheeFitFeature.module.scss';
import PlayStoreButton from './PlayStoreButton';
import { info } from '../../info/Info';

// The founder project, given its own billing above the work grid.
// All copy comes from info.dheefit — nothing is hardcoded here.
export default function DheeFitFeature() {
  const p = info.dheefit;
  if (!p) return null;

  const t = p.labels || {};
  const chips = p.stack.slice(0, p.featuredStackCount || p.stack.length);

  return (
    <article className={Style.feature}>
      <div className={Style.glow} aria-hidden="true" />

      <div className={Style.body}>
        <div className={Style.badgeRow}>
          <span className={Style.badge}>
            <i className={Style.pip} aria-hidden="true" />
            {t.badge}
          </span>
          <span className={Style.period}>{p.period}</span>
        </div>

        <h3 className={Style.title}>
          {p.name} — <em>{p.tagline}</em>
        </h3>

        <p className={Style.role}>{p.role}</p>

        <p className={Style.summary}>{p.summary}</p>

        <ul className={Style.chips} aria-label="Core technologies">
          {chips.map((tech) => (
            <li key={tech} className={Style.chip}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={Style.actions}>
          <PlayStoreButton
            href={p.playStore}
            kicker={t.playStoreKicker}
            label={t.playStoreLabel}
          />

          <Link to="/dheefit" className={Style.cta}>
            <span>{t.caseStudyCta}</span>
            <span className={Style.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* A real screenshot when one is supplied; otherwise a plain frame, so
          the card still looks deliberate without an image. */}
      <div className={Style.aside} aria-hidden={p.mockup ? undefined : 'true'}>
        <div className={Style.phone}>
          {/* A real screenshot brings its own status bar, so the drawn notch
              would just sit on top of it. */}
          {!p.mockup && <div className={Style.notch} aria-hidden="true" />}
          <div className={Style.screen}>
            {p.mockup ? (
              <img
                className={Style.shot}
                src={p.mockup}
                alt={p.mockupAlt || `${p.name} app screenshot`}
                width={1344}
                height={2992}
                decoding="async"
              />
            ) : (
              <div className={Style.placeholder}>
                <span className={Style.screenLabel}>{p.name}</span>
                <span className={Style.screenSub}>{t.screenTicker}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
