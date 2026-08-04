import React from 'react';
import Style from './Portfolio.module.scss';
import PortfolioBlock from './PortfolioBlock';
import DheeFitFeature from '../dheefit/DheeFitFeature';
import { info } from '../../info/Info';

export default function Portfolio() {
  const work = info.workPage;

  return (
    <section className={Style.wrap}>
      <header className={`${Style.head} ed-reveal`}>
        <span className={Style.eyebrow}>{work.eyebrow}</span>
        <h2 className={Style.title}>
          A few things I've <em>shipped</em>.
        </h2>
        <p className={Style.lede}>
          {work.lede.replace('{count}', info.portfolio.length)}
        </p>
      </header>

      {info.dheefit && (
        <>
          <div className={`${Style.featured} ed-reveal`}>
            <DheeFitFeature />
          </div>

          <div className={`${Style.gridLabel} ed-reveal`}>
            <span>{work.otherWorkLabel}</span>
            <i aria-hidden="true" />
          </div>
        </>
      )}

      <div className={Style.grid}>
        {info.portfolio.map((project, i) => (
          <div
            key={i}
            className={`${Style.cell} ed-reveal`}
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
