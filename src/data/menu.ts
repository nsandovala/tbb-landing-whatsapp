export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'promos' | 'combos' | 'mechadas' | 'burgers' | 'powerups';
  includes?: string;
  badge?: string;
  highlight?: boolean; // Para aplicar el cristal con resplandor ámbar/dorado
}

export const MENU_DATA: MenuItem[] = [
  // 1. MEGAPROMOS FIX-PRICE (Gancho Principal)
  {
    id: 'promo-2x-mechada',
    name: '2x Súper Mechada Z OG + Papitas',
    price: 11000,
    description: 'Nuestra combinación bandera. Dos sándwiches cargados con la receta original de carne mechada de la abuela, lechuga fresca y salsa verde artesanal. Incluye una generosa porción de papas rústicas de la casa.',
    category: 'promos',
    includes: '2 Súper Mechadas Z OG + Papas de la casa',
    badge: 'La más vendida 🍟',
    highlight: true
  },
  {
    id: 'promo-2x-imperial',
    name: '2x Imperial Burger + Papitas',
    price: 16000,
    description: 'La opción definitiva para compartir o para estómagos serios. Dos hamburguesas gigantes con capas de sabor intenso, queso cheddar fundido y el sazón secreto de la casa. Incluye porción de papas rústicas.',
    category: 'promos',
    includes: '2 Imperial Burgers + Papas de la casa',
    badge: 'Para compartir 👑'
  },

  // 2. COMBOS COMPLETOS (Con Papas + Bebida)
  {
    id: 'combo-mechada-og',
    name: 'Combo Súper Mechada Z OG',
    price: 7490,
    description: 'El clásico atemporal. Carne mechada tierna cocinada a fuego lento, lechuga seleccionada y nuestra emblemática salsa verde.',
    category: 'combos',
    includes: 'Sándwich + Papas + Bebida'
  },
  {
    id: 'combo-burger-cheddar',
    name: 'Combo Burger Cheddar',
    price: 7490,
    description: 'Dedicada a los puristas. Jugosa carne artesanal, queso cheddar perfectamente derretido, lechuga crocante y salsa de la casa.',
    category: 'combos',
    includes: 'Burger + Papas + Bebida'
  },
  {
    id: 'combo-mechada-italiana',
    name: 'Combo Mechada Italiana 3000',
    price: 7990,
    description: 'Una combinación perfecta y cremosa. Nuestra mechada premium acompañada de palta Hass recién molida, tomate de temporada seleccionado y mayonesa casera.',
    category: 'combos',
    includes: 'Sándwich + Papas + Bebida'
  },
  {
    id: 'combo-chacarero-prime',
    name: 'Combo Chacarero Prime',
    price: 8290,
    description: 'El orgullo de la tradición local con un corte premium. Carne mechada premium, tomates maduros, porotos verdes frescos, un toque de ají verde y mayo de la casa.',
    category: 'combos',
    includes: 'Sándwich + Papas + Bebida'
  },
  {
    id: 'combo-vader-burger',
    name: 'Combo Vader Burger',
    price: 8290,
    description: 'Carácter y profundidad en cada bocado. Medallón de carne artesanal de la casa, verduras seleccionadas salteadas al dente y condimentos secretos.',
    category: 'combos',
    includes: 'Burger + Papas + Bebida'
  },
  {
    id: 'combo-mechada-cheddaron',
    name: 'Combo Mechada Cheddarón',
    price: 8490,
    description: 'El guerrero dorado del multiverso lácteo. Mechada con queso cheddar artesanal, lechuga y salsa verde. Sabor tan armónico que calma conflictos entre dimensiones.',
    category: 'combos',
    includes: 'Sándwich + Papas + Bebida'
  },
  {
    id: 'combo-shenlong-burger',
    name: 'Combo Shenlong Burger',
    price: 8990,
    description: 'Doble porción de potencia. Dos medallones de hamburguesa artesanal intercalados con capas de cheddar fundido, vegetales frescos y aderezo especial.',
    category: 'combos',
    includes: 'Doble Burger + Papas + Bebida'
  },
  {
    id: 'combo-imperial-burger',
    name: 'Combo Imperial Burger',
    price: 10990,
    description: 'Nuestra hamburguesa de mayor envergadura. Una estructura imponente con capas seleccionadas de sabor, queso cheddar, tomate, lechuga y aderezo premium.',
    category: 'combos',
    includes: 'Burger Imperial + Papas + Bebida'
  },

  // 3. SELECCIÓN INDIVIDUAL (Sándwiches Solos)
  { id: 'solo-mechada-og', name: 'Súper Mechada Z OG', price: 5650, description: 'Mechada, lechuga fresca y salsa verde artesanal.', category: 'mechadas' },
  { id: 'solo-mechada-italiana', name: 'Mechada Italiana 3000', price: 5990, description: 'Mechada, palta Hass, tomate seleccionado y mayo casera.', category: 'mechadas' },
  { id: 'solo-chacarero-prime', name: 'Chacarero Prime', price: 6100, description: 'Mechada, tomate, porotos verdes, un sutil ají verde y mayo.', category: 'mechadas' },
  { id: 'solo-mechada-cheddaron', name: 'Mechada Cheddarón', price: 6500, description: 'El guerrero dorado del multiverso lácteo. Mechada con queso cheddar artesanal, lechuga y salsa verde. Sabor tan armónico que calma conflictos entre dimensiones.', category: 'mechadas' },

  // 4. SELECCIÓN INDIVIDUAL (Burgers Solas)
  { id: 'solo-burger-cheddar', name: 'Burger Cheddar', price: 5900, description: 'Carne artesanal, queso cheddar derretido, lechuga y salsa de la casa.', category: 'burgers' },
  { id: 'solo-vader-burger', name: 'Vader Burger', price: 6500, description: 'Carne de la casa, verduras salteadas, condimentos y salsa verde.', category: 'burgers' },
  { id: 'solo-shenlong-burger', name: 'Shenlong Burger', price: 6990, description: 'Doble carne artesanal, queso cheddar fundido, vegetales y aderezo especial.', category: 'burgers' },
  { id: 'solo-imperial-burger', name: 'Imperial Burger', price: 8490, description: 'La hamburguesa más imponente del menú: cheddar, tomate, lechuga y aderezo artesanal.', category: 'burgers' },

  // 5. COMPLEMENTOS & POWER-UPS
  {
    id: 'papas-kaioken',
    name: 'Papas Kaioken',
    price: 1990,
    description: 'Nuestra ración individual de papas rústicas crujientes, espolvoreadas con el sazón secreto de la casa.',
    category: 'powerups',
    highlight: true // Para que brille en naranja dorado
  },
  { id: 'bebida-lata', name: 'Bebida en Lata', price: 1000, description: 'Variedad de marcas según disponibilidad para refrescar el paladar.', category: 'powerups' },
  { id: 'bebida-familiar', name: 'Bebida 1.5 Litros', price: 1500, description: 'El tamaño ideal para acompañar tus megapromos familiares.', category: 'powerups' }
];