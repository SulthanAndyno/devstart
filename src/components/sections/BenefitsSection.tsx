'use client';

import {
  BookOpen, Heart, FolderGit2, FileCode, Video,
  MessageSquare, Users, Rocket,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BENEFITS } from '@/lib/constants';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, Heart, FolderGit2, FileCode, Video,
  MessageSquare, Users, Rocket,
};

export default function BenefitsSection() {
  const containerRef = useScrollReveal({ staggerDelay: 70 });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Keunggulan"
          title="Bukan Sekadar Menonton Tutorial."
          description="Kamu akan mengikuti alur belajar, mengerjakan latihan, membangun project, dan membawa hasil belajarmu menjadi website nyata."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {BENEFITS.map((benefit, i) => {
            const Icon = ICON_MAP[benefit.icon];
            return (
              <div
                key={i}
                data-reveal
                className="glass-card glass-card-hover p-6 group text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-cerulean/5 border border-cerulean/10 flex items-center justify-center mx-auto mb-4 group-hover:border-cerulean/30 transition-colors">
                  {Icon && (
                    <Icon className="w-5 h-5 text-cerulean group-hover:scale-110 transition-transform" />
                  )}
                </div>
                <h3 className="text-yale-dark font-bold text-sm mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
