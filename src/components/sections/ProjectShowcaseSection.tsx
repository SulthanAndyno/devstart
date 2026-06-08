'use client';

import { CheckCircle2, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PROJECT_SHOWCASES, OUTPUT_CHECKLIST } from '@/lib/constants';

export default function ProjectShowcaseSection() {
  const containerRef = useScrollReveal();

  return (
    <section id="hasil-karya" className="section-alt section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div ref={containerRef} className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center mb-12 md:mb-16">
          <div className="max-w-2xl space-y-4">
            <span
              data-reveal
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-cerulean/20 bg-cerulean/5 text-yale"
            >
              Hasil Karya Peserta
            </span>
            <h2
              data-reveal
              className="text-3xl sm:text-4xl font-bold leading-tight gradient-text"
            >
              Website Keren, Buatan Tangan Sendiri.
            </h2>
            <p data-reveal className="text-slate-600 text-base leading-relaxed">
              Di akhir kelas, setiap peserta menyelesaikan project website
              lengkap yang dapat digunakan sebagai portfolio, tugas kuliah,
              personal branding, atau dasar membuka jasa freelance.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 shrink-0 bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-slate-200/50 shadow-sm max-w-lg w-full lg:w-auto">
            {OUTPUT_CHECKLIST.map((item, i) => (
              <li
                key={i}
                data-reveal
                className="flex items-center gap-3 text-sm text-slate-600 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-cerulean shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Grid – showcases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECT_SHOWCASES.map((project) => (
            <div key={project.id} data-reveal className="group">
              <div className="browser-mockup !bg-[#1e1e1e] !border-[#2d2d2d] overflow-hidden glass-card-hover">
                <div className="browser-toolbar !bg-[#252526] !border-b-[#1e1e1e]">
                  <div className="browser-dot browser-dot-red" />
                  <div className="browser-dot browser-dot-yellow" />
                  <div className="browser-dot browser-dot-green" />
                  <div className="browser-url !bg-[#2d2d2d] !border-[#3e3e3e] !text-[#cccccc]">
                    {project.title.toLowerCase().replace(/\s/g, '-')}
                  </div>
                </div>

                {/* Website preview mockup */}
                <div
                  className="relative h-48 md:h-56 overflow-hidden"
                  style={{ background: project.image ? undefined : project.gradient }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Faux website content */
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      {/* Nav */}
                      <div className="flex items-center justify-between">
                        <div className="w-16 h-2 rounded-full bg-white/20" />
                        <div className="flex gap-3">
                          <div className="w-8 h-1.5 rounded-full bg-white/15" />
                          <div className="w-8 h-1.5 rounded-full bg-white/15" />
                          <div className="w-8 h-1.5 rounded-full bg-white/15" />
                        </div>
                      </div>

                      {/* Hero content */}
                      <div className="space-y-3">
                        <div className="w-3/4 h-3 rounded-full bg-white/25" />
                        <div className="w-1/2 h-3 rounded-full bg-white/15" />
                        <div className="w-2/3 h-2 rounded-full bg-white/10" />
                        <div className="flex gap-3 mt-4">
                          <div className="w-20 h-6 rounded-lg bg-white/20" />
                          <div className="w-20 h-6 rounded-lg bg-white/10" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <p className="text-white font-bold text-lg">{project.title}</p>
                      <p className="text-slate-300 text-sm">{project.type}</p>
                      <div className="flex items-center justify-center gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-sky hover:text-white transition-colors mt-2"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Lihat Preview
                        </a>
                      ) : (
                        <button className="inline-flex items-center gap-2 text-sm text-sky hover:text-white transition-colors mt-2">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Lihat Preview
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project info below mockup */}
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h3 className="text-yale-dark font-bold text-sm">
                    Project {String(project.id).padStart(2, '0')} — {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
