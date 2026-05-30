import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { PromoHighlight } from '../components/PromoHighlight';
import { MegaPromosSection } from '../components/MegaPromosSection';
import { MenuSection } from '../components/MenuSection';
import { MenuDownloadSection } from '../components/MenuDownloadSection';
import { HowToOrder } from '../components/HowToOrder';
import { Footer } from '../components/Footer';
import { MENU_DATA } from '../data/menu';

const starPromo = MENU_DATA.find((item) => item.id === 'promo-2x-mechada');

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'The Best Burger',
  url: 'https://thebestburger.cl',
  image: 'https://thebestburger.cl/brand/logo.png',
  telephone: '+56942691515',
  servesCuisine: ['Burgers', 'Sándwiches', 'Comida rápida artesanal'],
  areaServed: 'Playa Ancha, Valparaíso, Chile',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Valparaíso',
    addressRegion: 'Valparaíso',
    addressCountry: 'CL',
  },
  sameAs: ['https://www.instagram.com/tbestburger'],
  menu: 'https://thebestburger.cl/#menu',
  acceptsReservations: false,
};

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-100 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        {starPromo ? <PromoHighlight item={starPromo} /> : null}
        <MegaPromosSection />
        <MenuSection />
        <MenuDownloadSection />
        <HowToOrder />
      </main>
      <Footer />
    </div>
  );
}
