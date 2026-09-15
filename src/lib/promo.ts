// Studio promo configuration and helpers.
//
// "Girl. ZOOM IN!" — all services -15% from 16.09 until 23.09.
// During the promo window the price lists show the discounted price with the
// original price struck through underneath (see PromoPrice component).

export const PROMO_RATE = 0.15;

// Local time (Europe/Zurich for the studio). End is exclusive, so the whole of
// 23.09 is still inside the promo.
export const PROMO_START = new Date('2026-09-16T00:00:00');
export const PROMO_END = new Date('2026-09-24T00:00:00');

export function isPromoActive(now: Date = new Date()): boolean {
  return now >= PROMO_START && now < PROMO_END;
}

// Registry of studio promos. The /promo page lists every promo whose window is
// currently active; each entry also has its own landing page under /promo/<slug>.
export interface Promo {
  slug: string;
  path: string;
  image: string;
  titleKey: string;
  offerKey: string;
  datesKey: string;
  discountPercent: number;
  start: Date;
  end: Date; // exclusive
}

export const promos: Promo[] = [
  {
    slug: 'zoomin',
    path: '/promo/zoomin',
    image: '/promo.png',
    titleKey: 'promo_zoomin_title',
    offerKey: 'promo_zoomin_offer',
    datesKey: 'promo_zoomin_dates',
    discountPercent: Math.round(PROMO_RATE * 100),
    start: PROMO_START,
    end: PROMO_END,
  },
];

export function isPromoRunning(promo: Promo, now: Date = new Date()): boolean {
  return now >= promo.start && now < promo.end;
}

export function activePromos(now: Date = new Date()): Promo[] {
  return promos.filter((p) => isPromoRunning(p, now));
}

// Applies the promo discount to a price string, preserving any surrounding text
// (e.g. "CHF", "from", "/"). Every number found is discounted and rounded to a
// whole franc.
//   "CHF 35"          -> "CHF 30"
//   "CHF 45 / 40"     -> "CHF 38 / 34"
//   "from CHF 9"      -> "from CHF 8"
//   "from CHF 4 / 30" -> "from CHF 3 / 26"
export function discountPrice(price: string, rate: number = PROMO_RATE): string {
  return price.replace(/\d+(\.\d+)?/g, (n) =>
    Math.round(parseFloat(n) * (1 - rate)).toString()
  );
}
