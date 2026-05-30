export interface MenuImageConfig {
  src: string;
  alt: string;
  objectPosition: string;
  cardClassName: string;
}

export const MENU_IMAGE_MAP: Record<string, MenuImageConfig> = {
  'promo-2x-mechada': {
    src: '/images/promo-2x-mechada.jpg',
    alt: 'Promo de dos súper mechadas con papitas',
    objectPosition: '50% 38%',
    cardClassName: 'scale-[1.55] hover:scale-[1.65]',
  },
  'promo-2x-imperial': {
    src: '/images/promo-2x-imperial.jpg',
    alt: 'Promo de dos imperial burgers con papitas',
    objectPosition: '50% 38%',
    cardClassName: 'scale-[1.55] hover:scale-[1.65]',
  },
  'combo-mechada-og': {
    src: '/images/supermechadaweb.png',
    alt: 'Combo súper mechada Z OG',
    objectPosition: '50% 38%',
    cardClassName: 'scale-[1.55] hover:scale-[1.65]',
  },
  'solo-mechada-og': {
    src: '/images/supermechadaweb.png',
    alt: 'Súper mechada Z OG',
    objectPosition: '50% 38%',
    cardClassName: 'scale-[1.55] hover:scale-[1.65]',
  },
  'combo-mechada-italiana': {
    src: '/images/mechadaitaly3000.jpg',
    alt: 'Combo mechada italiana 3000',
    objectPosition: '50% 38%',
    cardClassName: 'scale-[1.55] hover:scale-[1.65]',
  },
  'solo-mechada-italiana': {
    src: '/images/mechadaitaly3000.jpg',
    alt: 'Mechada italiana 3000',
    objectPosition: '50% 38%',
    cardClassName: 'scale-[1.55] hover:scale-[1.65]',
  },
  'combo-chacarero-prime': {
    src: '/images/mechadachacarero.jpg',
    alt: 'Combo chacarero prime',
    objectPosition: '50% 38%',
    cardClassName: 'scale-[1.55] hover:scale-[1.65]',
  },
  'solo-chacarero-prime': {
    src: '/images/mechadachacarero.jpg',
    alt: 'Chacarero prime',
    objectPosition: '50% 38%',
    cardClassName: 'scale-[1.55] hover:scale-[1.65]',
  },
  'combo-mechada-cheddaron': {
    src: '/images/mechadacheddaron.png',
    alt: 'Combo mechada cheddarón',
    objectPosition: '50% 38%',
    cardClassName: 'scale-[1.55] hover:scale-[1.65]',
  },
  'solo-mechada-cheddaron': {
    src: '/images/mechadacheddaron.png',
    alt: 'Mechada cheddarón',
    objectPosition: '50% 38%',
    cardClassName: 'scale-[1.55] hover:scale-[1.65]',
  },
};

export function getMenuImage(imageId?: string) {
  if (!imageId) {
    return null;
  }

  return MENU_IMAGE_MAP[imageId] ?? null;
}
