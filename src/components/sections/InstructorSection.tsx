'use client';

import { Code2, ExternalLink, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { INSTRUCTOR } from '@/lib/constants';

export default function InstructorSection() {
  const containerRef = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Mentor"
          title="Belajar Langsung Bersama Mentor"
        />

        <div data-reveal className="max-w-3xl mx-auto glass-card p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Avatar placeholder */}
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-cerulean to-pacific flex items-center justify-center shrink-0">
              <span className="text-4xl font-bold text-white font-mono">&lt;/&gt;</span>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-yale-dark mb-1">
                {INSTRUCTOR.name}
              </h3>
              <p className="text-cerulean text-sm font-medium mb-4">
                {INSTRUCTOR.position}
              </p>

              <div className="space-y-3 mb-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {INSTRUCTOR.experience}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {INSTRUCTOR.focus}
                </p>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <a
                  href={INSTRUCTOR.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-cerulean hover:border-cerulean/30 transition-all"
                  aria-label="GitHub"
                >
                  <Code2 className="w-4 h-4" />
                </a>
                <a
                  href={INSTRUCTOR.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-cerulean hover:border-cerulean/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div data-reveal className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-cerulean/40 shrink-0 mt-0.5" />
              <p className="text-slate-500 text-sm leading-relaxed italic">
                Belajar langsung bersama mentor yang akan membimbing dari
                penulisan baris kode pertama sampai website berhasil online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
