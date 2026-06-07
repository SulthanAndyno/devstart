'use client';

import {
  Code2, FileCode, Paintbrush, LayoutList, LayoutGrid,
  Smartphone, Braces, MousePointerClick, ShieldCheck,
  GitBranch, Rocket, Briefcase,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CURRICULUM } from '@/lib/constants';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, FileCode, Paintbrush, LayoutList, LayoutGrid,
  Smartphone, Braces, MousePointerClick, ShieldCheck,
  GitBranch, Rocket, Briefcase,
};

export default function CurriculumSection() {
  const containerRef = useScrollReveal({ staggerDelay: 60 });

  return (
    <section id="materi" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Kurikulum"
          title="Materi yang Akan Dipelajari"
          description="12 modul yang disusun secara progresif untuk membangun pemahaman dan kemampuan dari dasar."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {CURRICULUM.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.module}
                data-reveal
                className="glass-card glass-card-hover p-5 group relative overflow-hidden"
              >
                {/* Module number */}
                <span className="absolute top-3 right-3 text-xs font-mono text-slate-300 group-hover:text-slate-400 transition-colors">
                  {String(item.module).padStart(2, '0')}
                </span>

                <div className="w-10 h-10 rounded-xl bg-cerulean/5 border border-cerulean/10 flex items-center justify-center mb-3 group-hover:border-cerulean/30 transition-all">
                  {Icon && (
                    <Icon className="w-5 h-5 text-cerulean group-hover:scale-110 transition-transform" />
                  )}
                </div>

                <h3 className="text-yale-dark font-bold text-sm mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.description}
                </p>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cerulean/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
