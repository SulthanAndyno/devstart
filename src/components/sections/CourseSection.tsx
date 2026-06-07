'use client';

import { BookOpen, Code2, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { COURSE_INFO, STATS } from '@/lib/constants';
import { useEffect, useRef } from 'react';

export default function CourseSection() {
  const containerRef = useScrollReveal();
  const countersRef = useRef<HTMLDivElement>(null);
  const hasCountered = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !countersRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCountered.current) {
            hasCountered.current = true;
            import('animejs').then(({ animate }) => {
              const counters = countersRef.current?.querySelectorAll('.stat-value');
              counters?.forEach((el) => {
                const target = parseInt(el.getAttribute('data-value') || '0', 10);
                const obj = { val: 0 };
                animate(obj, {
                  val: target,
                  duration: 1800,
                  ease: 'outExpo',
                  onUpdate: () => {
                    el.textContent = Math.round(obj.val).toString();
                  },
                });
              });
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(countersRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tentang-kelas" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Program Kelas"
          title="Satu Kelas, Satu Perjalanan Lengkap."
          description="Hanya ada satu program utama yang dirancang untuk membawa kamu dari nol hingga berhasil mempublikasikan website pertama."
        />

        {/* Course card */}
        <div data-reveal className="max-w-4xl mx-auto glass-card p-8 md:p-10 mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left info */}
            <div className="flex-1 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cerulean to-pacific flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yale-dark">{COURSE_INFO.name}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      {COURSE_INFO.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-cerulean/5 text-cerulean border border-cerulean/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-slate-500 text-xs uppercase tracking-wider">Level</p>
                  <p className="text-slate-800 font-medium text-sm">{COURSE_INFO.level}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-500 text-xs uppercase tracking-wider">Metode</p>
                  <p className="text-slate-800 font-medium text-sm">{COURSE_INFO.method}</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-slate-500 text-xs uppercase tracking-wider">Output Akhir</p>
                <p className="text-cerulean font-medium text-sm flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  {COURSE_INFO.output}
                </p>
              </div>

              <a
                href="#pendaftaran"
                className="btn-primary !text-sm group inline-flex"
              >
                Daftar Sekarang
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right features */}
            <div className="flex-1">
              <h4 className="text-yale-dark font-bold text-sm mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cerulean" />
                Yang Akan Kamu Dapatkan
              </h4>
              <ul className="space-y-3">
                {COURSE_INFO.features.map((feat, i) => (
                  <li
                    key={i}
                    data-reveal
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cerulean shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={countersRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card p-5 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-yale-dark mb-1">
                <span className="stat-value" data-value={stat.value}>
                  0
                </span>
                <span className="text-cerulean">{stat.suffix}</span>
              </div>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
