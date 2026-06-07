'use client';

import {
  GraduationCap, BookOpen, Lightbulb, Laptop,
  Store, UserCircle, Info,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TARGET_STUDENTS } from '@/lib/constants';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap, BookOpen, Lightbulb, Laptop, Store, UserCircle,
};

export default function TargetStudentSection() {
  const containerRef = useScrollReveal({ staggerDelay: 80 });

  return (
    <section className="section-alt section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Untuk Siapa"
          title="Siapa yang Cocok Mengikuti Kelas?"
          description="Kelas ini dirancang untuk siapa saja yang ingin belajar membuat website dari nol."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
          {TARGET_STUDENTS.map((target, i) => {
            const Icon = ICON_MAP[target.icon];
            return (
              <div
                key={i}
                data-reveal
                className="glass-card glass-card-hover p-6 group flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-cerulean/5 border border-cerulean/10 flex items-center justify-center shrink-0 group-hover:border-cerulean/30 transition-colors">
                  {Icon && (
                    <Icon className="w-5 h-5 text-cerulean group-hover:scale-110 transition-transform" />
                  )}
                </div>
                <div>
                  <h3 className="text-yale-dark font-bold text-sm mb-1">
                    {target.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {target.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* No experience required */}
        <div data-reveal className="flex items-center justify-center gap-3 glass-card p-5 max-w-md mx-auto text-center">
          <Info className="w-5 h-5 text-cerulean shrink-0" />
          <p className="text-slate-800 text-sm font-medium">
            Tidak membutuhkan pengalaman coding sebelumnya.
          </p>
        </div>
      </div>
    </section>
  );
}
