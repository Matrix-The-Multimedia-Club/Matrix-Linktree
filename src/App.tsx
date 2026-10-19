import React, { useEffect, useState } from 'react';
import { linksConfig } from './config/links';
import clubLogo from './assets/club_logo.png';
import { TypographyMesh } from './components/TypographyMesh';
import {
  InstagramIcon,
  LinkedInIcon,
  WhatsAppChannelIcon,
  WhatsAppCommunityIcon,
  EmailIcon,
  ArrowNavIcon,
} from './components/Icons';

interface SocialLinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
  isExternal: boolean;
}

const CURRENT_YEAR = new Date().getFullYear();

export const App: React.FC = () => {
  const [spotlightPos, setSpotlightPos] = useState<{ x: string; y: string }>({
    x: '50%',
    y: '25%',
  });

  // Dynamic Cursor Spotlight following pointer movements
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      setSpotlightPos({
        x: `${e.clientX}px`,
        y: `${e.clientY}px`,
      });
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  // Exactly five links in the strictly specified order:
  // 1. Instagram
  // 2. LinkedIn
  // 3. WhatsApp Channel
  // 4. WhatsApp Community
  // 5. Email Us
  const socialLinks: SocialLinkItem[] = [
    {
      id: 'instagram',
      title: 'Instagram',
      subtitle: 'Club updates, events & moments',
      url: linksConfig.instagram,
      icon: <InstagramIcon size={20} />,
      ariaLabel: 'Visit Matrix Club on Instagram — Club updates, events & moments',
      isExternal: true,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'Achievements, opportunities & milestones',
      url: linksConfig.linkedin,
      icon: <LinkedInIcon size={20} />,
      ariaLabel: 'Connect with Matrix Club on LinkedIn — Achievements, opportunities & milestones',
      isExternal: true,
    },
    {
      id: 'whatsapp-channel',
      title: 'WhatsApp Channel',
      subtitle: 'Official announcements & quick updates',
      url: linksConfig.whatsappChannel,
      icon: <WhatsAppChannelIcon size={20} />,
      ariaLabel: 'Join Matrix Club WhatsApp Channel — Official announcements & quick updates',
      isExternal: true,
    },
    {
      id: 'whatsapp-community',
      title: 'WhatsApp Community',
      subtitle: 'Connect with the Matrix family',
      url: linksConfig.whatsappCommunity,
      icon: <WhatsAppCommunityIcon size={20} />,
      ariaLabel: 'Join Matrix Club WhatsApp Community — Connect with the Matrix family',
      isExternal: true,
    },
    {
      id: 'email',
      title: 'Email Us',
      subtitle: 'Collaborations, queries & official contact',
      url: linksConfig.email,
      icon: <EmailIcon size={20} />,
      ariaLabel: 'Send an email to Matrix Club — Collaborations, queries & official contact',
      isExternal: false,
    },
  ];

  return (
    <>
      {/* Dynamic Pointer Spotlight */}
      <div
        id="spotlight"
        style={{
          // @ts-expect-error CSS custom property
          '--x': spotlightPos.x,
          '--y': spotlightPos.y,
        }}
        aria-hidden="true"
      />

      {/* 1. Full-Screen Repeating Kinetic Typography Mesh (11 Rows, Alternating Directions) */}
      <TypographyMesh />

      {/* 2. Protective Radial Vignette & Micro Dot Grid Overlays */}
      <div className="radial-overlay" aria-hidden="true" />
      <div className="dot-grid-overlay" aria-hidden="true" />

      {/* 3. Centered Linktree Profile Container (~440px wide) */}
      <main className="linktree-container">
        {/* Profile Header: Prominent Logo, Headings, Description, Tagline */}
        <header className="profile-header">
          {/* Prominent Logo Container with Ambient Backglow */}
          <div className="logo-container">
            <div className="logo-ambient-glow" aria-hidden="true" />
            <div className="logo-card">
              <img
                src={clubLogo}
                alt="Matrix Club Official Logo"
                className="club-logo"
                width={104}
                height={104}
                loading="eager"
              />
            </div>
          </div>

          <h1 className="club-heading">Matrix Club</h1>
          <p className="club-subtitle">VIT Bhopal University</p>
          <p className="club-description">
            The technical community for curious minds, builders, and tomorrow&apos;s innovators.
          </p>

          {/* Official Tagline Badge with Pulsing Status Dot */}
          <div className="club-tagline-badge">
            <span className="tagline-pulse-dot" aria-hidden="true" />
            <span className="tagline-text">
              Empowering the Next Wave of Intelligent Multimedia
            </span>
          </div>
        </header>

        {/* Five Vertically Stacked Social Buttons */}
        <section className="links-stack" aria-label="Official Social Links">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              id={`link-${item.id}`}
              href={item.url}
              className="link-button"
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              aria-label={item.ariaLabel}
            >
              {/* Left Slot: Symmetrical balance with Platform Icon */}
              <span className="btn-slot-left" aria-hidden="true">
                {item.icon}
              </span>

              {/* Center Slot: Visually centered Label with distinct role subtitle */}
              <span className="btn-slot-center">
                <span className="btn-title">{item.title}</span>
                <span className="btn-subtitle">{item.subtitle}</span>
              </span>

              {/* Right Slot: Symmetrical balance with Subtle Navigation Arrow */}
              <span className="btn-slot-right" aria-hidden="true">
                <ArrowNavIcon size={16} />
              </span>
            </a>
          ))}
        </section>

        {/* Small, Understated Footer */}
        <footer className="club-footer">
          <p className="footer-univ">Matrix Club &bull; VIT Bhopal</p>
          <p className="footer-copy">
            &copy; {CURRENT_YEAR} Built for the community. Driven by innovation.
          </p>
        </footer>
      </main>
    </>
  );
};

export default App;
