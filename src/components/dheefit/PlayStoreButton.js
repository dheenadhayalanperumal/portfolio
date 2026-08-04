import React from 'react';
import Style from './PlayStoreButton.module.scss';

// Google Play badge, drawn inline so it needs no icon font or remote asset.
// Renders nothing unless a URL is set, so the card never shows a dead button.
export default function PlayStoreButton({ href, label = 'Google Play', kicker = 'Get it on' }) {
  if (!href) return null;

  return (
    <a
      className={Style.badge}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${kicker} ${label} — opens in a new tab`}
    >
      <svg
        className={Style.glyph}
        viewBox="0 0 512 512"
        width="22"
        height="22"
        aria-hidden="true"
        focusable="false"
      >
        {/* The four faces of the Play triangle. */}
        <path fill="#00D3FF" d="M47 19 322 256 47 493c-9-6-15-17-15-31V50c0-14 6-25 15-31z" />
        <path fill="#00F076" d="M47 19c7-4 16-4 25 1l281 160-31 76L47 19z" />
        <path fill="#FFCE00" d="M353 180l70 40c22 13 22 40 0 53l-70 40-31-57 31-76z" />
        <path fill="#FF3A44" d="M72 492c-9 5-18 5-25 1l275-237 31 76-281 160z" />
      </svg>

      <span className={Style.text}>
        <span className={Style.kicker}>{kicker}</span>
        <span className={Style.store}>{label}</span>
      </span>
    </a>
  );
}
