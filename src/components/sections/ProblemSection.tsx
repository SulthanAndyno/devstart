'use client';

import {
  HelpCircle,
  Layers,
  Puzzle,
  Globe,
  FolderOpen,
  ArrowRight,
  LifeBuoy,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PROBLEMS } from '@/lib/constants';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  HelpCircle,
  Layers,
  PuzzleIcon: Puzzle,
  Globe,
  FolderOpen,
  LifeBuoy,
};

export default function ProblemSection() {
  const containerRef = useScrollReveal();

  return (
    <section id="masalah" className="section-alt section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div ref={containerRef} className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Kenapa DevStart?"
          title="Belajar Coding Sering Terasa Membingungkan?"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
          {PROBLEMS.map((problem, i) => {
            const Icon = ICON_MAP[problem.icon];
            return (
              <div
                key={i}
                data-reveal
                className="glass-card glass-card-hover p-6 group"
              >
                <div className="w-11 h-11 rounded-xl bg-cerulean/5 border border-cerulean/10 flex items-center justify-center mb-4 group-hover:border-cerulean/30 transition-colors">
                  {Icon && (
                    <Icon className="w-5 h-5 text-cerulean group-hover:scale-110 transition-transform" />
                  )}
                </div>
                <h3 className="text-yale-dark font-bold text-base mb-2">
                  {problem.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Solution */}
        <div data-reveal className="glass-card p-8 md:p-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cerulean/10 text-cerulean text-xs font-semibold mb-4">
            <ArrowRight className="w-3 h-3" />
            SOLUSI
          </div>
          <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
            Kursus Website Zero to Hero memberikan jalur belajar yang terstruktur, mulai
            dari mengenal HTML sampai website berhasil dipublikasikan.
          </p>
        </div>
      </div>
    </section>
  );
}
