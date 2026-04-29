import React from 'react';
import Style from './Terminal.module.scss';

function Terminal({ children, title = '~/portfolio', prompt = 'guest@studio' }) {
  return (
    <section className={Style.terminal} aria-label="terminal">
      <header className={Style.bar}>
        <span className={`${Style.dot} ${Style.r}`} />
        <span className={`${Style.dot} ${Style.y}`} />
        <span className={`${Style.dot} ${Style.g}`} />
        <span className={Style.title}>{title}</span>
      </header>
      <div className={Style.body}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          // Inject the prompt into <Terminal.Line>
          if (child.type && child.type.displayName === 'TerminalLine') {
            return React.cloneElement(child, { prompt });
          }
          return child;
        })}
      </div>
    </section>
  );
}

function Line({ cmd, prompt = 'guest@studio', delay = 0 }) {
  return (
    <div className={Style.line} style={{ animationDelay: `${delay}ms` }}>
      <span className={Style.prompt}>{prompt} <span style={{ opacity: 0.6 }}>~</span> $</span>
      <span className={Style.cmd}>{cmd}</span>
    </div>
  );
}
Line.displayName = 'TerminalLine';

function Output({ children, delay = 0 }) {
  return (
    <div className={Style.output} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

Terminal.Line = Line;
Terminal.Output = Output;

export default Terminal;
