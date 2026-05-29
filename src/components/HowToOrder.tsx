const STEPS = [
  {
    title: 'Explora la Carta',
    description: 'Descubre nuestras exquisitas mechadas desmechadas a mano y hamburguesas artesanales de receta legendaria.',
  },
  {
    title: 'Selecciona tu Antojo',
    description: 'Haz clic en el botón del producto de tu elección para preparar de forma automática tu mensaje de WhatsApp.',
  },
  {
    title: 'Coordinamos la Entrega',
    description: 'Envíanos el mensaje preconfigurado. Coordinamos al instante tu delivery o retiro en Playa Ancha.',
  },
  {
    title: 'Disfruta el Sabor',
    description: 'Preparamos todo al momento con ingredientes frescos para que lo recibas caliente, crujiente y en su punto ideal.',
  },
];

export function HowToOrder() {
  return (
    <section className="relative px-6 py-24 border-t border-white/5 bg-[#0b0b0c]">
      <div className="absolute inset-0 grid-bg-overlay opacity-[0.01] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-500 block mb-1">
            El Proceso Simple
          </span>
          <h2 className="text-3xl font-light tracking-tight text-zinc-100 sm:text-5xl uppercase">
            Del fuego <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">a tu mesa</span>
          </h2>
        </div>

        {/* Steps Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="apple-glass-card hover:border-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.06)] p-6 flex flex-col justify-between min-h-[200px]"
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-b border-white/5 pb-3 mb-4">
                <span>PASO 0{index + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500/60" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-zinc-100 mb-2.5 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-400 font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
