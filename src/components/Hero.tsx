import { createWhatsAppLink, HERO_MESSAGE } from '../lib/whatsapp';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 py-20 lg:py-32 flex flex-col items-center text-center">
      {/* Background elegant grid & radial glowing effects */}
      <div className="absolute inset-0 grid-bg-overlay opacity-[0.02] pointer-events-none" />
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03),transparent_70%)] pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        {/* Play Ancha Tag */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          Tradición & Alta Cocina — Playa Ancha
        </div>

        {/* Center Prominent Logo with drop shadow */}
        <div className="relative flex justify-center mb-8">
          <img
            src="/brand/logo.png"
            alt="The Best Burger Logo"
            className="w-48 sm:w-56 md:w-64 h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] drop-shadow-[0_4px_10px_rgba(245,158,11,0.15)] transition-transform duration-700 hover:scale-102"
          />
        </div>

        {/* Elegant Minimalist Copy */}
        <h1 className="text-4xl font-light tracking-tight text-zinc-100 sm:text-5xl md:text-6xl leading-[1.1] max-w-2xl">
          Recetas legendarias <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 font-medium">
            hechas con alma y paciencia.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
          Nuestras sándwiches de mechada desmechada a mano cocinadas por horas con la receta de la abuela, hamburguesas jugosas en pan brioche artesanal y papas rústicas crujientes. Directo del fuego a tu mesa.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={createWhatsAppLink(HERO_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="btn-premium-primary"
          >
            Pedir por WhatsApp
          </a>
          <a href="#menu" className="btn-premium">
            Explorar la Carta
          </a>
        </div>
      </div>
    </section>
  );
}
