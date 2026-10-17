import React from 'react';
import { SnowflakeIcon } from './Logo';
import { useLanguage } from '../../context/LanguageContext';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  fullScreen = false,
  message,
  size = 'md',
  className = '',
}) => {
  const { l } = useLanguage();
  const text = message ?? l('Đang tải dữ liệu thiết bị Chillami...', 'Loading Chillami appliance data...');
  const iconSizes = {
    sm: 24,
    md: 40,
    lg: 56,
  };

  const spinnerContent = (
    <div className={`flex flex-col items-center justify-center gap-3 p-4 select-none ${className}`}>
      {/* Animated Ring with Snowflake Center */}
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsing aura */}
        <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-md animate-pulse" />

        {/* Circular rotating border ring */}
        <div
          className={`rounded-full border-2 border-teal-100 border-t-teal-700 animate-spin ${
            size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-20 h-20' : 'w-16 h-16'
          }`}
          style={{ animationDuration: '0.85s' }}
        />

        {/* Centered Chillami Snowflake */}
        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
          <SnowflakeIcon size={iconSizes[size]} color="#00828a" />
        </div>
      </div>

      {/* Message Label */}
      {text && (
        <div className="flex flex-col items-center text-center mt-1">
          <span className="text-xs font-semibold text-slate-700 tracking-wide">
            {text}
          </span>
          <span className="text-[10px] text-teal-700 font-medium mt-0.5 animate-pulse">
            {l('Công nghệ siêu êm & tiết kiệm năng lượng', 'Ultra-quiet & energy-saving technology')}
          </span>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 z-50 bg-white/85 backdrop-blur-xs flex items-center justify-center animate-in fade-in duration-200"
        aria-live="polite"
        role="status"
      >
        <div className="bg-white/95 rounded-3xl p-8 shadow-2xl border border-slate-100/90 flex flex-col items-center max-w-xs mx-auto">
          {spinnerContent}
        </div>
      </div>
    );
  }

  return spinnerContent;
};
