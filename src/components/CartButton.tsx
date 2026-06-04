'use client';

import { useCart } from '../cart/CartProvider';
import { formatPrice } from '../lib/whatsapp';

export function CartButton() {
  const { count, subtotal } = useCart();

  if (count === 0) {
    return null;
  }

  const label =
    count === 1
      ? `Ver carrito · ${formatPrice(subtotal)}`
      : `🛒 ${count} · Ver carrito · ${formatPrice(subtotal)}`;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 pb-[env(safe-area-inset-bottom)] sm:bottom-6">
      <button
        type="button"
        onClick={() => undefined}
        className="cart-button-fade-in pointer-events-auto inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold text-zinc-100 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.72)] backdrop-blur-xl transition-all duration-300 hover:border-amber-500/35 hover:text-white hover:shadow-[0_16px_48px_-18px_rgba(245,158,11,0.20)] sm:w-auto sm:min-w-80"
        style={{
          background: 'var(--apple-glass-bg)',
          borderColor: 'var(--apple-glass-border)',
        }}
      >
        {label}
      </button>
    </div>
  );
}
