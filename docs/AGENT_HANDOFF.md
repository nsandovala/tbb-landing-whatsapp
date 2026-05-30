# Agent Handoff

## Estado actual
- Fase: refinamiento visual premium de la landing y preparación para publicación.
- Rama activa al cerrar esta fase: `main`.
- El sitio compila y responde correctamente en local.

## Qué quedó implementado
- SEO base y accesibilidad reforzados en layout/home.
- Hero premium con mini card destacada y efecto visual sutil de brasas/parrilla.
- Spotlight adicional de promo mediante `PromoHighlight`.
- Tabs del menú con mejor jerarquía visual:
  - `Megapromos`, `Combos completos` y `Las mechadas` usan tono cálido tipo promo.
  - `Burgers` y `Complementos` conservan un look más neutro.
- Sección de descarga del menú integrada con imagen real:
  - asset: `public/images/menutbb.png`
  - preview funcional en la landing.

## Archivos clave de esta fase
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/Hero.tsx`
- `src/components/PromoHighlight.tsx`
- `src/components/MenuSection.tsx`
- `src/components/MenuDownloadSection.tsx`
- `public/images/menutbb.png`

## QA ejecutada
- `npm run build`: OK
- smoke local `GET /`: `200`
- smoke local `GET /images/menutbb.png`: `200`

## Nota operativa
- Si `next build` o `next dev` falla con `EPERM` sobre `.next/trace`, había procesos `node` viejos reteniendo la carpeta. La solución fue cerrar procesos `node` del repo y repetir.

## Pendientes naturales para otra fase
- Generar PDF real del menú si se quiere habilitar el botón de descarga PDF.
- Revisar copy comercial fino y posibles optimizaciones de conversión adicionales.
