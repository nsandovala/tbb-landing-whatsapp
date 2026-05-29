export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12 bg-[#0b0b0c]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between font-mono">
        <a
          href="https://www.instagram.com/tbestburger"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 hover:text-amber-400 transition-colors duration-300 uppercase tracking-widest text-[10px]"
        >
          [ Instagram @tbestburger ]
        </a>
        <p className="uppercase tracking-widest text-[9px] text-zinc-600 text-left sm:text-right font-light">
          El sabor de la tradición familiar. © {new Date().getFullYear()} The Best Burger.
        </p>
      </div>
    </footer>
  );
}
