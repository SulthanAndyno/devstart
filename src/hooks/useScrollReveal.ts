'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations using Intersection Observer.
 * Returns a ref to attach to the container element.
 * Children with `data-reveal` will be animated on scroll.
 */
export function useScrollReveal(options?: {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
      }
    });
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('[data-reveal]');
    const stagger = options?.staggerDelay ?? 80;

    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px) scale(0.98)';
      htmlEl.style.transition = `opacity 0.6s ease ${i * stagger}ms, transform 0.6s ease ${i * stagger}ms`;
    });

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: options?.threshold ?? 0.1,
      rootMargin: options?.rootMargin ?? '0px 0px -60px 0px',
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [handleIntersection, options?.threshold, options?.rootMargin, options?.staggerDelay]);

  return containerRef;
}
