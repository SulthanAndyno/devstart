import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'StartDev — Belajar Membuat Website dari Nol Sampai Online',
  description:
    'Kursus pemula untuk belajar membuat website menggunakan HTML, CSS, dan JavaScript. Mulai dari nol hingga website pertamamu online. Project-based learning dengan live mentoring.',
  keywords: [
    'belajar web development',
    'kursus coding pemula',
    'belajar HTML CSS JavaScript',
    'membuat website dari nol',
    'kelas web development Indonesia',
    'StartDev',
    'cara membuat website',
    'kursus web developer jakarta',
    'coding online indonesia'
  ],
  alternates: {
    canonical: 'https://startdev.id',
  },
  openGraph: {
    title: 'StartDev — Belajar Membuat Website dari Nol Sampai Online',
    description:
      'Pelajari HTML, CSS, dan JavaScript melalui project nyata. Cocok untuk pemula yang ingin memiliki website portfolio.',
    type: 'website',
    locale: 'id_ID',
    url: 'https://startdev.id',
    siteName: 'StartDev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "StartDev — Belajar Membuat Website dari Nol Sampai Online",
              "description": "Kursus pemula untuk belajar membuat website menggunakan HTML, CSS, dan JavaScript. Mulai dari nol hingga website pertamamu online.",
              "provider": {
                "@type": "Organization",
                "name": "StartDev",
                "sameAs": "https://startdev.id"
              },
              "offers": {
                "@type": "Offer",
                "category": "Paid",
                "price": "149000",
                "priceCurrency": "IDR",
                "availability": "https://schema.org/InStock",
                "validFrom": "2026-06-07"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
