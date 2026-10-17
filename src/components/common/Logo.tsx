import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'icon-only';
  iconSize?: number;
  textColor?: string;
  color?: string;
}

export const SnowflakeIcon: React.FC<{ size?: number; className?: string; color?: string }> = ({
  size = 32,
  className = '',
  color = '#00828a',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 6-fold Snowflake matching Chillami visual identity */}
      <g stroke={color} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Central core ring */}
        <circle cx="50" cy="50" r="5" fill={color} />

        {/* 6 Radial Arms: 0°, 60°, 120°, 180°, 240°, 300° */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <g key={index} transform={`rotate(${angle} 50 50)`}>
            {/* Main stem */}
            <line x1="50" y1="50" x2="50" y2="12" />
            {/* Inner v-barbs */}
            <line x1="50" y1="36" x2="40" y2="28" />
            <line x1="50" y1="36" x2="60" y2="28" />
            {/* Outer v-barbs */}
            <line x1="50" y1="24" x2="42" y2="17" />
            <line x1="50" y1="24" x2="58" y2="17" />
            {/* Tip cap */}
            <circle cx="50" cy="11" r="2.5" fill={color} />
          </g>
        ))}
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  iconSize = 34,
  textColor = '#00828a',
  color = '#00828a',
}) => {
  if (variant === 'icon-only') {
    return <SnowflakeIcon size={iconSize} color={color} className={className} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        <SnowflakeIcon size={iconSize * 1.25} color={color} />
        <div className="mt-1 flex items-baseline tracking-wide">
          <span
            className="font-extrabold uppercase"
            style={{
              fontFamily: "'Roboto Variable', 'Roboto', sans-serif",
              letterSpacing: '0.08em',
              color: textColor,
              fontSize: `${iconSize * 0.9}px`,
              lineHeight: 1,
            }}
          >
            CHILLAM
          </span>
          {/* Lowercase rounded dotted 'i' as per Chillami brand identity */}
          <span
            className="font-bold relative"
            style={{
              fontFamily: "'Roboto Variable', 'Roboto', sans-serif",
              color: textColor,
              fontSize: `${iconSize * 0.9}px`,
              lineHeight: 1,
              marginLeft: '1px',
            }}
          >
            i
          </span>
        </div>
      </div>
    );
  }

  // Horizontal layout for header/nav
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div className="shrink-0 flex items-center justify-center">
        <SnowflakeIcon size={iconSize} color={color} />
      </div>
      <div className="flex items-baseline">
        <span
          className="font-extrabold uppercase transition-colors"
          style={{
            fontFamily: "'Roboto Variable', 'Roboto', sans-serif",
            letterSpacing: '0.06em',
            color: textColor,
            fontSize: `${iconSize * 0.72}px`,
            lineHeight: 1,
          }}
        >
          CHILLAM
        </span>
        <span
          className="font-extrabold relative transition-colors"
          style={{
            fontFamily: "'Roboto Variable', 'Roboto', sans-serif",
            color: textColor,
            fontSize: `${iconSize * 0.72}px`,
            lineHeight: 1,
            marginLeft: '1px',
          }}
        >
          i
        </span>
      </div>
    </div>
  );
};
