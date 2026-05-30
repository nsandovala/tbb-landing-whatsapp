const STEPS = [
  {
    title: 'Explora la carta',
    description:
      'Descubre nuestras mechadas desmechadas a mano y hamburguesas artesanales de receta legendaria.',
  },
  {
    title: 'Selecciona tu antojo',
    description:
      'Haz clic en el botón del producto que quieras para preparar automáticamente tu mensaje de WhatsApp.',
  },
  {
    title: 'Coordinamos la entrega',
    description:
      'Envía el mensaje preconfigurado. Coordinamos al instante tu delivery o retiro en Playa Ancha.',
  },
  {
    title: 'Disfruta el sabor',
    description:
      'Preparamos todo al momento con ingredientes frescos para que lo recibas caliente, crujiente y en su punto ideal.',
  },
];

export function HowToOrder() {
  return (
    <section
      aria-labelledby="how-to-order-title"
      className="relative border-t border-white/5 bg-[#0b0b0c] px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="absolute inset-0 grid-bg-overlay opacity-[0.01] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-14">
          <span className="mb-1 block text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-500">
            El proceso simple
          </span>
          <h2
            id="how-to-order-title"
            className="text-3xl font-light tracking-tight text-zinc-100 sm:text-5xl"
          >
            Del fuego{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text font-semibold text-transparent">
              a tu mesa
            </span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <article
              key={step.title}
              className="apple-glass-card flex min-h-[200px] flex-col justify-between rounded-[28px] border border-white/8 p-6 hover:border-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.06)]"
            >
              <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3 text-[10px] font-mono text-zinc-500">
                <span>PASO 0{index + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500/60" />
              </div>

              <div className="flex-1">
                <h3 className="mb-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-100">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-zinc-400">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
