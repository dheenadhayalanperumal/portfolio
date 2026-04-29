import React from 'react';
import Style from './Portfolio.module.scss';
import PortfolioBlock from './PortfolioBlock';
import { info } from '../../info/Info';

export default function Portfolio() {
  return (
    <section className={Style.wrap}>
      <header className={`${Style.head} ed-reveal`}>
        <span className={Style.eyebrow}>chapter / 02 — selected work</span>
        <h2 className={Style.title}>
          A few things I've <em>shipped</em>.
        </h2>
        <p className={Style.lede}>
          {info.portfolio.length} projects spanning React Native apps, weather
          dashboards, school portals, and more — built with intent, refined in
          motion.
        </p>
      </header>

      <div className={Style.grid}>
        {info.portfolio.map((project, i) => (
          <div
            key={i}
            className={`${Style.cell} ed-reveal`}
            data-span={i % 5 === 0 ? 'wide' : 'normal'}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <PortfolioBlock
              index={i}
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
