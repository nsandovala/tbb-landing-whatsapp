import { useMemo, useState } from 'react';
import { MENU_DATA, type MenuItem } from '../data/menu';
import { createProductOrderLink, formatPrice } from '../lib/whatsapp';

type Category = MenuItem['category'];

const CATEGORIES: Array<{ id: Category; label: string }> = [
  { id: 'promos', label: 'Megapromos' },
  { id: 'combos', label: 'Combos Completos' },
  { id: 'mechadas', label: 'Las Mechadas' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'powerups', label: 'Complementos & Bebidas' },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('promos');

  const visibleItems = useMemo(
    () => MENU_DATA.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="menu" className="relative px-6 py-24 border-t border-white/5 bg-[#0b0b0c]">
      <div className="absolute inset-0 grid-bg-overlay opacity-[0.01] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-500 block mb-1">
              Nuestra Carta
            </span>
            <h2 className="text-3xl font-light tracking-tight text-zinc-100 sm:text-5xl uppercase">
              Selecciona tu <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">antojo</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-zinc-400 font-sans">
            Explora las recetas artesanales de la casa. Presiona tu preferido para cargarlo automáticamente en WhatsApp.
          </p>
        </div>

        {/* Minimalist Tabs Navigation */}
        <div className="mb-12 flex gap-2 overflow-x-auto pb-3 border-b border-white/5 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isActive = category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 relative ${
                  isActive
                    ? 'text-amber-400 font-semibold'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {category.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-4 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

const PRODUCT_IMAGES: Record<string, { url: string; className: string }> = {
  'promo-2x-mechada': {
    url: '/images/promo-2x-mechada.jpg',
    className: 'w-full h-full object-cover scale-[1.55] object-[50%_38%] transition-all duration-500 hover:scale-[1.65]',
  },
  'promo-2x-imperial': {
    url: '/images/promo-2x-imperial.jpg',
    className: 'w-full h-full object-cover scale-[1.55] object-[50%_38%] transition-all duration-500 hover:scale-[1.65]',
  },
  'combo-mechada-og': {
    url: '/images/supermechadaweb.png',
    className: 'w-full h-full object-cover scale-[1.55] object-[50%_38%] transition-all duration-500 hover:scale-[1.65]',
  },
  'solo-mechada-og': {
    url: '/images/supermechadaweb.png',
    className: 'w-full h-full object-cover scale-[1.55] object-[50%_38%] transition-all duration-500 hover:scale-[1.65]',
  },
  'combo-mechada-italiana': {
    url: '/images/mechadaitaly3000.jpg',
    className: 'w-full h-full object-cover scale-[1.55] object-[50%_38%] transition-all duration-500 hover:scale-[1.65]',
  },
  'solo-mechada-italiana': {
    url: '/images/mechadaitaly3000.jpg',
    className: 'w-full h-full object-cover scale-[1.55] object-[50%_38%] transition-all duration-500 hover:scale-[1.65]',
  },
  'combo-chacarero-prime': {
    url: '/images/mechadachacarero.jpg',
    className: 'w-full h-full object-cover scale-[1.55] object-[50%_38%] transition-all duration-500 hover:scale-[1.65]',
  },
  'solo-chacarero-prime': {
    url: '/images/mechadachacarero.jpg',
    className: 'w-full h-full object-cover scale-[1.55] object-[50%_38%] transition-all duration-500 hover:scale-[1.65]',
  },
  'combo-mechada-cheddaron': {
    url: '/images/mechadacheddaron.png',
    className: 'w-full h-full object-cover scale-[1.55] object-[50%_38%] transition-all duration-500 hover:scale-[1.65]',
  },
  'solo-mechada-cheddaron': {
    url: '/images/mechadacheddaron.png',
    className: 'w-full h-full object-cover scale-[1.55] object-[50%_38%] transition-all duration-500 hover:scale-[1.65]',
  },
};

function MenuItemCard({ item }: { item: MenuItem }) {
  const isHighlighted = Boolean(item.highlight);
  const isPowerup = item.category === 'powerups';
  const imageConfig = PRODUCT_IMAGES[item.id];
  
  // Choose correct hover classes based on highlight parameters
  const glowClass = isPowerup ? 'neon-glow-orange' : 'neon-glow-gold';
  const activeGlowClass = isHighlighted 
    ? (isPowerup ? 'highlight-orange-active' : 'highlight-gold-active') 
    : '';

  return (
    <article 
      className={`apple-glass-card ${glowClass} ${activeGlowClass} flex flex-col justify-between overflow-hidden p-6`}
    >
      <div>
        {/* Abstract Gold Line Art Illustration or Product Image */}
        <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-lg border border-white/5 bg-black/40 flex items-center justify-center">
          <div className="absolute inset-0 grid-bg-overlay opacity-[0.01] pointer-events-none" />
          
          {imageConfig ? (
            <>
              <img 
                src={imageConfig.url} 
                alt={item.name} 
                className={imageConfig.className}
              />
              {/* Premium Vignette & Contrast Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            </>
          ) : (
            <div className="p-4 w-full h-full flex items-center justify-center">
              <GoldVectorArt category={item.category} id={item.id} />
            </div>
          )}
          
          {/* Subtle Badge Overlay */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-black/80 border border-white/5 font-mono text-[9px] tracking-widest text-zinc-400 uppercase">
            <span className={`h-1 w-1 rounded-full ${isHighlighted ? 'bg-amber-500 animate-pulse' : 'bg-zinc-600'}`} />
            {item.id.replace('promo-', '').replace('combo-', '').replace('solo-', '')}
          </div>
        </div>

        {/* Details */}
        <div className="mb-6">
          <div className="flex items-start justify-between gap-4 mb-2.5">
            <div>
              {item.badge ? (
                <span className="mb-2 inline-flex items-center rounded bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 font-sans text-[10px] text-amber-400">
                  {item.badge}
                </span>
              ) : null}
              <h3 className="text-lg font-medium tracking-tight text-zinc-100 leading-tight">
                {item.name}
              </h3>
            </div>
            <p className="shrink-0 font-mono text-sm font-semibold tracking-tight text-amber-400">
              {formatPrice(item.price)}
            </p>
          </div>

          <p className="text-xs leading-relaxed text-zinc-400 font-light mb-4">
            {item.description}
          </p>

          {/* Includes details if present */}
          {item.includes ? (
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2">
              <span className="text-[9px] font-mono uppercase text-zinc-500 tracking-wider">Incluye:</span>
              <span className="text-[11px] text-zinc-300 font-medium font-sans">
                {item.includes}
              </span>
            </div>
          ) : null}
        </div>
      </div>

      {/* Elegant Action Button */}
      <a
        href={createProductOrderLink(item)}
        target="_blank"
        rel="noreferrer"
        className={`w-full inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-zinc-300 transition-all duration-300 hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-white ${
          isHighlighted 
            ? 'border-amber-500/20 bg-amber-500/5 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/40' 
            : ''
        }`}
      >
        Pedir por WhatsApp
      </a>
    </article>
  );
}

// Elegant Abstract gold vector illustration based on category
function GoldVectorArt({ category, id }: { category: Category; id: string }) {
  return (
    <svg className="w-full h-full max-w-[140px] text-amber-500/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Decorative background grid and circles */}
      <circle cx="50" cy="50" r="42" className="stroke-white/5" strokeWidth="0.5" strokeDasharray="2 3" />
      <circle cx="50" cy="50" r="28" className="stroke-white/5" strokeWidth="0.5" strokeDasharray="1 2" />

      {/* Renders vector outlines depending on category */}
      {category === 'promos' && (
        <g stroke="url(#goldGrad)">
          {/* Two sandwiches/burgers overlap representing promo */}
          <path d="M28 50 C28 35, 62 35, 62 50 Z" />
          <path d="M25 50 H65" />
          <rect x="23" y="54" width="44" height="6" rx="2" fill="currentColor" fillOpacity="0.05" />
          <path d="M26 64 C26 72, 64 72, 64 64 Z" />

          <path d="M48 60 C48 48, 78 48, 78 60 Z" className="opacity-70" />
          <path d="M45 60 H81" className="opacity-70" />
          <rect x="44" y="63" width="38" height="5" rx="2" className="opacity-70" fill="currentColor" fillOpacity="0.05" />
          <path d="M46 72 C46 78, 80 78, 80 72 Z" className="opacity-70" />
        </g>
      )}

      {category === 'combos' && (
        <g stroke="url(#goldGrad)">
          {/* Burger/Sandwich + Fries outline */}
          <path d="M22 55 C22 42, 54 42, 54 55 Z" />
          <path d="M20 55 H56" />
          <rect x="18" y="58" width="40" height="5" rx="1.5" />
          <path d="M21 67 C21 73, 55 73, 55 67 Z" />
          
          {/* Fries pot */}
          <path d="M64 52 L68 76 H82 L86 52 Z" />
          <path d="M68 52 Q75 42, 69 36" />
          <path d="M73 52 Q78 40, 77 34" />
          <path d="M78 52 Q82 44, 84 37" />
          <path d="M82 52 Q85 45, 87 40" />
        </g>
      )}

      {category === 'mechadas' && (
        <g stroke="url(#goldGrad)">
          {/* Súper Mechada outline - long oval shapes */}
          <path d="M20 40 C35 34, 65 34, 80 40 C88 43, 88 50, 80 52 C65 58, 35 58, 20 52 C12 50, 12 43, 20 40 Z" fill="currentColor" fillOpacity="0.05" />
          {/* Meat and lettuce threads */}
          <path d="M15 52 Q28 47, 42 53 T70 51 T85 52" strokeWidth="1.5" />
          <path d="M18 57 Q32 60, 50 56 T82 58" />
          {/* Bottom bread */}
          <path d="M22 62 C35 66, 65 66, 78 62 C84 61, 84 66, 78 68 C65 72, 35 72, 22 68 C16 66, 16 61, 22 62 Z" />
        </g>
      )}

      {category === 'burgers' && (
        <g stroke="url(#goldGrad)">
          {/* Burger layers */}
          <path d="M25 46 C25 24, 75 24, 75 46 Z" fill="currentColor" fillOpacity="0.05" />
          <path d="M22 46 H78" strokeWidth="1.5" />
          
          {/* Cheese melt */}
          <path d="M23 52 L77 52 L73 57 L64 52 L58 60 L50 52 L42 58 L36 52 Z" fill="currentColor" fillOpacity="0.1" />
          
          {/* Burger Patty */}
          <rect x="20" y="58" width="60" height="9" rx="3.5" strokeWidth="1.5" />
          
          {/* Bottom Bun */}
          <path d="M24 72 C24 78, 76 78, 76 72 Z" />
          <path d="M24 72 H76" />
        </g>
      )}

      {category === 'powerups' && (
        <g stroke="url(#orangeGrad)">
          {id === 'papas-kaioken' ? (
            // Golden crispy fries cup
            <g>
              <path d="M30 45 L36 82 H64 L70 45 Z" fill="currentColor" fillOpacity="0.05" />
              {/* Fries */}
              <rect x="34" y="24" width="5" height="22" rx="1" transform="rotate(-10 34 24)" />
              <rect x="42" y="18" width="5" height="28" rx="1" />
              <rect x="50" y="21" width="5" height="25" rx="1" transform="rotate(5 50 21)" />
              <rect x="58" y="26" width="5" height="20" rx="1" transform="rotate(15 58 26)" />
              <rect x="46" y="28" width="5" height="18" rx="1" transform="rotate(-5 46 28)" />
            </g>
          ) : (
            // A refreshing can / soda drink
            <g>
              <rect x="34" y="26" width="32" height="54" rx="4" fill="currentColor" fillOpacity="0.05" />
              <ellipse cx="50" cy="26" rx="16" ry="3" />
              <ellipse cx="50" cy="80" rx="16" ry="3" />
              {/* Soda straw or pull tab details */}
              <path d="M46 26 V22 H54 V26" />
              <path d="M42 42 H58 M42 48 H58 M42 54 H58" strokeWidth="0.75" className="opacity-50" />
            </g>
          )}
        </g>
      )}
    </svg>
  );
}
