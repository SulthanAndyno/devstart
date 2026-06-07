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
  title: 'DevStart — Belajar Membuat Website dari Nol Sampai Online',
  description:
    'Kursus pemula untuk belajar membuat website menggunakan HTML, CSS, dan JavaScript. Mulai dari nol hingga website pertamamu online. Project-based learning dengan live mentoring.',
  keywords: [
    'belajar web development',
    'kursus coding pemula',
    'belajar HTML CSS JavaScript',
    'membuat website dari nol',
    'kelas web development Indonesia',
    'DevStart',
    'cara membuat website',
    'kursus web developer jakarta',
    'coding online indonesia'
  ],
  alternates: {
    canonical: 'https://devstart.id',
  },
  openGraph: {
    title: 'DevStart — Belajar Membuat Website dari Nol Sampai Online',
    description:
      'Pelajari HTML, CSS, dan JavaScript melalui project nyata. Cocok untuk pemula yang ingin memiliki website portfolio.',
    type: 'website',
    locale: 'id_ID',
    url: 'https://devstart.id',
    siteName: 'DevStart',
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
              "name": "DevStart — Belajar Membuat Website dari Nol Sampai Online",
              "description": "Kursus pemula untuk belajar membuat website menggunakan HTML, CSS, dan JavaScript. Mulai dari nol hingga website pertamamu online.",
              "provider": {
                "@type": "Organization",
                "name": "DevStart",
                "sameAs": "https://devstart.id"
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
