import Image from 'next/image';
import { createWhatsAppLink, HERO_MESSAGE } from '../lib/whatsapp';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0b0c]/80 backdrop-blur-xl">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
      >
        <a href="#top" className="group flex min-w-0 items-center gap-3" aria-label="Ir al inicio">
          <Image
            src="/brand/icono.png"
            alt="Icono de The Best Burger"
            width={32}
            height={32}
            className="h-8 w-8 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="flex min-w-0 flex-col gap-0.5 md:flex-row md:items-center md:gap-3">
            <span className="truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-100">
              The Best Burger
            </span>
            <span className="hidden h-3 w-px bg-zinc-800 md:inline-block" />
            <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              Receta de la Abuela, Playa Ancha
            </span>
          </div>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#menu"
            className="rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400 transition hover:text-zinc-100"
          >
            Carta
          </a>
          <a
            href={createWhatsAppLink(HERO_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir WhatsApp para pedir"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300 transition-all duration-300 hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-white"
          >
            WhatsApp
            <svg
              className="h-3 w-3 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
