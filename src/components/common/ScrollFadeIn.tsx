import React, { useEffect, useRef, useState } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number; // distance in px, default 24
  duration?: number; // duration in ms, default 650
  delay?: number; // delay in ms, default 0
  threshold?: number; // 0 to 1, default 0.12
  once?: boolean; // trigger only once, default true
}

export const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  className = '',
  direction = 'up',
  distance = 24,
  duration = 650,
  delay = 0,
  threshold = 0.12,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold, once]);

  // Compute transform based on direction
  let initialTransform = 'none';
  if (direction === 'up') initialTransform = `translate3d(0, ${distance}px, 0)`;
  else if (direction === 'down') initialTransform = `translate3d(0, -${distance}px, 0)`;
  else if (direction === 'left') initialTransform = `translate3d(${distance}px, 0, 0)`;
  else if (direction === 'right') initialTransform = `translate3d(-${distance}px, 0, 0)`;

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : initialTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
