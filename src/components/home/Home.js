import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { info } from '../../info/Info';

// Pull GitHub & LinkedIn out of socials by label so we can promote them
// to first-class profile buttons. Falls back gracefully if absent.
const findSocial = (label) =>
  info.socials.find((s) => s.label?.toLowerCase() === label);

const githubProfile = findSocial('github');
const linkedinProfile = findSocial('linkedin');
// Remaining socials get the small-icon row.
const otherSocials = info.socials.filter(
  (s) => !['github', 'linkedin'].includes(s.label?.toLowerCase())
);

export default function Home() {
  const navigate = useNavigate();
  const avatarRef = useRef(null);

  // Subtle parallax tilt on the avatar based on cursor.
  useEffect(() => {
    const el = avatarRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className={Style.wrap}>
      <div className={Style.rail}>
        ⟶ {info.firstName.toLowerCase()}.dev · est. {new Date().getFullYear() - 4}
      </div>

      <div>
        <div className={Style.meta}>
          <span className={Style.dot} />
          <span>currently — {info.position}</span>
          <span className={Style.line} />
        </div>

        <h1 className={Style.title}>
          <span className={Style.firstWord}><span>Hi, I'm</span></span>{' '}
          <span className={Style.lastWord}><span>{info.firstName}.</span></span>
          <span className={Style.wave}>👋</span>
        </h1>

        <p className={Style.subhead}>
          A <strong>full-stack developer</strong> crafting fast, accessible
          interfaces and resilient backends. I obsess over typography, motion,
          and the details that make products feel alive.
        </p>

        <ul className={Style.chips} aria-label="bio">
          {info.miniBio.map((bio, i) => (
            <EmojiBullet
              key={i}
              emoji={bio.emoji}
              text={bio.text}
              delay={`${120 + i * 90}ms`}
            />
          ))}
        </ul>

        <div className={Style.actions}>
          <button
            type="button"
            className={Style.cta}
            onClick={() => navigate('/portfolio')}
          >
            <span>view selected work</span>
            <span className={`${Style.arrow}`}>→</span>
          </button>

          <a
            className={Style.ghost}
            href={`mailto:${info.miniBio.find((b) => b.emoji === '📧')?.text || ''}`}
          >
            ✦ get in touch
          </a>
        </div>

        <div className={Style.profiles} aria-label="profile links">
          {githubProfile && (
            <a
              className={`${Style.profile} ${Style.profileGithub}`}
              href={githubProfile.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <i className="fa fa-github" aria-hidden="true" />
              <span className={Style.profileMeta}>
                <span className={Style.profileLabel}>GitHub</span>
                <span className={Style.profileHandle}>
                  @{githubProfile.link.split('/').filter(Boolean).pop()}
                </span>
              </span>
              <span className={Style.profileArrow}>↗</span>
            </a>
          )}

          {linkedinProfile && (
            <a
              className={`${Style.profile} ${Style.profileLinkedin}`}
              href={linkedinProfile.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <i className="fa fa-linkedin" aria-hidden="true" />
              <span className={Style.profileMeta}>
                <span className={Style.profileLabel}>LinkedIn</span>
                <span className={Style.profileHandle}>
                  /in/{linkedinProfile.link.replace(/\/+$/, '').split('/in/')[1] || 'connect'}
                </span>
              </span>
              <span className={Style.profileArrow}>↗</span>
            </a>
          )}
        </div>

        {otherSocials.length > 0 && (
          <div className={Style.socials}>
            <span className={Style.socialsCaption}>also on —</span>
            {otherSocials.map((social, i) => (
              <SocialIcon
                key={i}
                link={social.link}
                icon={social.icon}
                label={social.label}
                index={i}
              />
            ))}
          </div>
        )}
      </div>

      <div className={Style.portrait}>
        <div className={Style.avatarFrame}>
          <div className={`${Style.badge} ${Style.badgeOne}`}>React · RN</div>
          <div className={`${Style.badge} ${Style.badgeTwo}`}>open to work</div>
          <div className={`${Style.badge} ${Style.badgeThree}`}>India · IST</div>
          <img
            ref={avatarRef}
            src={me}
            alt={`${info.firstName} ${info.lastName}`}
            className={Style.avatar}
          />
        </div>
      </div>
    </section>
  );
}
