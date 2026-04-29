import React from 'react';
import Style from './Home.module.scss';

function EmojiBullet({ emoji, text, delay = '0ms' }) {
  return (
    <li
      className={Style.chip}
      style={{ animationDelay: delay }}
    >
      <span className={Style.emoji} role="img" aria-label="bullet">{emoji}</span>
      <span>{text}</span>
    </li>
  );
}

export default EmojiBullet;
