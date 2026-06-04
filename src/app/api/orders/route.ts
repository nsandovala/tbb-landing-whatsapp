import { NextResponse } from 'next/server';
import { db } from '@/db';
import { orders } from '@/db/schema';
import { CreateOrderSchema, resolveOrderItems, OrderError, TENANT_ID } from '@/lib/orders';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  // 1. Body es JSON válido
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 });
  }

  // 2. Validación de forma (Zod) — incluye "delivery requiere dirección"
  const parsed = CreateOrderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Datos inválidos', issues: parsed.error.issues },
      { status: 400 },
    );
  }
  const input = parsed.data;

  // 3. Precios y total SIEMPRE desde el servidor (MENU_DATA), nunca desde el cliente
  let priced;
  try {
    priced = resolveOrderItems(input.items);
  } catch (err) {
    if (err instanceof OrderError) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    throw err;
  }

  // 4. Persistir primero (fuente de verdad). La notificación WhatsApp viene después, en el cliente.
  try {
    const [created] = await db
      .insert(orders)
      .values({
        tenantId: TENANT_ID,
        fulfillment: input.fulfillment,
        customerName: input.customerName,
        customerPhone: input.customerPhone,
        address: input.fulfillment === 'delivery' ? input.address ?? null : null,
        items: priced.items,
        subtotal: priced.subtotal,
        total: priced.total,
        paymentMethod: input.paymentMethod,
        notes: input.notes ?? null,
      })
      .returning({ id: orders.id, number: orders.orderNumber, status: orders.status });

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error('Error creando pedido:', err);
    return NextResponse.json({ error: 'No se pudo crear el pedido' }, { status: 500 });
  }
}
