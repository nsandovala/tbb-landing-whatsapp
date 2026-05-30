import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thebestburger.cl'),
  title: {
    default: 'The Best Burger | Mechadas y Burgers en Playa Ancha',
    template: '%s | The Best Burger',
  },
  description:
    'Sándwiches de mechada, burgers artesanales, combos y promos legendarias en Playa Ancha. Pide por WhatsApp con entrega rápida o retiro.',
  keywords: [
    'The Best Burger',
    'hamburguesas Playa Ancha',
    'mechadas Playa Ancha',
    'delivery Playa Ancha',
    'comida casera Valparaíso',
    'promos hamburguesas Valparaíso',
  ],
  alternates: {
    canonical: '/',
  },
  category: 'restaurant',
  applicationName: 'The Best Burger',
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    title: 'The Best Burger | Mechadas y Burgers en Playa Ancha',
    description:
      'Sándwiches de mechada, burgers artesanales, combos y promos legendarias en Playa Ancha.',
    url: 'https://thebestburger.cl',
    type: 'website',
    locale: 'es_CL',
    siteName: 'The Best Burger',
    images: [
      {
        url: '/brand/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo de The Best Burger',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Best Burger | Mechadas y Burgers en Playa Ancha',
    description:
      'Pide por WhatsApp nuestras mechadas, burgers y megapromos artesanales en Playa Ancha.',
    images: ['/brand/logo.png'],
  },
  icons: {
    icon: '/brand/icono.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0b0c',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-amber-500/20 selection:text-amber-300">
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
