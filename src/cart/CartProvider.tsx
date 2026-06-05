'use client';

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
  type PropsWithChildren,
} from 'react';

import {
  cartReducer,
  initialCartState,
  selectCount,
  selectSubtotal,
  type CartLine,
  type CartState,
} from '@/cart/reducer';

const CART_STORAGE_KEY = 'tbb-cart';

type CartContextValue = {
  items: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  add: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function isValidCartState(value: unknown): value is CartState {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  if (!('items' in value) || !Array.isArray(value.items)) {
    return false;
  }

  return value.items.every((item) => {
    if (typeof item !== 'object' || item === null) {
      return false;
    }

    return (
      'id' in item &&
      typeof item.id === 'string' &&
      'qty' in item &&
      typeof item.qty === 'number' &&
      Number.isInteger(item.qty) &&
      item.qty > 0
    );
  });
}

export function CartProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const rawState = window.localStorage.getItem(CART_STORAGE_KEY);

      if (rawState) {
        const parsedState: unknown = JSON.parse(rawState);

        if (isValidCartState(parsedState)) {
          dispatch({ type: 'HYDRATE', state: parsedState });
        }
      }
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  }, [hydrated, state]);

  const value: CartContextValue = {
    items: state.items,
    count: selectCount(state),
    subtotal: selectSubtotal(state),
    isOpen,
    add: (id) => dispatch({ type: 'ADD', id }),
    increment: (id) => dispatch({ type: 'INCREMENT', id }),
    decrement: (id) => dispatch({ type: 'DECREMENT', id }),
    remove: (id) => dispatch({ type: 'REMOVE', id }),
    clear: () => dispatch({ type: 'CLEAR' }),
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
