AGENTS.md — The Best Burger · Landing & Tienda
Reglas para cualquier agente de IA (Codex, Claude Code, opencode) que trabaje en este repo.
Léelas antes de tocar código. Si una tarea contradice estas reglas, detente y pregunta.

1. Qué es este proyecto
Landing + tienda online de The Best Burger (foodtruck de mechadas y burgers, Playa Ancha, Valparaíso).
Hoy el pedido se arma por WhatsApp; estamos evolucionando a carrito + checkout con persistencia propia (ver sección 6).

Producto único hoy: TBB. Pero el modelo de datos se diseña tenant-aware desde el día uno (futuro multi-tenant Amon Shop).
Deploy objetivo: Vercel (serverless). Toda decisión de infra debe ser compatible con esto.

2. Stack (no introducir alternativas sin aprobación)

Next.js 15.1 (App Router) · React 19 · TypeScript 5.9 (strict)
Tailwind CSS 3.4 (sin librería de componentes externa)
DB / backend nuevo: Neon Postgres + Drizzle ORM · validación con Zod
No hay script de lint: npm run build es la compuerta de validación.

3. Estructura
src/
  app/
    layout.tsx        # SEO (JSON-LD Restaurant, OG, Twitter) + a11y (skip link). NO romper.
    page.tsx          # Hero → MenuSection → MenuDownloadSection → HowToOrder
    global.css        # tokens de diseño (variables CSS, glass, gradients)
    api/              # (nuevo) Route Handlers del backend
  components/         # Footer, Hero, HowToOrder, MenuDownloadSection, MenuSection, Navbar
  data/menu.ts        # MenuItem + MENU_DATA (fuente del catálogo)
  lib/whatsapp.ts     # WHATSAPP_NUMBER, formatPrice (es-CL/CLP), links wa.me
  lib/menu-media.ts   # mapeo id → imagen
MenuItem.category ∈ 'promos' | 'combos' | 'mechadas' | 'burgers' | 'powerups'.

4. Reglas de oro (no se rompen)

Respeta la UI existente. Reutiliza tokens y clases de global.css. Prohibido inventar paletas nuevas, cambiar la tipografía o rediseñar secciones sin pedirlo.
Backend-first para el carrito/checkout (sección 6): primero datos y API, después UI.
npm run build debe pasar limpio antes de cualquier commit.
TypeScript strict. Sin imports/variables sin uso, sin any salvo justificado.
Formato chileno: precios siempre vía formatPrice (CLP, sin decimales). Textos en español de Chile.
Tenant-aware: todo dato persistido lleva tenant_id (default 'tbb'). Nada de hardcodear el tenant disperso por el código.
Nada de browser storage como fuente de verdad (localStorage/sessionStorage). El backend es la verdad.
No tocar cambios ajenos en el working tree. Stagea solo lo que cubre tu tarea. No commitees archivos temporales/basura.
Commits acotados y descriptivos: tipo: descripción (ej. feat: endpoint POST /api/orders).


5. Sistema de diseño (la UI a respetar)
Fondo / superficie

Fondo base: grafito #0b0b0c → #09090b (gradiente). Superficie suave #101013.
Glass cards: var(--apple-glass-bg) + borde rgba(255,255,255,0.08) + shadow-premium / shadow-glow.

Acento (la marca)

Degradado ámbar #f59e0b → naranja #f97316 para CTAs y resaltados.
Glow dorado/naranja en hover y elementos highlight.
CTA primario: fondo gradiente ámbar→naranja, texto oscuro #0b0b0c, forma pill.

Texto

Base #f4f4f5 / zinc (#e4e4e7). Acento ámbar #fbbf24.
Eyebrows/labels: mayúsculas con tracking amplio (estilo "EL PROCESO SIMPLE").

Tipografía: Inter (fallback SF Pro / system).
Layout

Mobile-first siempre (la mayoría del tráfico viene de redes → celular).
Mantener el ritmo visual y el espaciado existente. Cards consistentes con las actuales.


Antes de crear UI nueva (ej. carrito), reutiliza las clases glass, el gradiente de CTA y el patrón de card que ya existen. No clones estilos a mano: extrae a componente/clase si se repite.


6. Feature en curso: Carrito + Checkout (BACKEND-FIRST)

Principio rector: el pedido se persiste en la base primero como fuente de verdad. Cualquier notificación (WhatsApp / aviso a cocina) es un efecto secundario posterior a la persistencia. Un pedido nunca se pierde aunque falle la notificación.

Orden de ejecución (no saltarse pasos)

Schema + migración (orders) en Drizzle.
Validación Zod (CreateOrderSchema) — reutilizar la forma de tbb-amon-delivery-dev/apps/functions/.../create-order.schema como referencia.
API POST /api/orders (Route Handler) → valida, persiste, devuelve { id, number, status }. Probar con un POST manual + npm run build.
Estado de carrito en cliente (React Context / useReducer): items, cantidades, subtotal. Sin librería nueva salvo necesidad real.
UI de checkout (formulario: nombre, teléfono, retiro/delivery, dirección si delivery, medio de pago, notas) usando el design system de la sección 5.
Wire UI → API: el checkout hace POST /api/orders. La UI no calcula la verdad; el backend sí.
Confirmación: estado de éxito + deep link wa.me como handoff/aviso (usar createWhatsAppLink). El mensaje incluye el número de pedido.

Modelo orders (referencia)

id uuid · tenant_id text default 'tbb'
status enum: received | preparing | ready | delivered | cancelled
customer_name, customer_phone
fulfillment enum: pickup | delivery · address (nullable, requerido si delivery)
items jsonb: [{ id, name, price, qty }]
subtotal, total (enteros CLP) · payment_method · notes (nullable)
created_at, updated_at

Qué NO hacer

No construir el formulario de checkout antes de que la API funcione y compile.
No guardar pedidos solo en el cliente / localStorage.
No saltarse la validación Zod en el endpoint.
No acoplar el envío de WhatsApp dentro de la transacción de DB: persiste primero, notifica después.
No hardcodear el número de WhatsApp ni el tenant en varios lugares: usar config central (lib/whatsapp.ts y un futuro lib/tenant.ts).


7. Validación y entrega

Antes de commitear: npm run build en verde.
Revisar git status --short y commitear solo lo de tu tarea.
Si tu cambio alteraría el diseño visual o eliminaría una sección, detente y pregunta antes de aplicarlo.
Dejar un resumen corto de qué se cambió y cómo se validó.