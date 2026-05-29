import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'The Best Burger — Sabor de la Abuela en Playa Ancha',
  description: 'Exquisitas mechadas premium desmechadas a mano, hamburguesas artesanales gigantes y papas rústicas crujientes. Receta de la abuela y sabor inigualable en Playa Ancha, Valparaíso. Haz tu pedido directo por WhatsApp.',
  icons: {
    icon: '/brand/icono.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-amber-500/20 selection:text-amber-300">
        {children}
      </body>
    </html>
  );
}
