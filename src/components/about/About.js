import React from 'react';
import Style from './About.module.scss';
import Terminal from './Terminal';
import { info } from '../../info/Info';

export default function About() {
  return (
    <section className={Style.wrap}>
      <div className="ed-reveal">
        <span className={Style.eyebrow}>chapter / 01 — about</span>
        <h2 className={Style.heading}>
          Engineer with a designer's eye for <em>detail</em>.
        </h2>
        <p className={Style.intro}>{info.bio}</p>
      </div>

      <div className={Style.sections}>
        {/* LEFT — terminal */}
        <div className={`${Style.col} ed-reveal`}>
          <Terminal title="~/about" prompt={`${info.firstName.toLowerCase()}@studio`}>
            <Terminal.Line cmd="cat about.txt" />
            <Terminal.Output>
              {info.bio}
            </Terminal.Output>
            <Terminal.Line cmd="whoami" delay={400} />
            <Terminal.Output delay={500}>
              <strong>{info.firstName} {info.lastName}</strong> — {info.position} based in India.
            </Terminal.Output>
            <Terminal.Line cmd="echo $CONTACT" delay={800} />
            <Terminal.Output delay={900}>
              dheenadhayalanperumal@gmail.com
            </Terminal.Output>
          </Terminal>

          <div className={Style.card}>
            <div className={Style.cardLabel}>
              <span>{'// hobbies'}</span>
              <span>—</span>
            </div>
            <h3 className={Style.cardTitle}>Off-screen, you'll find me…</h3>
            <div className={Style.hobbies}>
              {info.hobbies.map((h, i) => (
                <div className={Style.hobby} key={i} style={{ animationDelay: `${i * 80}ms` }}>
                  <span className={Style.hEmoji}>{h.emoji}</span>
                  <span className={Style.hLabel}>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — skills + stats */}
        <div className={`${Style.col} ed-reveal`}>
          <div className={Style.card}>
            <div className={Style.cardLabel}>
              <span>{'// stack — proficient'}</span>
              <span>{info.skills.proficientWith.length} tools</span>
            </div>
            <h3 className={Style.cardTitle}>Daily drivers</h3>
            <div className={Style.skillList}>
              {info.skills.proficientWith.map((s, i) => (
                <span
                  key={s}
                  className={Style.skill}
                  style={{ '--i': i }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className={Style.card}>
            <div className={Style.cardLabel}>
              <span>{'// stack — exposed'}</span>
              <span>{info.skills.exposedTo.length} tools</span>
            </div>
            <h3 className={Style.cardTitle}>Also comfortable with</h3>
            <div className={Style.skillList}>
              {info.skills.exposedTo.map((s, i) => (
                <span
                  key={s}
                  className={`${Style.skill} ${Style.skillSecondary}`}
                  style={{ '--i': i }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${Style.stats} ed-reveal`}>
        <div className={Style.stat}>
          <span className={Style.num}>4+</span>
          <span className={Style.lab}>years building</span>
        </div>
        <div className={Style.stat}>
          <span className={Style.num}>{info.portfolio.length}</span>
          <span className={Style.lab}>shipped projects</span>
        </div>
        <div className={Style.stat}>
          <span className={Style.num}>{info.skills.proficientWith.length}+</span>
          <span className={Style.lab}>tools mastered</span>
        </div>
        <div className={Style.stat}>
          <span className={Style.num}>∞</span>
          <span className={Style.lab}>cups of coffee</span>
        </div>
      </div>
    </section>
  );
}
