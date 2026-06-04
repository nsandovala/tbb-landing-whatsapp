import { MENU_DATA } from '@/data/menu';

export type CartLine = {
  id: string;
  qty: number;
};

export type CartState = {
  items: CartLine[];
};

export type CartAction =
  | { type: 'ADD'; id: string }
  | { type: 'INCREMENT'; id: string }
  | { type: 'DECREMENT'; id: string }
  | { type: 'REMOVE'; id: string }
  | { type: 'CLEAR' }
  | { type: 'HYDRATE'; state: CartState };

export const initialCartState: CartState = { items: [] };

const upsertLine = (items: CartLine[], id: string): CartLine[] => {
  const existingLine = items.find((line) => line.id === id);

  if (!existingLine) {
    return [...items, { id, qty: 1 }];
  }

  return items.map((line) =>
    line.id === id ? { ...line, qty: line.qty + 1 } : line,
  );
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD':
    case 'INCREMENT':
      return {
        items: upsertLine(state.items, action.id),
      };

    case 'DECREMENT':
      return {
        items: state.items
          .map((line) =>
            line.id === action.id ? { ...line, qty: line.qty - 1 } : line,
          )
          .filter((line) => line.qty > 0),
      };

    case 'REMOVE':
      return {
        items: state.items.filter((line) => line.id !== action.id),
      };

    case 'CLEAR':
      return initialCartState;

    case 'HYDRATE':
      return action.state;

    default:
      return state;
  }
}

const MENU_PRICE_BY_ID = new Map(MENU_DATA.map((item) => [item.id, item.price]));

export function selectSubtotal(state: CartState): number {
  return state.items.reduce((subtotal, line) => {
    const price = MENU_PRICE_BY_ID.get(line.id) ?? 0;
    return subtotal + price * line.qty;
  }, 0);
}

export function selectCount(state: CartState): number {
  return state.items.reduce((count, line) => count + line.qty, 0);
}
