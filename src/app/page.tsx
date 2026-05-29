'use client';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { HowToOrder } from '../components/HowToOrder';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <HowToOrder />
      </main>
      <Footer />
    </div>
  );
}
