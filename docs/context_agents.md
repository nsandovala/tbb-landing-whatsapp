# context_agents.md — The Best Burger · Contexto, Roadmap e Ideas

Documento vivo. Sirve para que cualquier agente (o yo mismo después) se ponga al día en 2 minutos.
**No reemplaza `AGENTS.md`** (ese tiene las *reglas*). Acá va el *estado*, el *futuro* y las *ideas*.

Última actualización: 2026-06-04

---

## 1. Contexto actual (qué hay hecho HOY)

Tienda online de The Best Burger (foodtruck, Playa Ancha, Valparaíso). Repo: `nsandovala/tbb-landing-whatsapp`.
Stack: **Next.js 15 (App Router) + React 19 + TS 5.9 + Tailwind 3.4**, backend con **Route Handlers**, DB **Neon Postgres + Drizzle**, validación **Zod**. Deploy objetivo: Vercel.

Decisiones de fondo ya tomadas (no reabrir sin razón fuerte):
- **Postgres/Neon + Next Route Handlers.** Sin Firestore, sin Python por ahora. Más liviano = mejor.
- **Multi-tenant desde el día uno** vía columna `tenant_id` (hoy fijo `'tbb'`).
- **Local-first** para el borrador del carrito; la **DB es la fuente de verdad** del pedido.
- Pedido **invitado** (identificado por teléfono), sin login al inicio.
- Pago: **transferencia + comprobante por WhatsApp** (deep link `wa.me`), verificación manual. Sin pasarela aún.

Estado de lo construido:
- ✅ **Limpieza inicial**: promos duplicadas y archivos basura eliminados.
- ✅ **Paso 1 — DB**: tabla `orders` en Neon (Drizzle). 4 estados: `procesando → confirmado → en_preparacion → listo`. Multi-producto en `items` jsonb. `src/db/schema.ts`, `src/db/index.ts`, `drizzle.config.ts`.
- ✅ **Paso 2 — API**: `POST /api/orders` (`src/app/api/orders/route.ts`) + `src/lib/orders.ts` (Zod `CreateOrderSchema` + `resolveOrderItems`). El **backend recalcula precios** desde `MENU_DATA` (el cliente nunca manda el precio). Validado contra Neon: pedido real guardado, total correcto.
- ✅ **Fase 3A — Carrito (lógica)**: `src/cart/reducer.ts` (estado puro + selectores) y `src/cart/CartProvider.tsx` (Context + persistencia local-first con hidratación SSR segura). Provider **aún no montado** en layout.

Pendiente menor: cambio sin commitear en `src/lib/whatsapp.ts` (revisar `git diff` y decidir guardar/descartar).

---

## 2. Roadmap por fases

| Fase | Qué | Estado |
|------|-----|--------|
| Limpieza | Quitar duplicados + basura | ✅ Hecho |
| 1 · DB | Schema `orders` + migración Neon | ✅ Hecho |
| 2 · API | `POST /api/orders` + Zod + precios server-side | ✅ Hecho |
| 3A · Carrito lógica | CartContext + persistencia local-first | ✅ Hecho |
| **3B · Carrito UI** | Botón flotante + bottom sheet + efecto globo al agregar. Montar provider en layout. Respetar design system. | ⏳ **Siguiente** |
| 4 · Checkout | Formulario (nombre, teléfono, retiro/delivery, dirección si delivery, pago, notas) → `POST /api/orders` | ⬜ |
| 5 · Confirmación + seguimiento | Pantalla de éxito + deep link comprobante WhatsApp + página "ver estado" (procesando→confirmado→en prep→listo) con animación | ⬜ |
| 6 · Copy / neuroventa | Reescribir textos: gancho geek + sensorial. Microcopy de botones. (Tono ya definido por Nelson) | ⬜ |
| 7+ · Ver bandeja de ideas | — | ⬜ |

Principio transversal: **un paso a la vez**, validar con `npm run build`, commit acotado.

---

## 3. Bandeja de ideas (volcadero — sin orden, para sacarlas de la cabeza)

> Apenas se te ocurra algo a mitad de otra cosa, va acá. Después se promueve a una fase o se descarta. Anotado = cerebro tranquilo.

- **Mini-POS en el admin**: vista `/admin` protegida para ver pedidos en vivo, marcar estados, y cargar pedidos presenciales a mano. (Construible con el stack actual; fase 5-6.)
- **Tap to Pay / pagos con tarjeta (NFC del teléfono)**: depende de proveedor en Chile (Mercado Pago Point, SumUp, Transbank) — no es solo código, es habilitación comercial. Investigar al escalar.
- **PWA instalable**: manifest + service worker para instalar como app en el celular. Paso aparte, después de que el carrito funcione.
- **Login + repetir pedido anterior**: autenticación (Clerk, como Liev). "Repetir mi último pedido". Fast-follow una vez que el flujo invitado funcione.
- **Input parser estilo Liev**: el cliente escribe "burger y mechada" y aparecen las cards. Enhancement, no core.
- **Estado `cancelado`** en el enum de `orders` (no-show, transferencia que no cae). Agregar una palabra al enum cuando se necesite.
- **`lib/tenant.ts`**: centralizar config por tenant (número WhatsApp, branding) cuando llegue el 2º local.
- **FastAPI / backend dedicado**: solo si Amon Shop multi-tienda crece a lógica pesada (pagos complejos, delivery a escala). No optimizar para un problema que aún no existe.
- **Branch de Neon para pruebas**: hoy se prueba contra `production`. A futuro, branch aparte para tests.

---

## 4. Cómo usar este archivo

- ¿Idea nueva a mitad de algo? → va a la **bandeja** (sección 3). No se construye ahora.
- ¿Terminaste una fase? → se marca ✅ en el **roadmap** (sección 2) y se actualiza el **contexto** (sección 1).
- ¿Una idea madura y toca construirla? → se promueve de la bandeja a una fase del roadmap.
- Reglas de cómo trabajar el código → en `AGENTS.md`, no acá.
