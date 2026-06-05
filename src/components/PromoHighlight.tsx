import Image from 'next/image';
import type { MenuItem } from '../data/menu';
import { getMenuImage } from '../lib/menu-media';
import { createProductOrderLink, formatPrice } from '../lib/whatsapp';

export function PromoHighlight({ item }: { item: MenuItem }) {
  const imageConfig = getMenuImage(item.imageId || item.id);

  return (
    <section
      aria-labelledby="promo-highlight-title"
      className="relative border-t border-white/5 bg-[#0b0b0c] px-5 py-12 sm:px-6 sm:py-14"
    >
      <div className="absolute inset-0 grid-bg-overlay opacity-[0.01] pointer-events-none" />

      <div className="mx-auto max-w-5xl">
        <article className="apple-glass-card highlight-gold-active overflow-hidden rounded-[32px] border border-amber-500/20 p-4 sm:p-6">
          <div className="grid gap-5 md:grid-cols-[220px_minmax(0,1fr)] md:items-center">
            {imageConfig ? (
              <div className="relative aspect-square overflow-hidden rounded-[28px] border border-white/10 bg-black/40">
                <Image
                  src={imageConfig.src}
                  alt={imageConfig.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 220px"
                  className="object-cover"
                  style={{ objectPosition: imageConfig.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
              </div>
            ) : null}

            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Promo estrella
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-500">
                  Favorita de la casa
                </span>
              </div>

              <h2
                id="promo-highlight-title"
                className="text-2xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-3xl"
              >
                {item.name}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                {item.description}
              </p>

              {item.includes ? (
                <div className="mt-5 flex items-start gap-3 border-t border-white/5 pt-4">
                  <span className="mt-0.5 shrink-0 text-[9px] font-mono uppercase tracking-[0.26em] text-zinc-500">
                    Incluye
                  </span>
                  <span className="text-sm text-zinc-300">{item.includes}</span>
                </div>
              ) : null}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-2xl font-bold tracking-tight text-amber-400 sm:text-3xl">
                  {formatPrice(item.price)}
                </p>

                <a
                  href={createProductOrderLink(item)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Pedir ${item.name} por WhatsApp`}
                  className="btn-premium-primary w-full sm:w-auto"
                >
                  Pedir ahora
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
