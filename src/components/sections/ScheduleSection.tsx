'use client';

import {
  Clock, Users, Signal, Monitor, CheckCircle2,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SCHEDULE, FACILITIES } from '@/lib/constants';

export default function ScheduleSection() {
  const containerRef = useScrollReveal();

  const scheduleItems = [
    { icon: Clock, label: 'Durasi', value: SCHEDULE.duration },
    { icon: Signal, label: 'Level', value: SCHEDULE.level },
    { icon: Monitor, label: 'Metode', value: SCHEDULE.method },
    { icon: Users, label: 'Kapasitas', value: SCHEDULE.capacity },
  ];

  return (
    <section className="section-alt section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Jadwal & Fasilitas"
          title="Informasi Kelas"
          description="Semua yang kamu butuhkan untuk memulai perjalanan belajar web development."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Schedule card */}
          <div data-reveal className="glass-card p-6 md:p-8">
            <h3 className="text-yale-dark font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cerulean" />
              {SCHEDULE.course}
            </h3>

            <div className="space-y-4">
              {scheduleItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-cerulean" />
                      <span className="text-slate-500 text-sm">{item.label}</span>
                    </div>
                    <span className="text-slate-800 font-bold text-sm">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Facilities card */}
          <div data-reveal className="glass-card p-6 md:p-8">
            <h3 className="text-yale-dark font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cerulean" />
              Fasilitas
            </h3>

            <ul className="space-y-3">
              {FACILITIES.map((facility, i) => (
                <li
                  key={i}
                  data-reveal
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <CheckCircle2 className="w-4 h-4 text-cerulean shrink-0" />
                  {facility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
