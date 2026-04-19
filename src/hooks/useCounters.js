// src/hooks/useCounters.js
import { useEffect } from 'react';

export const useCounters = () => {
  useEffect(() => {
    const animateCounter = (el, target, duration = 1800, suffix = '') => {
      let start = 0;
      const startTime = performance.now();

      const update = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const isFloat = target % 1 !== 0;
        const current = isFloat
          ? (start + (target - start) * eased).toFixed(1)
          : Math.floor(start + (target - start) * eased);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseFloat(el.dataset.count);
            const suffix = el.dataset.suffix || '';
            animateCounter(el, target, 1800, suffix);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('[data-count]');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
};