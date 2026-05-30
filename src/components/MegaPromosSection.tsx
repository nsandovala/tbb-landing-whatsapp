import Image from 'next/image';
import { MENU_DATA, type MenuItem } from '../data/menu';
import { getMenuImage } from '../lib/menu-media';
import { createProductOrderLink, formatPrice } from '../lib/whatsapp';

export function MegaPromosSection() {
  const megaPromos = MENU_DATA.filter((item) => item.category === 'promos');

  return (
    <section
      aria-labelledby="mega-promos-title"
      className="relative border-t border-white/5 bg-[#0b0b0c] px-4 py-14 sm:px-6 sm:py-16"
    >
      <div className="absolute inset-0 grid-bg-overlay opacity-[0.01] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10">
          <span className="block text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-500">
            Las más vendidas
          </span>
          <h2
            id="mega-promos-title"
            className="max-w-3xl text-2xl font-light uppercase tracking-tight text-zinc-100 sm:text-4xl"
          >
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Megapromos
            </span>{' '}
            con look premium y lectura inmediata
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-zinc-400">
            Tarjetas glass más compactas en mobile, con producto visible arriba y CTA claro.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {megaPromos.map((promo) => (
            <MegaPromoCard key={promo.id} item={promo} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MegaPromoCard({ item }: { item: MenuItem }) {
  const imageConfig = getMenuImage(item.imageId || item.id);

  return (
    <article className="apple-glass-card neon-glow-gold highlight-gold-active overflow-hidden rounded-[30px] border border-white/8 p-4 sm:p-5">
      <div className="flex h-full flex-col gap-5">
        <div className="grid gap-4 sm:grid-cols-[120px_minmax(0,1fr)]">
          {imageConfig ? (
            <div className="relative aspect-square overflow-hidden rounded-[22px] border border-white/10 bg-black/50">
              <Image
                src={imageConfig.src}
                alt={imageConfig.alt}
                fill
                sizes="(max-width: 640px) 100vw, 120px"
                className="object-cover transition duration-700 hover:scale-110"
                style={{ objectPosition: imageConfig.objectPosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />
            </div>
          ) : null}

          <div>
            {item.badge ? (
              <div className="mb-3">
                <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
                  {item.badge}
                </span>
              </div>
            ) : null}

            <h3 className="text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
              {item.name}
            </h3>
            <p className="mt-2 font-mono text-xl font-bold text-amber-400 sm:text-2xl">
              {formatPrice(item.price)}
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{item.description}</p>
          </div>
        </div>

        {item.includes ? (
          <div className="flex items-start gap-3 border-t border-white/5 pt-4">
            <span className="mt-0.5 shrink-0 text-[9px] font-mono uppercase tracking-[0.24em] text-zinc-500">
              Incluye
            </span>
            <span className="text-sm text-zinc-300">{item.includes}</span>
          </div>
        ) : null}

        <a
          href={createProductOrderLink(item)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Pedir ${item.name} por WhatsApp`}
          className="inline-flex w-full items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300 transition-all duration-300 hover:border-amber-500/60 hover:bg-amber-500/20 hover:text-amber-200"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </article>
  );
}
