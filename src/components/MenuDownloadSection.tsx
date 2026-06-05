import Image from 'next/image';
import { createWhatsAppLink } from '../lib/whatsapp';

export function MenuDownloadSection() {
  const menuImagePath = '/images/menutbb.png';
  const menuShareMessage =
    '¡Hola TBB! Me gustaría que me compartas el menú completo y confirmar disponibilidad para pedir.';

  return (
    <section
      aria-labelledby="menu-download-title"
      className="relative border-t border-white/5 bg-[#0b0b0c] px-5 py-16 sm:px-6"
    >
      <div className="absolute inset-0 grid-bg-overlay opacity-[0.01] pointer-events-none" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-2 text-center sm:mb-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-500">
            Lleva nuestra carta
          </span>
          <h2
            id="menu-download-title"
            className="text-2xl font-light uppercase tracking-tight text-zinc-100 sm:text-4xl"
          >
            Descarga{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              nuestro menú
            </span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-zinc-400">
            Ya integramos la imagen de la carta. Puedes verla completa, guardarla y compartirla.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)]">
          <a
            href={menuImagePath}
            target="_blank"
            rel="noreferrer"
            className="apple-glass-card neon-glow-gold group overflow-hidden rounded-[30px] border border-amber-500/15"
            title="Abrir imagen del menú"
          >
            <div className="grid gap-0 sm:grid-cols-[minmax(0,1fr)_228px]">
              <div className="flex flex-col justify-between p-6">
                <div>
                  <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-amber-300">
                    Menú visual listo
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-100">
                    Ver carta completa en imagen
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-zinc-400">
                    Ideal para revisar combos, mechadas y promos desde el celular sin perder detalle.
                  </p>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                  Abrir imagen
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>

              <div className="relative min-h-[260px] overflow-hidden border-t border-white/5 bg-black/35 sm:border-l sm:border-t-0">
                <Image
                  src={menuImagePath}
                  alt="Vista previa del menú de The Best Burger"
                  fill
                  sizes="(max-width: 640px) 100vw, 228px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
              </div>
            </div>
          </a>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div
              aria-disabled="true"
              className="apple-glass-card flex flex-col items-center justify-center gap-3 rounded-[26px] border border-white/8 p-6 text-center opacity-75"
            >
              <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-100">
                  PDF premium
                </div>
                <div className="mt-1 text-xs text-zinc-400">Próximamente</div>
              </div>
            </div>

            <a
              href={createWhatsAppLink(menuShareMessage)}
              target="_blank"
              rel="noreferrer"
              aria-label="Solicitar menú por WhatsApp"
              className="apple-glass-card neon-glow-orange flex flex-col items-center justify-center gap-3 rounded-[26px] p-6 text-center transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.06)]"
              title="Solicitar menú por WhatsApp"
            >
              <svg className="h-8 w-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.934 1.314c-1.468.734-2.747 1.829-3.746 3.278C2.657 10.172 2 12.079 2 14.097c0 2.905.822 5.65 2.378 7.921l-2.52 7.3 7.6-2.51c2.34 1.231 4.975 1.548 7.374 1.548 5.528 0 10.237-2.216 13.846-5.82 3.604-3.604 5.82-8.308 5.82-13.846 0-5.528-2.216-10.232-5.82-13.846C24.565 2.206 19.861 0 14.333 0 8.805 0 4.1 2.206.496 5.81c-3.604 3.604-5.82 8.318-5.82 13.846 0 2.096.381 4.106 1.077 6.01l-2.42 7.021 7.554-2.504c1.886.947 3.988 1.523 6.189 1.523 5.528 0 10.232-2.216 13.846-5.82s5.82-8.318 5.82-13.846c0-5.528-2.216-10.232-5.82-13.846C24.565 2.206 19.861 0 14.333 0Z" />
              </svg>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-100">
                  Consultar por WhatsApp
                </div>
                <div className="mt-1 text-xs text-zinc-400">Confirmar stock y promos</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
