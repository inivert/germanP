'use client';

import { useEffect } from 'react';

export default function ScrollEffect() {
  useEffect(() => {
    const updateScroll = () => {
      const scrolled = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(scrolled / vh, 1);
      
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--scroll-progress', progress.toString());
      });
    };

    window.addEventListener('scroll', updateScroll);
    updateScroll();

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return null;
}
