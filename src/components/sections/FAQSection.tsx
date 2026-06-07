'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FAQ_DATA } from '@/lib/constants';

export default function FAQSection() {
  const containerRef = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="section-alt section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          description="Temukan jawaban untuk pertanyaan umum tentang kelas dan pendaftaran."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_DATA.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                data-reveal
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-yale-dark font-bold text-sm pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-cerulean shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className="accordion-content"
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
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
