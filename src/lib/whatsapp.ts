import type { MenuItem } from '../data/menu';

// Sabor real de Playa Ancha
export const WHATSAPP_NUMBER = '56942691515'; // Teléfono real o formato chileno estándar

export const HERO_MESSAGE =
  '¡Hola TBB! Vengo de la web y quiero consultar sobre la carta de hoy para hacer un pedido.';

export function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(price);
}

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createProductOrderLink(item: MenuItem) {
  const message = `¡Hola TBB! Me gustaría pedir: ${item.name} (${formatPrice(item.price)}).`;
  return createWhatsAppLink(message);
}
