import {
  pgTable,
  pgEnum,
  uuid,
  serial,
  text,
  integer,
  jsonb,
  timestamp,
  index,
} from 'drizzle-orm/pg-core';

// Estados del pedido (los 4 que definimos). UI mapea directo estas etiquetas.
export const orderStatus = pgEnum('order_status', [
  'procesando',
  'confirmado',
  'en_preparacion',
  'listo',
]);

export const fulfillmentType = pgEnum('fulfillment_type', ['retiro', 'delivery']);
export const paymentMethod = pgEnum('payment_method', ['transferencia', 'efectivo']);

// Línea del carrito (pedido multi-producto: mechada + burger + bebida...)
export type OrderItem = {
  id: string;
  name: string;
  price: number; // CLP unitario (entero, sin decimales)
  qty: number;
};

export const orders = pgTable(
  'orders',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    orderNumber: serial('order_number').notNull(), // #123 legible para el cliente
    tenantId: text('tenant_id').notNull().default('tbb'), // tenant-aware desde el dia 1
    status: orderStatus('status').notNull().default('procesando'),
    fulfillment: fulfillmentType('fulfillment').notNull(),
    customerName: text('customer_name').notNull(),
    customerPhone: text('customer_phone').notNull(), // identifica el pedido invitado (sin login)
    address: text('address'), // requerido solo si delivery (se valida en Zod, paso 2)
    items: jsonb('items').$type<OrderItem[]>().notNull(),
    subtotal: integer('subtotal').notNull(), // CLP
    total: integer('total').notNull(), // CLP (subtotal + delivery a futuro)
    paymentMethod: paymentMethod('payment_method').notNull().default('transferencia'),
    notes: text('notes'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [
    index('orders_tenant_idx').on(table.tenantId),
    index('orders_status_idx').on(table.status),
    index('orders_phone_idx').on(table.customerPhone),
    index('orders_created_idx').on(table.createdAt),
  ],
);

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;
