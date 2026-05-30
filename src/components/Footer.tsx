export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0b0b0c] px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs font-mono text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="https://www.instagram.com/tbestburger"
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar Instagram de The Best Burger"
          className="text-[10px] uppercase tracking-[0.24em] text-zinc-400 transition-colors duration-300 hover:text-amber-400"
        >
          Instagram @tbestburger
        </a>
        <p className="text-left text-[10px] uppercase tracking-[0.22em] text-zinc-600 sm:text-right">
          El sabor de la tradición familiar. © {new Date().getFullYear()} The Best Burger.
        </p>
      </div>
    </footer>
  );
}
