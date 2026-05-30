import { createWhatsAppLink } from '../lib/whatsapp';

export function MenuDownloadSection() {
  const menuShareMessage =
    '¡Hola TBB! Me gustaría que me compartas el menú completo en PDF o imagen para verlo mejor.';

  return (
    <section
      aria-labelledby="menu-download-title"
      className="relative border-t border-white/5 bg-[#0b0b0c] px-4 py-16 sm:px-6"
    >
      <div className="absolute inset-0 grid-bg-overlay opacity-[0.01] pointer-events-none" />

      <div className="mx-auto max-w-4xl">
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
          <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-zinc-400">
            Guarda la carta, compártela y vuelve a pedir rápido desde cualquier celular.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div
            aria-disabled="true"
            className="apple-glass-card flex flex-col items-center justify-center gap-3 rounded-[26px] border border-white/8 p-6 text-center opacity-75"
          >
            <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-100">
                Descargar PDF
              </div>
              <div className="mt-1 text-xs text-zinc-400">Próximamente</div>
            </div>
          </div>

          <div
            aria-disabled="true"
            className="apple-glass-card flex flex-col items-center justify-center gap-3 rounded-[26px] border border-white/8 p-6 text-center opacity-75"
          >
            <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-100">
                Ver imagen
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
            title="Compartir menú por WhatsApp"
          >
            <svg className="h-8 w-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.934 1.314c-1.468.734-2.747 1.829-3.746 3.278C2.657 10.172 2 12.079 2 14.097c0 2.905.822 5.65 2.378 7.921l-2.52 7.3 7.6-2.51c2.34 1.231 4.975 1.548 7.374 1.548 5.528 0 10.237-2.216 13.846-5.82 3.604-3.604 5.82-8.308 5.82-13.846 0-5.528-2.216-10.232-5.82-13.846C24.565 2.206 19.861 0 14.333 0 8.805 0 4.1 2.206.496 5.81c-3.604 3.604-5.82 8.318-5.82 13.846 0 2.096.381 4.106 1.077 6.01l-2.42 7.021 7.554-2.504c1.886.947 3.988 1.523 6.189 1.523 5.528 0 10.232-2.216 13.846-5.82s5.82-8.318 5.82-13.846c0-5.528-2.216-10.232-5.82-13.846C24.565 2.206 19.861 0 14.333 0Z" />
            </svg>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-100">
                Compartir
              </div>
              <div className="mt-1 text-xs text-zinc-400">Por WhatsApp</div>
            </div>
          </a>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-zinc-500">
            Si el archivo aún no está disponible, puedes pedir la carta por WhatsApp mientras tanto.
          </p>
        </div>
      </div>
    </section>
  );
}
