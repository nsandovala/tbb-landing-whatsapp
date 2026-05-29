import { createWhatsAppLink, HERO_MESSAGE } from '../lib/whatsapp';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0b0c]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/brand/icono.png"
            alt="TBB Icono"
            className="h-7 w-7 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-3">
            <span className="tracking-[0.18em] font-semibold text-xs text-zinc-100 uppercase font-sans">
              The Best Burger
            </span>
            <span className="hidden md:inline-block h-3 w-px bg-zinc-800" />
            <span className="inline-flex items-center gap-1.5 text-[9px] tracking-wider text-zinc-400 uppercase font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              Receta de la Abuela — Playa Ancha
            </span>
          </div>
        </a>

        <div className="flex items-center gap-5">
          <a
            href="#menu"
            className="text-xs font-medium tracking-wide text-zinc-400 transition hover:text-zinc-100 px-3 py-1.5"
          >
            Ver Carta
          </a>
          <a
            href={createWhatsAppLink(HERO_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-zinc-300 transition-all duration-300 hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-white"
          >
            WhatsApp
            <svg
              className="h-3 w-3 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
