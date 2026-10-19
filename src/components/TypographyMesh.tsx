import React from 'react';

interface RowConfig {
  direction: 'left' | 'right';
  duration: number; // in seconds
  fontSize: string;
  opacity: number;
  tracking: string;
  fontWeight: number;
}

const ROWS: RowConfig[] = [
  { direction: 'left', duration: 48, fontSize: '1.85rem', opacity: 0.25, tracking: '0.24em', fontWeight: 700 },
  { direction: 'right', duration: 58, fontSize: '2.30rem', opacity: 0.35, tracking: '0.22em', fontWeight: 600 },
  { direction: 'left', duration: 42, fontSize: '1.95rem', opacity: 0.30, tracking: '0.25em', fontWeight: 700 },
  { direction: 'right', duration: 60, fontSize: '2.55rem', opacity: 0.24, tracking: '0.20em', fontWeight: 600 },
  { direction: 'left', duration: 52, fontSize: '2.10rem', opacity: 0.32, tracking: '0.24em', fontWeight: 700 },
  { direction: 'right', duration: 56, fontSize: '2.35rem', opacity: 0.26, tracking: '0.22em', fontWeight: 600 },
  { direction: 'left', duration: 44, fontSize: '2.50rem', opacity: 0.36, tracking: '0.24em', fontWeight: 700 },
  { direction: 'right', duration: 62, fontSize: '1.95rem', opacity: 0.28, tracking: '0.25em', fontWeight: 600 },
  { direction: 'left', duration: 50, fontSize: '2.25rem', opacity: 0.34, tracking: '0.23em', fontWeight: 700 },
  { direction: 'right', duration: 54, fontSize: '1.85rem', opacity: 0.26, tracking: '0.26em', fontWeight: 600 },
  { direction: 'left', duration: 46, fontSize: '2.15rem', opacity: 0.30, tracking: '0.24em', fontWeight: 700 },
];

const PHRASE = 'MATRIX CLUB, VITB ·';
const REPEAT_COUNT = 8; // Per half, ensuring ample width for ultra-wide screens

export const TypographyMesh: React.FC = () => {
  return (
    <div
      className="typography-mesh-container"
      aria-hidden="true"
    >
      {ROWS.map((row, index) => {
        const animationClass = row.direction === 'left' ? 'marquee-left' : 'marquee-right';
        const phraseArray = Array.from({ length: REPEAT_COUNT });

        return (
          <div key={index} className="mesh-row">
            <div
              className={`marquee-track ${animationClass}`}
              style={{
                animationDuration: `${row.duration}s`,
                fontSize: row.fontSize,
                opacity: row.opacity,
                letterSpacing: row.tracking,
                fontWeight: row.fontWeight,
              }}
            >
              {/* Half 1 */}
              <div className="marquee-content">
                {phraseArray.map((_, i) => (
                  <span key={`h1-${i}`} className="mesh-phrase">
                    {PHRASE}
                  </span>
                ))}
              </div>
              {/* Half 2 (Exact duplicate for continuous, seamless loop) */}
              <div className="marquee-content">
                {phraseArray.map((_, i) => (
                  <span key={`h2-${i}`} className="mesh-phrase">
                    {PHRASE}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TypographyMesh;
