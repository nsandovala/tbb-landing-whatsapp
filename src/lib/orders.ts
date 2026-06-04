import { z } from 'zod';
import { MENU_DATA } from '@/data/menu';
import type { OrderItem } from '@/db/schema';

export const TENANT_ID = 'tbb'; // tenant-aware: hoy fijo, futuro lib/tenant.ts

export const CreateOrderSchema = z
  .object({
    items: z
      .array(
        z.object({
          id: z.string().min(1),
          qty: z.number().int().min(1).max(50),
        }),
      )
      .min(1, 'El pedido no puede estar vacío'),
    customerName: z.string().trim().min(2, 'Nombre requerido'),
    customerPhone: z.string().trim().min(8, 'Teléfono requerido'),
    fulfillment: z.enum(['retiro', 'delivery']),
    address: z.string().trim().optional(),
    paymentMethod: z.enum(['transferencia', 'efectivo']).default('transferencia'),
    notes: z.string().trim().max(500).optional(),
  })
  .refine(
    (d) => d.fulfillment !== 'delivery' || (!!d.address && d.address.length > 0),
    { message: 'La dirección es obligatoria para delivery', path: ['address'] },
  );

export type CreateOrderInput = z.infer<typeof CreateOrderSchema>;

export class OrderError extends Error {}

export type ResolvedOrder = { items: OrderItem[]; subtotal: number; total: number };

// El servidor es la fuente de verdad: precios SIEMPRE desde MENU_DATA, nunca del cliente.
export function resolveOrderItems(lines: CreateOrderInput['items']): ResolvedOrder {
  const items: OrderItem[] = lines.map((line) => {
    const product = MENU_DATA.find((p) => p.id === line.id);
    if (!product) throw new OrderError(`Producto no encontrado: ${line.id}`);
    return { id: product.id, name: product.name, price: product.price, qty: line.qty };
  });
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  return { items, subtotal, total: subtotal }; // TODO: + fee delivery a futuro
}
