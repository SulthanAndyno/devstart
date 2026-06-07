'use client';

import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FinalCTASection() {
  const containerRef = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-cerulean/10 blur-[120px]" />

      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="max-w-3xl mx-auto bg-charcoal border border-white/10 rounded-2xl p-10 md:p-14 text-center shadow-2xl shadow-slate-950/20">
          <h2
            data-reveal
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white mb-4"
          >
            <span className="text-pacific">Website Pertamamu</span> Bisa Dimulai Hari Ini.
          </h2>
          <p
            data-reveal
            className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8"
          >
            Jangan hanya menyimpan ide. Pelajari cara membangunnya menjadi
            website nyata bersama StartDev.
          </p>

          <a
            href="#pendaftaran"
            data-reveal
            className="btn-primary group inline-flex"
          >
            Mulai Perjalanan Coding
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <p data-reveal className="mt-6 text-zinc-500 text-sm">
            Kuota kelas terbatas untuk menjaga kualitas mentoring.
          </p>
        </div>
      </div>
    </section>
  );
}
