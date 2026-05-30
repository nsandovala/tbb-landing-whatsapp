import type { MenuItem } from '../data/menu';

// TODO AMON Shop: número de WhatsApp puede ser configurable por tienda
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

export function createProductOrderMessage(item: MenuItem): string {
  const price = formatPrice(item.price);

  if (item.category === 'promos') {
    return `¡Hola TBB! Quiero pedir la promo "${item.name}" de ${price}. ¿Está disponible para retiro o delivery?`;
  }

  if (item.category === 'combos') {
    const includes = item.includes ? ` Incluye ${item.includes}.` : '';
    return `¡Hola TBB! Quiero pedir el "${item.name}" de ${price}.${includes} ¿Está disponible?`;
  }

  if (item.category === 'mechadas' || item.category === 'burgers') {
    return `¡Hola TBB! Quiero pedir "${item.name}" de ${price}. ¿Está disponible?`;
  }

  if (item.category === 'powerups') {
    return `¡Hola TBB! Quisiera agregar "${item.name}" de ${price} a mi pedido. ¿Está disponible?`;
  }

  return `¡Hola TBB! Me gustaría pedir: ${item.name} (${price}).`;
}

export function createProductOrderLink(item: MenuItem) {
  const message = createProductOrderMessage(item);
  return createWhatsAppLink(message);
}
