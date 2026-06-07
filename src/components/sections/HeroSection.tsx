'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Users, FolderGit2, Video, Briefcase } from 'lucide-react';
import { HERO_BADGES } from '@/lib/constants';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  FolderGit2,
  Video,
  Briefcase,
};

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // Show all immediately
      const els = heroRef.current?.querySelectorAll('[data-hero-anim]');
      els?.forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
      return;
    }

    import('animejs')
      .then((module) => {
        const { animate, stagger, createTimeline } = module;
        // Run animation after a slight frame render delay to ensure elements are hydrated
        requestAnimationFrame(() => {
          setTimeout(() => {
            try {
              const tl = createTimeline({
                defaults: { ease: 'outExpo', duration: 900 },
              });

              tl.add('.hero-badge-container', {
                opacity: [0, 1],
                translateY: [20, 0],
              })
                .add('.hero-headline .word', {
                  opacity: [0, 1],
                  translateY: [30, 0],
                  delay: stagger(60),
                }, '-=600')
                .add('.hero-description', {
                  opacity: [0, 1],
                  translateY: [20, 0],
                }, '-=500')
                .add('.hero-cta', {
                  opacity: [0, 1],
                  translateY: [20, 0],
                  delay: stagger(100),
                }, '-=400')
                .add('.hero-badges .badge', {
                  opacity: [0, 1],
                  translateY: [15, 0],
                  scale: [0.9, 1],
                  delay: stagger(80),
                }, '-=300')
                .add('.hero-visual', {
                  opacity: [0, 1],
                  translateX: [60, 0],
                  rotate: [3, 0],
                  duration: 1100,
                }, '-=800');
            } catch (err) {
              console.error("Anime.js animation error:", err);
            }
          }, 100);
        });
      })
      .catch((err) => {
        console.error("Anime.js module load error:", err);
      });
  }, []);

  const headline = 'Mulai dari Nol, Bangun Website Pertamamu Sampai Online.';
  const words = headline.split(' ');

  return (
    <section
      ref={heroRef}
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden grid-pattern bg-charcoal"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-pacific/10 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-pacific/5 blur-[100px]" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 md:pt-28 md:pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="hero-badge-container" data-hero-anim>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-pacific animate-pulse" />
                Pendaftaran Batch Baru Dibuka
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15]">
              {words.map((w, i) => {
                const isHighlight = i === 2 || i === 4 || i === 5 || i === 7;
                return (
                  <span
                    key={i}
                    className={`word inline-block mr-[0.3em] ${
                      isHighlight ? 'text-pacific' : 'text-white'
                    }`}
                    data-hero-anim
                  >
                    {w}
                  </span>
                );
              })}
            </h1>

            {/* Description */}
            <p
              className="hero-description text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl"
              data-hero-anim
            >
              Pelajari HTML, CSS, dan JavaScript melalui project nyata. Cocok
              untuk pemula yang ingin memiliki website portfolio dan memahami
              proses pengembangan web dari awal hingga publish.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pendaftaran"
                className="hero-cta btn-primary group text-center justify-center"
                data-hero-anim
              >
                Daftar Website Zero to Hero
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#hasil-karya"
                className="hero-cta btn-secondary !border-white/25 !text-white hover:!bg-white/5 group text-center justify-center"
                data-hero-anim
              >
                <Play className="w-4 h-4" />
                Lihat Hasil Kelas
              </a>
            </div>

            {/* Info badges */}
            <div className="hero-badges flex flex-wrap gap-3 pt-2">
              {HERO_BADGES.map((badge) => {
                const Icon = ICON_MAP[badge.icon];
                return (
                  <div
                    key={badge.label}
                    className="badge flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-300"
                    data-hero-anim
                  >
                    {Icon && <Icon className="w-4 h-4 text-pacific" />}
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right visual - browser mockup */}
          <div className="hero-visual" data-hero-anim>
            <div className="browser-mockup !bg-[#1e1e1e] !border-[#2d2d2d] shadow-2xl shadow-black/50 glow-pulse">
              <div className="browser-toolbar !bg-[#252526] !border-b-[#1e1e1e]">
                <div className="browser-dot browser-dot-red" />
                <div className="browser-dot browser-dot-yellow" />
                <div className="browser-dot browser-dot-green" />
                <div className="browser-url !bg-[#2d2d2d] !border-[#3e3e3e] !text-[#cccccc]">
                  devstart.id/portfolio
                </div>
              </div>

              {/* Code tabs */}
              <div className="flex bg-[#2d2d2d] border-b border-[#1e1e1e]">
                <div className="px-4 py-2 text-xs font-mono text-white bg-[#1e1e1e] border-t-2 border-[#ffcc31]">
                  index.html
                </div>
                <div className="px-4 py-2 text-xs font-mono text-[#858585]">
                  style.css
                </div>
                <div className="px-4 py-2 text-xs font-mono text-[#858585]">
                  script.js
                </div>
              </div>

              {/* Code content */}
              <div className="p-4 md:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-hidden bg-[#1e1e1e]">
                <div className="space-y-1">
                  <p>
                    <span className="text-[#6a9955]">{'<!-- Portfolio Website -->'}</span>
                  </p>
                  <p>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#569cd6]">section</span>{' '}
                    <span className="text-[#9cdcfe]">class</span>=
                    <span className="text-[#ce9178]">&quot;hero&quot;</span>
                    <span className="text-[#808080]">&gt;</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#569cd6]">h1</span>
                    <span className="text-[#808080]">&gt;</span>
                    <span className="text-[#d4d4d4] font-medium">Halo, Saya Developer!</span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#569cd6]">h1</span>
                    <span className="text-[#808080]">&gt;</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#569cd6]">p</span>
                    <span className="text-[#808080]">&gt;</span>
                    <span className="text-[#d4d4d4]">Welcome to my portfolio.</span>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#569cd6]">p</span>
                    <span className="text-[#808080]">&gt;</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#569cd6]">button</span>{' '}
                    <span className="text-[#9cdcfe]">onclick</span>=
                    <span className="text-[#ce9178]">&quot;contact()&quot;</span>
                    <span className="text-[#808080]">&gt;</span>
                  </p>
                  <p className="pl-8">
                    <span className="text-[#d4d4d4]">Hubungi Saya</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#569cd6]">button</span>
                    <span className="text-[#808080]">&gt;</span>
                  </p>
                  <p>
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#569cd6]">section</span>
                    <span className="text-[#808080]">&gt;</span>
                  </p>
                </div>

                {/* Deploy status */}
                <div className="mt-6 pt-4 border-t border-[#2d2d2d] bg-[#1e1e1e]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[#4ec9b0] text-xs font-semibold">Deploy berhasil</span>
                    <span className="text-[#858585] text-xs ml-auto">portfolio.vercel.app</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
