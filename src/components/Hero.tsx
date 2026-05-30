import Image from 'next/image';
import { createWhatsAppLink, HERO_MESSAGE, formatPrice } from '../lib/whatsapp';
import { getMenuImage } from '../lib/menu-media';
import { MENU_DATA, type MenuItem } from '../data/menu';

const starPromo = MENU_DATA.find((item) => item.id === 'promo-2x-mechada') as MenuItem;
const starPromoImage = getMenuImage(starPromo.imageId || starPromo.id);

const EMBERS = [
  { left: '12%', top: '24%', delay: '0s', duration: '11s', size: '8px' },
  { left: '20%', top: '58%', delay: '1.8s', duration: '13s', size: '6px' },
  { left: '36%', top: '19%', delay: '0.8s', duration: '10s', size: '5px' },
  { left: '64%', top: '18%', delay: '2.6s', duration: '14s', size: '7px' },
  { left: '74%', top: '52%', delay: '1.2s', duration: '12s', size: '5px' },
  { left: '86%', top: '33%', delay: '3.4s', duration: '15s', size: '9px' },
];

const CHIPS = [
  { left: '18%', top: '74%', delay: '0.6s' },
  { left: '43%', top: '66%', delay: '1.7s' },
  { left: '68%', top: '72%', delay: '2.5s' },
  { left: '82%', top: '62%', delay: '0.9s' },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="absolute inset-0 grid-bg-overlay opacity-[0.02] pointer-events-none" />
      <div className="absolute left-1/2 top-[34%] h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06),transparent_70%)] pointer-events-none sm:h-[520px] sm:w-[520px]" />
      <div className="absolute left-1/2 top-[40%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.04),transparent_70%)] pointer-events-none animate-pulse-slow sm:h-[320px] sm:w-[320px]" />

      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="hero-grill-haze absolute inset-x-0 bottom-0 h-[38%]" />
        {EMBERS.map((ember) => (
          <span
            key={`${ember.left}-${ember.top}`}
            className="hero-ember"
            style={{
              left: ember.left,
              top: ember.top,
              width: ember.size,
              height: ember.size,
              animationDelay: ember.delay,
              animationDuration: ember.duration,
            }}
          />
        ))}
        {CHIPS.map((chip) => (
          <span
            key={`${chip.left}-${chip.top}`}
            className="hero-chip"
            style={{
              left: chip.left,
              top: chip.top,
              animationDelay: chip.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          Tradición y fuego lento en Playa Ancha
        </div>

        <div className="relative mb-8 flex justify-center">
          <Image
            src="/brand/logo.png"
            alt="Logo de The Best Burger"
            width={256}
            height={256}
            priority
            className="h-auto w-44 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-[1.02] sm:w-52 md:w-60"
          />
        </div>

        <h1
          id="hero-title"
          className="max-w-3xl text-balance text-4xl font-light leading-[1.04] tracking-tight text-zinc-100 sm:text-5xl md:text-6xl"
        >
          Mechadas y burgers
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text font-medium text-transparent">
            con presencia premium y sabor casero.
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-sm font-light leading-7 text-zinc-300 sm:text-base">
          Sándwiches de mechada cocinada por horas, burgers jugosas en pan brioche
          artesanal y papas rústicas crujientes. Una carta pensada para pedir rápido,
          verse impecable en mobile y convertir directo por WhatsApp.
        </p>

        {starPromo && (
          <div className="mt-8 w-full max-w-3xl">
            <article className="apple-glass-card highlight-gold-active group overflow-hidden rounded-[28px] border border-amber-500/20 p-3 sm:p-4">
              <div className="grid items-center gap-4 sm:grid-cols-[92px_minmax(0,1fr)] sm:gap-5">
                {starPromoImage ? (
                  <div className="relative mx-auto aspect-square w-20 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_12px_35px_rgba(0,0,0,0.45)] sm:mx-0 sm:w-[92px]">
                    <Image
                      src={starPromoImage.src}
                      alt={starPromoImage.alt}
                      fill
                      sizes="92px"
                      className="object-cover transition duration-700 group-hover:scale-110"
                      style={{ objectPosition: starPromoImage.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                  </div>
                ) : null}

                <div className="grid gap-3 text-left sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                  <div>
                    <p className="mb-1 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.28em] text-amber-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      La más vendida
                    </p>
                    <h2 className="text-lg font-semibold leading-tight text-zinc-50 sm:text-xl">
                      {starPromo.name}
                    </h2>
                    <p className="mt-1 text-xs leading-6 text-zinc-400 sm:text-sm">
                      Ideal para compartir. Vidriera premium, respuesta rápida y foco total en el producto.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left sm:min-w-[122px]">
                    <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-500">
                      Promo
                    </p>
                    <p className="mt-1 font-mono text-2xl font-bold tracking-tight text-amber-400">
                      {formatPrice(starPromo.price)}
                    </p>
                    <p className="text-[11px] text-zinc-500">2x mechadas + papitas</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        <div className="mt-8 flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={createWhatsAppLink(HERO_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            aria-label="Pedir por WhatsApp"
            className="btn-premium-primary w-full sm:w-auto"
          >
            Pedir por WhatsApp
          </a>
          <a href="#menu" className="btn-premium w-full sm:w-auto">
            Explorar la carta
          </a>
        </div>
      </div>
    </section>
  );
}
