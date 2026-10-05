/**
 * Каталог МФО Казахстана — реальные партнёрские офферы (сеть ZaimStore).
 *
 * ВАЖНО О ДАННЫХ:
 * - заполнены только те поля, которые подтверждены партнёрским фидом: название
 *   организации и ссылка перехода;
 * - числовые условия (суммы, сроки, ставки, ГЭСВ, возраст, способы получения,
 *   рейтинги и отзывы) намеренно НЕ заполнены. Все эти поля опциональны и
 *   отображаются на сайте только при заполнении;
 * - запрещено переносить внутреннюю статистику партнёрской сети
 *   (CR, AR, EPC, EPL, FTD) — она нужна только партнёру и на сайт не выводится.
 *
 * Как добавить подтверждённые условия: заполнить нужные поля в MFO_OFFERS ниже.
 * Сайт сам покажет их в карточке, таблице и на странице организации.
 */

export type MfoOffer = {
  slug: string;
  name: string;
  /** Инициалы для логотипа-заглушки. */
  logoText: string;
  /** Партнёрская ссылка ZaimStore. */
  affiliateUrl: string;
  cta: string;
  /**
   * Короткая подпись на жёлтом бейдже. Не должна содержать финансовых условий
   * (сумм, ставок, сроков) — если описания нет, остаётся нейтральная подпись.
   */
  badgeText?: string;

  /* ---- Подтверждённые условия. Не заполнены, пока нет проверенных данных. ---- */

  minAmount?: number;
  maxAmount?: number;
  minTermDays?: number;
  maxTermDays?: number;
  /** Номинальная процентная ставка, % годовых. */
  aprAnnual?: number;
  /** Годовая эффективная ставка вознаграждения (ГЭСВ), % годовых. */
  gesv?: number;
  minAge?: number;
  maxAge?: number;
  /** Работает онлайн, без визита в офис. */
  online?: boolean;
  /** Решение по заявке в течение 15 минут. */
  fastMinutes?: boolean;
  /** Рассрочка 0% у магазинов-партнёров. */
  installment?: boolean;
  methods?: string[];
  requirements?: string[];
  features?: string[];
  pros?: string[];
  cons?: string[];

  rating?: number;
  reviewsCount?: number;
  featured?: boolean;
  updatedAt?: string;
};

/** Название партнёрской сети. Показывается в дисклеймерах. */
export const MFO_PARTNER_NETWORK = 'ZaimStore';

/**
 * Подпись на жёлтом бейдже карточки. Нейтральная: описывает тип записи,
 * а не финансовые условия, которые на сайте не публикуются.
 */
export const MFO_BADGE_DEFAULT = 'Предложение МФО';

const KZT = '₸';

export function formatKzt(value: number): string {
  return `${value.toLocaleString('ru-KZ')}${KZT}`;
}

/** «от 1 дня», «7–30 дней» — только если сроки подтверждены. */
export function formatTermRange(min?: number, max?: number): string | undefined {
  if (min === undefined && max === undefined) return undefined;
  if (min === max) return `${min} дн.`;
  if (min === undefined) return `до ${max} дн.`;
  if (max === undefined) return `от ${min} дн.`;
  return `${min}–${max} дн.`;
}

/** Диапазон сумм — только если суммы подтверждены. */
export function formatAmountRange(min?: number, max?: number): string | undefined {
  if (min === undefined && max === undefined) return undefined;
  if (min === max) return formatKzt(min as number);
  if (min === undefined) return `до ${formatKzt(max as number)}`;
  if (max === undefined) return `от ${formatKzt(min)}`;
  return `${formatKzt(min)} – ${formatKzt(max)}`;
}

/** Диапазон возраста — только если возраст подтверждён. */
export function formatAgeRange(min?: number, max?: number): string | undefined {
  if (min === undefined && max === undefined) return undefined;
  if (min === max) return `${min} лет`;
  if (min === undefined) return `до ${max} лет`;
  if (max === undefined) return `от ${min} лет`;
  return `${min}–${max} лет`;
}

/** Есть ли хоть какие-то подтверждённые условия для показа в карточке. */
export function hasConfirmedTerms(offer: MfoOffer): boolean {
  return Boolean(
    offer.minAmount !== undefined ||
      offer.maxAmount !== undefined ||
      offer.minTermDays !== undefined ||
      offer.maxTermDays !== undefined ||
      offer.aprAnnual !== undefined ||
      offer.gesv !== undefined ||
      offer.minAge !== undefined ||
      offer.maxAge !== undefined ||
      offer.rating !== undefined,
  );
}

export const MFO_OFFERS: MfoOffer[] = [
  {
    slug: 'kivku',
    name: 'Kivku',
    logoText: 'KV',
    affiliateUrl: 'https://pxl.leads.su/click/98829f8e93ae8f5d61d70110e3da4797',
    cta: 'Получить займ',
    minAmount: 15000,
    maxAmount: 145000,
    minTermDays: 7,
    maxTermDays: 90,
    minAge: 18,
    maxAge: 65,
  },
  {
    slug: 'vivus-kz',
    name: 'VIVUS.KZ',
    logoText: 'VIV',
    affiliateUrl: 'https://pxl.leads.su/click/d505bd1cbbe13722a70315d668b72e50',
    cta: 'Получить займ',
    minAmount: 10000,
    maxAmount: 300000,
    minTermDays: 1,
    maxTermDays: 21,
    minAge: 18,
    maxAge: 65,
  },
  {
    // Название оффера в партнёрской сети: «Credit365 [sale] KZ».
    slug: 'credit365',
    name: 'Credit365',
    logoText: 'C36',
    affiliateUrl: 'https://pxl.leads.su/click/4862c54c49717e7f9ef0ac61b5076ce8',
    cta: 'Получить займ',
    minAmount: 20000,
    maxAmount: 300000,
    minTermDays: 10,
    maxTermDays: 30,
    minAge: 18,
    maxAge: 75,
  },
  {
    slug: 'one-credit',
    name: 'ONE CREDIT',
    logoText: 'OC',
    affiliateUrl: 'https://pxl.leads.su/click/8896517789895d65976b32c2032067a4',
    cta: 'Получить займ',
    minAmount: 20000,
    maxAmount: 300000,
    minTermDays: 10,
    maxTermDays: 30,
    minAge: 18,
    maxAge: 75,
  },
  {
    slug: 'acredit',
    name: 'Acredit',
    logoText: 'AC',
    affiliateUrl: 'https://pxl.leads.su/click/41be052a8c4d7fc6c88ab547a9d6315c',
    cta: 'Получить займ',
    minAmount: 20000,
    maxAmount: 300000,
    minTermDays: 5,
    maxTermDays: 15,
    minAge: 18,
    maxAge: 75,
  },
  {
    slug: 'tengebai',
    name: 'Tengebai',
    logoText: 'TB',
    affiliateUrl: 'https://pxl.leads.su/click/cd8d398a836a4a57b6fcd56102e843b9',
    cta: 'Получить займ',
    minAmount: 10000,
    maxAmount: 300000,
    minTermDays: 1,
    maxTermDays: 30,
    minAge: 18,
    maxAge: 65,
  },
  {
    slug: 'creditplus',
    name: 'CreditPlus',
    logoText: 'CP',
    affiliateUrl: 'https://pxl.leads.su/click/524ebb75d5f76ef0e59d7c4376231024',
    cta: 'Получить займ',
    minAmount: 20000,
    maxAmount: 300000,
    minTermDays: 5,
    maxTermDays: 20,
    minAge: 18,
    maxAge: 70,
  },
  {
    slug: 'quick-money',
    name: 'QUICK MONEY',
    logoText: 'QM',
    affiliateUrl: 'https://pxl.leads.su/click/f4800ab4f575b47e2002fe69a99409a1',
    cta: 'Получить займ',
    minAmount: 25000,
    maxAmount: 166000,
    minTermDays: 5,
    maxTermDays: 20,
    minAge: 23,
    maxAge: 65,
  },
  {
    slug: 'microcash',
    name: 'MicroCash',
    logoText: 'MC',
    affiliateUrl: 'https://pxl.leads.su/click/67359fd5ea31a827afb66135790163d5',
    cta: 'Получить займ',
    minAmount: 10000,
    maxAmount: 184000,
    minTermDays: 5,
    maxTermDays: 30,
    minAge: 21,
    maxAge: 58,
  },
  {
    slug: 'tengeda',
    name: 'TengeDa',
    logoText: 'TD',
    affiliateUrl: 'https://pxl.leads.su/click/00deb2bd85772e1aa32d5597d7d9af37',
    cta: 'Получить займ',
    minAmount: 50000,
    maxAmount: 175000,
    minTermDays: 15,
    maxTermDays: 30,
    minAge: 21,
    maxAge: 68,
  },
];

export function getMfoBySlug(slug: string): MfoOffer | undefined {
  return MFO_OFFERS.find((offer) => offer.slug === slug);
}

/**
 * Представленные на сайте организации.
 * Отдельного признака «избранного» у офферов нет — показываем первые три.
 */
export function getFeaturedMfo(limit = 3): MfoOffer[] {
  const featured = MFO_OFFERS.filter((offer) => offer.featured);
  return (featured.length > 0 ? featured : MFO_OFFERS).slice(0, limit);
}

/** Переплата за N дней по подтверждённой ставке. */
export function calcLoanIncome(amount: number, aprAnnual: number, days: number): number {
  return Math.round((amount * aprAnnual * days) / 365);
}
