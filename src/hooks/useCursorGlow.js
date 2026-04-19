// src/hooks/useCursorGlow.js
import { useEffect } from 'react';

export const useCursorGlow = () => {
  useEffect(() => {
    const glow = document.querySelector('.cursor-glow');
    if (!glow || window.innerWidth < 1024) return;

    const handleMouseMove = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
};