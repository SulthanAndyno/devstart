'use client';

import { useEffect, useRef } from 'react';
import {
  FileCode2,
  Palette,
  Braces,
  Hammer,
  Rocket,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { LEARNING_JOURNEY } from '@/lib/constants';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  FileCode2,
  Palette,
  Braces,
  Hammer,
  Rocket,
};

export default function LearningPathSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleScroll = () => {
      if (!timelineRef.current || !progressRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineTop = rect.top;
      const timelineHeight = rect.height;

      let progress = 0;
      if (timelineTop < windowHeight * 0.5) {
        progress = Math.min(
          1,
          (windowHeight * 0.5 - timelineTop) / timelineHeight
        );
      }
      progressRef.current.style.height = `${progress * 100}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* reveal cards on scroll */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const cards = timelineRef.current?.querySelectorAll('.journey-card');
    if (!cards) return;

    cards.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(30px)';
      htmlEl.style.transition = `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-alt section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Learning Journey"
          title="Alur Belajar yang Terstruktur"
          description="Lima tahap yang dirancang untuk membawa kamu dari pemula hingga berhasil mempublikasikan website."
        />

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-cerulean/10">
            <div
              ref={progressRef}
              className="w-full bg-gradient-to-b from-cerulean to-pacific transition-[height] duration-100"
              style={{ height: '0%' }}
            />
          </div>

          {LEARNING_JOURNEY.map((stage, i) => {
            const Icon = ICON_MAP[stage.icon];
            const isLeft = i % 2 === 0;

            return (
              <div
                key={stage.phase}
                className={`journey-card relative flex items-start gap-6 mb-12 md:mb-16 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-cerulean border-2 border-white z-10 mt-6" />

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2">
                  <div className={`glass-card p-6 md:p-7 ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cerulean/5 border border-cerulean/10 flex items-center justify-center">
                        {Icon && <Icon className="w-5 h-5 text-cerulean" />}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cerulean uppercase tracking-wider">
                          Tahap {stage.phase}
                        </span>
                        <h3 className="text-yale-dark font-bold text-base">
                          {stage.title}
                        </h3>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {stage.topics.map((topic, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cerulean/30 shrink-0 mt-1.5" />
                          {topic}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-start gap-2 pt-3 border-t border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-cerulean shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-yale">
                        {stage.output}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
