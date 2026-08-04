import React from 'react';
import { Link } from 'react-router-dom';
import Style from './DheeFit.module.scss';
import PlayStoreButton from './PlayStoreButton';
import { info } from '../../info/Info';

// Case study for the founder project. Every string and list comes from
// info.dheefit, so the page is edited entirely from Info.js.
export default function DheeFit() {
  const p = info.dheefit;
  if (!p) return null;

  const t = p.labels || {};
  const metrics = p.metrics || [];
  const screenshots = p.screenshots || [];

  return (
    <section className={Style.wrap}>
      {/* ── Header ───────────────────────────────────────────────────── */}
      <header className={`${Style.head} ed-reveal`}>
        <Link to="/portfolio" className={Style.back}>
          {t.backToWork}
        </Link>

        <span className={Style.eyebrow}>{t.eyebrow}</span>

        <h2 className={Style.title}>
          {p.name} <em>{p.tagline}</em>
        </h2>

        <div className={Style.metaRow}>
          <span className={Style.metaItem}>
            <span className={Style.metaKey}>{t.roleKey}</span>
            {p.role}
          </span>
          <span className={Style.metaItem}>
            <span className={Style.metaKey}>{t.periodKey}</span>
            {p.period}
          </span>
          <span className={Style.metaItem}>
            <span className={Style.metaKey}>{t.platformKey}</span>
            {p.platform}
          </span>
        </div>

        <p className={Style.lede}>{p.summary}</p>

        {(p.playStore || p.website) && (
          <div className={Style.headActions}>
            <PlayStoreButton
              href={p.playStore}
              kicker={t.playStoreKicker}
              label={t.playStoreLabel}
            />
            {p.website && (
              <a
                className={Style.ghost}
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.websiteCta}
              </a>
            )}
          </div>
        )}
      </header>

      {/* ── Metrics (renders only once real numbers exist) ───────────── */}
      {metrics.length > 0 && (
        <div className={`${Style.metrics} ed-reveal`}>
          {metrics.map((metric) => (
            <div className={Style.metric} key={metric.label}>
              <span className={Style.metricValue}>{metric.value}</span>
              <span className={Style.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* ── Problem / audience / approach ────────────────────────────── */}
      <div className={`${Style.trio} ed-reveal`}>
        <article className={Style.card}>
          <span className={Style.cardLabel}>{t.problem}</span>
          <p className={Style.cardBody}>{p.problem}</p>
        </article>
        <article className={Style.card}>
          <span className={Style.cardLabel}>{t.audience}</span>
          <p className={Style.cardBody}>{p.audience}</p>
        </article>
        <article className={Style.card}>
          <span className={Style.cardLabel}>{t.approach}</span>
          <p className={Style.cardBody}>{p.approach}</p>
        </article>
      </div>

      {/* ── Screenshots (renders only when images are added) ─────────── */}
      {screenshots.length > 0 && (
        <section className={`${Style.block} ed-reveal`}>
          <h3 className={Style.blockTitle}>{t.screenshots}</h3>
          <div className={Style.shots}>
            {screenshots.map((shot) => (
              <figure className={Style.shot} key={shot.src}>
                <img src={shot.src} alt={shot.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ── Features ─────────────────────────────────────────────────── */}
      <section className={`${Style.block} ed-reveal`}>
        <h3 className={Style.blockTitle}>{t.features}</h3>
        <ul className={Style.features}>
          {p.features.map((feature) => (
            <li className={Style.feature} key={feature.label}>
              <span className={Style.featureLabel}>{feature.label}</span>
              <span className={Style.featureDetail}>{feature.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Architecture ─────────────────────────────────────────────── */}
      <section className={`${Style.block} ed-reveal`}>
        <h3 className={Style.blockTitle}>{t.architecture}</h3>
        <ol className={Style.layers}>
          {p.architecture.map((layer, i) => (
            <li className={Style.layer} key={layer.layer}>
              <span className={Style.layerIndex}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h4 className={Style.layerTitle}>{layer.layer}</h4>
                <p className={Style.layerBody}>{layer.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Tech stack ───────────────────────────────────────────────── */}
      <section className={`${Style.block} ed-reveal`}>
        <h3 className={Style.blockTitle}>{t.stack}</h3>
        <ul className={Style.stack}>
          {p.stack.map((tech) => (
            <li className={Style.tech} key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Challenges ───────────────────────────────────────────────── */}
      <section className={`${Style.block} ed-reveal`}>
        <h3 className={Style.blockTitle}>{t.challenges}</h3>
        <div className={Style.challenges}>
          {p.challenges.map((challenge) => (
            <article className={Style.challenge} key={challenge.title}>
              <h4 className={Style.challengeTitle}>{challenge.title}</h4>
              <p className={Style.challengeBody}>{challenge.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Responsibilities ─────────────────────────────────────────── */}
      <section className={`${Style.block} ed-reveal`}>
        <h3 className={Style.blockTitle}>{t.owned}</h3>
        <ul className={Style.owned}>
          {p.responsibilities.map((item) => (
            <li className={Style.ownedItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
        {p.ownershipNote && (
          <p className={Style.ownedNote}>{p.ownershipNote}</p>
        )}
      </section>

      {/* ── Footer links ─────────────────────────────────────────────── */}
      <footer className={`${Style.foot} ed-reveal`}>
        <Link to="/portfolio" className={Style.ghost}>
          {t.backToWorkFoot}
        </Link>
        {p.privacyPolicy && (
          <Link to={p.privacyPolicy} className={Style.footLink}>
            {t.privacyCta}
          </Link>
        )}
      </footer>
    </section>
  );
}
