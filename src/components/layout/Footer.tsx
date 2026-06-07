'use client';

import { Code2, Globe, MessageCircle, ArrowUp } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cerulean to-pacific flex items-center justify-center">
                <span className="text-white font-bold text-sm font-mono">&lt;/&gt;</span>
              </div>
              <span className="text-lg font-bold text-yale-dark">
                Start<span className="text-cerulean">Dev</span>
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-6">
              Kursus pemula untuk belajar membuat website menggunakan HTML, CSS,
              dan JavaScript. Mulai dari nol hingga website pertamamu online.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-cerulean hover:border-cerulean/30 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-cerulean hover:border-cerulean/30 transition-all"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-cerulean hover:border-cerulean/30 transition-all"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-yale-dark font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-cerulean transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#pendaftaran"
                  className="text-slate-500 text-sm hover:text-cerulean transition-colors"
                >
                  Pendaftaran
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-yale-dark font-semibold text-sm mb-4 uppercase tracking-wider">
              Kontak
            </h3>
            <ul className="space-y-2.5">
              <li className="text-slate-500 text-sm">
                WhatsApp: +62 812 3456 7890
              </li>
              <li className="text-slate-500 text-sm">
                Email: hello@startdev.id
              </li>
              <li className="text-slate-500 text-sm">
                Instagram: @startdev.id
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 StartDev. Belajar, Membangun, dan Publish.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-cerulean hover:border-cerulean/30 transition-all"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
