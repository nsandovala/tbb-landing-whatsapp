'use client';

import { useEffect } from 'react';
import { useCart } from '../cart/CartProvider';
import { MENU_DATA } from '../data/menu';
import { formatPrice } from '../lib/whatsapp';

const MENU_ITEM_BY_ID = new Map(MENU_DATA.map((item) => [item.id, item]));

export function CartSheet() {
  const { items, subtotal, isOpen, closeCart, clear } = useCart();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeCart, isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[70] transition-[visibility] duration-300 ${
        isOpen ? 'visible' : 'invisible'
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Cerrar carrito"
        onClick={closeCart}
        className={`absolute inset-0 h-full w-full bg-black/65 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <section
        role="dialog"
        aria-label="Tu pedido"
        className={`absolute inset-x-0 bottom-0 mx-auto max-h-[86vh] w-full max-w-xl overflow-hidden rounded-t-[28px] border border-white/8 text-zinc-100 shadow-[0_-18px_56px_-24px_rgba(0,0,0,0.82)] backdrop-blur-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{
          background: 'var(--apple-glass-bg)',
          borderColor: 'var(--apple-glass-border)',
        }}
      >
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-100">Tu pedido</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-white"
          >
            X
          </button>
        </div>

        <div className="max-h-[52vh] overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-5 text-center text-sm text-zinc-400">
              Tu carrito está vacío
            </p>
          ) : (
            <ul className="space-y-3">
              {items.map((line) => {
                const item = MENU_ITEM_BY_ID.get(line.id);
                const name = item?.name ?? line.id;
                const linePrice = (item?.price ?? 0) * line.qty;

                return (
                  <li
                    key={line.id}
                    className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-6 text-zinc-100">{name}</p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                        x{line.qty}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-sm font-semibold text-amber-400">
                      {formatPrice(linePrice)}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-white/8 px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-zinc-400">Total</span>
            <span className="font-mono text-lg font-semibold text-amber-400">
              {formatPrice(subtotal)}
            </span>
          </div>

          <div className="grid gap-2.5">
            <button type="button" onClick={() => undefined} className="btn-premium-primary w-full">
              Continuar
            </button>
            <button type="button" onClick={clear} className="btn-premium w-full">
              Vaciar carrito
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
