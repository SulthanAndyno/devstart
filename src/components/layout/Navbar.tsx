'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* active section observer */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -75% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm shadow-slate-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[4.5rem]">
        {/* Logo */}
        <a
          href="#beranda"
          onClick={(e) => { e.preventDefault(); scrollToSection('#beranda'); }}
          className={`flex items-center gap-2 transition-all duration-500 ${
            scrolled ? 'scale-95' : 'scale-100'
          }`}
        >
          <img
            src="/logo.png"
            alt="DevStart Logo"
            className="w-8 h-8 object-contain rounded-lg"
          />
          <span className={`text-lg font-bold transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Dev<span className="text-pacific">Start</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? scrolled
                        ? 'text-slate-900 bg-slate-100'
                        : 'text-white bg-white/10'
                      : scrolled
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#pendaftaran"
            onClick={(e) => { e.preventDefault(); scrollToSection('#pendaftaran'); }}
            className={`hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-sm group ${
              scrolled
                ? ''
                : '!bg-white !text-slate-900 hover:!bg-white/90'
            }`}
          >
            Daftar Kelas
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-zinc-300 hover:bg-white/10'
            }`}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* panel */}
        <div
          className={`relative bg-white border-b border-slate-200 px-6 py-6 shadow-xl transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-yale bg-yale/5'
                        : 'text-slate-600 hover:text-yale hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#pendaftaran"
            onClick={(e) => { e.preventDefault(); scrollToSection('#pendaftaran'); }}
            className="mt-4 w-full btn-primary justify-center"
          >
            Daftar Kelas
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
