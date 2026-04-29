import React from 'react';

const wrap = {
  display: 'inline-grid',
  placeItems: 'center',
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  border: '1px solid var(--ed-line)',
  color: 'var(--ed-fg)',
  fontSize: '1rem',
  transition:
    'transform 380ms cubic-bezier(0.34,1.56,0.64,1), border-color 280ms ease, color 280ms ease, background 280ms ease',
};

function SocialIcon({ link, icon, label, index = 0 }) {
  const onEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-4px) rotate(-6deg)';
    e.currentTarget.style.borderColor = 'var(--ed-accent)';
    e.currentTarget.style.color = 'var(--ed-accent)';
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform = '';
    e.currentTarget.style.borderColor = 'var(--ed-line)';
    e.currentTarget.style.color = 'var(--ed-fg)';
  };

  return (
    <a
      target="_blank"
      aria-label={label}
      rel="noopener noreferrer"
      href={link}
      style={{
        ...wrap,
        animation: `ed-fade-up 600ms cubic-bezier(0.16,1,0.3,1) ${index * 70 + 220}ms both`,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <i className={icon} aria-hidden="true" />
    </a>
  );
}

export default SocialIcon;
