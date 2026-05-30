'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { MENU_DATA, type MenuItem } from '../data/menu';
import { getMenuImage } from '../lib/menu-media';
import { createProductOrderLink, formatPrice } from '../lib/whatsapp';

type Category = MenuItem['category'];

const CATEGORIES: Array<{ id: Category; label: string }> = [
  { id: 'promos', label: 'Megapromos' },
  { id: 'combos', label: 'Combos completos' },
  { id: 'mechadas', label: 'Las mechadas' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'powerups', label: 'Complementos' },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('promos');

  const visibleItems = useMemo(
    () => MENU_DATA.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="relative border-t border-white/5 bg-[#0b0b0c] px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="absolute inset-0 grid-bg-overlay opacity-[0.01] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-1 block text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-500">
              Nuestra carta
            </span>
            <h2
              id="menu-title"
              className="text-3xl font-light uppercase tracking-tight text-zinc-100 sm:text-5xl"
            >
              Selecciona tu{' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text font-semibold text-transparent">
                antojo
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-zinc-400">
            Navegación más cómoda en mobile, mejor foco visual y mensajes listos para WhatsApp.
          </p>
        </div>

        <div
          className="mb-10 flex gap-2 overflow-x-auto pb-3 scrollbar-none"
          role="tablist"
          aria-label="Categorías del menú"
        >
          {CATEGORIES.map((category) => {
            const isActive = category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${category.id}`}
                id={`tab-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`relative shrink-0 rounded-full border px-4 py-2.5 text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300 ${
                  isActive
                    ? 'border-amber-500/30 bg-amber-500/10 text-amber-300'
                    : 'border-white/8 bg-white/[0.03] text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div
          id={`panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  const isHighlighted = Boolean(item.highlight);
  const isPowerup = item.category === 'powerups';
  const imageLookupId = item.imageId || item.id;
  const imageConfig = getMenuImage(imageLookupId);

  const glowClass = isPowerup ? 'neon-glow-orange' : 'neon-glow-gold';
  const activeGlowClass = isHighlighted
    ? isPowerup
      ? 'highlight-orange-active'
      : 'highlight-gold-active'
    : '';

  return (
    <article
      className={`apple-glass-card ${glowClass} ${activeGlowClass} flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/8 p-5`}
    >
      <div>
        <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-[22px] border border-white/5 bg-black/40">
          <div className="absolute inset-0 grid-bg-overlay opacity-[0.01] pointer-events-none" />

          {imageConfig ? (
            <>
              <Image
                src={imageConfig.src}
                alt={imageConfig.alt || item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`h-full w-full object-cover transition-all duration-500 ${imageConfig.cardClassName}`}
                style={{ objectPosition: imageConfig.objectPosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center p-4">
              <GoldVectorArt category={item.category} id={item.id} />
            </div>
          )}

          <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-full border border-white/5 bg-black/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-zinc-400">
            <span
              className={`h-1 w-1 rounded-full ${isHighlighted ? 'bg-amber-500 animate-pulse' : 'bg-zinc-600'}`}
            />
            {item.id.replace('promo-', '').replace('combo-', '').replace('solo-', '')}
          </div>
        </div>

        <div className="mb-5">
          <div className="mb-2.5 flex items-start justify-between gap-4">
            <div>
              {item.badge ? (
                <span className="mb-2 inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[10px] text-amber-400">
                  {item.badge}
                </span>
              ) : null}
              <h3 className="text-lg font-medium leading-tight tracking-tight text-zinc-100">
                {item.name}
              </h3>
            </div>
            <p className="shrink-0 font-mono text-sm font-semibold tracking-tight text-amber-400">
              {formatPrice(item.price)}
            </p>
          </div>

          <p className="mb-4 text-sm leading-7 text-zinc-400">{item.description}</p>

          {item.includes ? (
            <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-3">
              <span className="text-[9px] font-mono uppercase tracking-[0.24em] text-zinc-500">
                Incluye
              </span>
              <span className="text-[11px] font-medium text-zinc-300">{item.includes}</span>
            </div>
          ) : null}
        </div>
      </div>

      <a
        href={createProductOrderLink(item)}
        target="_blank"
        rel="noreferrer"
        aria-label={`Pedir ${item.name} por WhatsApp`}
        className={`inline-flex w-full items-center justify-center rounded-2xl border px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
          isHighlighted
            ? 'border-amber-500/20 bg-amber-500/5 text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/10'
            : 'border-white/10 bg-white/5 text-zinc-300 hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-white'
        }`}
      >
        Pedir por WhatsApp
      </a>
    </article>
  );
}

function GoldVectorArt({ category, id }: { category: Category; id: string }) {
  return (
    <svg
      className="h-full w-full max-w-[140px] text-amber-500/40"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
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

      <circle cx="50" cy="50" r="42" className="stroke-white/5" strokeWidth="0.5" strokeDasharray="2 3" />
      <circle cx="50" cy="50" r="28" className="stroke-white/5" strokeWidth="0.5" strokeDasharray="1 2" />

      {category === 'promos' && (
        <g stroke="url(#goldGrad)">
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
          <path d="M22 55 C22 42, 54 42, 54 55 Z" />
          <path d="M20 55 H56" />
          <rect x="18" y="58" width="40" height="5" rx="1.5" />
          <path d="M21 67 C21 73, 55 73, 55 67 Z" />
          <path d="M64 52 L68 76 H82 L86 52 Z" />
          <path d="M68 52 Q75 42, 69 36" />
          <path d="M73 52 Q78 40, 77 34" />
          <path d="M78 52 Q82 44, 84 37" />
          <path d="M82 52 Q85 45, 87 40" />
        </g>
      )}

      {category === 'mechadas' && (
        <g stroke="url(#goldGrad)">
          <path d="M20 40 C35 34, 65 34, 80 40 C88 43, 88 50, 80 52 C65 58, 35 58, 20 52 C12 50, 12 43, 20 40 Z" fill="currentColor" fillOpacity="0.05" />
          <path d="M15 52 Q28 47, 42 53 T70 51 T85 52" strokeWidth="1.5" />
          <path d="M18 57 Q32 60, 50 56 T82 58" />
          <path d="M22 62 C35 66, 65 66, 78 62 C84 61, 84 66, 78 68 C65 72, 35 72, 22 68 C16 66, 16 61, 22 62 Z" />
        </g>
      )}

      {category === 'burgers' && (
        <g stroke="url(#goldGrad)">
          <path d="M25 46 C25 24, 75 24, 75 46 Z" fill="currentColor" fillOpacity="0.05" />
          <path d="M22 46 H78" strokeWidth="1.5" />
          <path d="M23 52 L77 52 L73 57 L64 52 L58 60 L50 52 L42 58 L36 52 Z" fill="currentColor" fillOpacity="0.1" />
          <rect x="20" y="58" width="60" height="9" rx="3.5" strokeWidth="1.5" />
          <path d="M24 72 C24 78, 76 78, 76 72 Z" />
          <path d="M24 72 H76" />
        </g>
      )}

      {category === 'powerups' && (
        <g stroke="url(#orangeGrad)">
          {id === 'papas-kaioken' ? (
            <g>
              <path d="M30 45 L36 82 H64 L70 45 Z" fill="currentColor" fillOpacity="0.05" />
              <rect x="34" y="24" width="5" height="22" rx="1" transform="rotate(-10 34 24)" />
              <rect x="42" y="18" width="5" height="28" rx="1" />
              <rect x="50" y="21" width="5" height="25" rx="1" transform="rotate(5 50 21)" />
              <rect x="58" y="26" width="5" height="20" rx="1" transform="rotate(15 58 26)" />
              <rect x="46" y="28" width="5" height="18" rx="1" transform="rotate(-5 46 28)" />
            </g>
          ) : (
            <g>
              <rect x="34" y="26" width="32" height="54" rx="4" fill="currentColor" fillOpacity="0.05" />
              <ellipse cx="50" cy="26" rx="16" ry="3" />
              <ellipse cx="50" cy="80" rx="16" ry="3" />
              <path d="M46 26 V22 H54 V26" />
              <path d="M42 42 H58 M42 48 H58 M42 54 H58" strokeWidth="0.75" className="opacity-50" />
            </g>
          )}
        </g>
      )}
    </svg>
  );
}
