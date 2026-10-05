/**
 * Типы и данные каталога банковских карт Казахстана.
 *
 * ДЕМО-ДАННЫЕ: банки реальные, условия (кэшбэк, лимиты, стоимость обслуживания) —
 * демонстрационные значения для MVP. Перед публикацией проверьте по тарифам банков.
 */

export type CardOffer = {
  slug: string;
  name: string;
  bank: string;
  logoText: string;
  tagline: string;
  summary: string;
  type: 'debit' | 'credit';
  /** Виртуальная карта выдаётся мгновенно. */
  virtual?: boolean;
  /** Бесплатное обслуживание до N лет. */
  freeServiceYears?: number;
  serviceCostYear: number;
  currency: string;
  /** Кэшбэк в процентах. */
  cashbackPercent: number;
  /** Кэшбэк в тенге за месяц при выполнении условий. */
  cashbackCapMonth: number;
  minAge: number;
  maxAge: number;
  incomeRequirement?: string;
  gracePeriodDays?: number;
  features: string[];
  pros: string[];
  cons: string[];
  rating: number;
  reviewsCount: number;
  featured?: boolean;
  updatedAt: string;
  affiliate: { label: string; url: string; cta: string };
};

export const CARD_OFFERS: CardOffer[] = [
  {
    slug: 'kaspi-gold',
    name: 'Kaspi Gold',
    bank: 'Kaspi.kz',
    logoText: 'KG',
    tagline: 'Кэшбэк до 5% и рассрочка 0% в магазинах-партнёрах',
    summary:
      'Флагманская дебетовая карта казахстанского финтеха: высокий кэшбэк, оплата частями и бесплатное обслуживание при активных покупках.',
    type: 'debit',
    freeServiceYears: 3,
    serviceCostYear: 0,
    currency: '₸ / $ / ₽',
    cashbackPercent: 5,
    cashbackCapMonth: 15_000,
    minAge: 16,
    maxAge: 75,
    incomeRequirement: 'Не требуется для базовой выдачи',
    features: ['Кэшбэк до 5%', 'Рассрочка 0% у партнёров', 'Бесплатное обслуживание', 'Выпуск за 5 минут'],
    pros: ['Оформление онлайн за 5 минут', 'Высокий кэшбэк', 'Оплата частями'],
    cons: ['Бонусы нужно активировать в приложении', 'Стоимость обслуживания при низкой активности'],
    rating: 4.9,
    reviewsCount: 8421,
    featured: true,
    updatedAt: '2026-09-25',
    affiliate: {
      label: 'Kaspi.kz',
      url: 'https://kaspi.kz/',
      cta: 'Открыть карту на kaspi.kz',
    },
  },
  {
    slug: 'halyk-kaizen',
    name: 'Halyk Kaizen',
    bank: 'Halyk Bank',
    logoText: 'HK',
    tagline: 'Премиальная карта с консьерж-сервисом и кэшбэком',
    summary:
      'Карта премиум-класса для крупных трат: повышенный кэшбэк в ресторанах, путешествиях и сервисах, персональное обслуживание.',
    type: 'debit',
    freeServiceYears: 1,
    serviceCostYear: 18_000,
    currency: '₸ / $ / €',
    cashbackPercent: 5,
    cashbackCapMonth: 25_000,
    minAge: 18,
    maxAge: 75,
    incomeRequirement: 'Оборот от 150 000 ₸ в месяц или зарплатный счёт в Halyk',
    features: ['Кэшбэк до 5%', 'Консьерж 24/7', 'Доступ в бизнес-залы', 'Мультивалютный счёт'],
    pros: ['Высокий лимит кэшбэка', 'Премиальный сервис', 'Проездные и скидки'],
    cons: ['Высокая стоимость обслуживания', 'Есть требования к обороту'],
    rating: 4.7,
    reviewsCount: 3120,
    featured: true,
    updatedAt: '2026-09-19',
    affiliate: {
      label: 'Halyk Bank',
      url: 'https://halykbank.kz/',
      cta: 'Открыть карту в Halyk',
    },
  },
  {
    slug: 'forte-prime',
    name: 'Forte Prime',
    bank: 'ForteBank',
    logoText: 'FP',
    tagline: 'Бесплатная виртуальная карта с кэшбэком',
    summary:
      'Быстро открываемая виртуальная карта для онлайн-покупок: без визита в отделение, кэшбэк до 3% и бесплатное обслуживание.',
    type: 'debit',
    virtual: true,
    freeServiceYears: 99,
    serviceCostYear: 0,
    currency: '₸ / $',
    cashbackPercent: 3,
    cashbackCapMonth: 8_000,
    minAge: 18,
    maxAge: 65,
    features: ['Бесплатное обслуживание', 'Выпуск виртуальной карты сразу', 'Кэшбэк до 3%', 'Оплата в интернете'],
    pros: ['Полностью бесплатная', 'Виртуальная карта мгновенно', 'Удобна для подписок'],
    cons: ['Кэшбэк скромнее, чем у премиум-карт', 'Нет пластика для некоторых операций'],
    rating: 4.6,
    reviewsCount: 2140,
    updatedAt: '2026-09-17',
    affiliate: {
      label: 'ForteBank',
      url: 'https://fortebank.com/',
      cta: 'Оформить в ForteBank',
    },
  },
  {
    slug: 'bcc-credit',
    name: 'BCC Credit Card',
    bank: 'BCC Bank',
    logoText: 'BC',
    tagline: 'Кредитная карта с льготным периодом до 75 дней',
    summary:
      'Кредитная карта для тех, кто хочет пользоваться заёмными средствами без процентов в рамках льготного периода.',
    type: 'credit',
    serviceCostYear: 12_000,
    currency: '₸',
    cashbackPercent: 1.5,
    cashbackCapMonth: 10_000,
    minAge: 21,
    maxAge: 65,
    incomeRequirement: 'Официальный доход и подтверждение занятости',
    gracePeriodDays: 75,
    features: ['Льготный период до 75 дней', 'Кэшбэк 1,5%', 'Грейс-период на покупки'],
    pros: ['Длинный льготный период', 'Не нужно платить проценты при погашении вовремя'],
    cons: ['Проверка дохода и кредитной истории', 'Есть стоимость обслуживания'],
    rating: 4.3,
    reviewsCount: 860,
    updatedAt: '2026-09-14',
    affiliate: {
      label: 'BCC Bank',
      url: 'https://bcc-bank.kz/',
      cta: 'Оформить в BCC Bank',
    },
  },
  {
    slug: 'freedom-digital',
    name: 'Freedom Digital',
    bank: 'Freedom Bank',
    logoText: 'FD',
    tagline: 'Цифровая карта для интернет-покупок',
    summary:
      'Полностью цифровая карта: выпуск и оплата онлайн, кэшбэк за онлайн-покупки, удобный контроль лимитов в приложении.',
    type: 'debit',
    virtual: true,
    freeServiceYears: 1,
    serviceCostYear: 0,
    currency: '₸ / $',
    cashbackPercent: 2,
    cashbackCapMonth: 6_000,
    minAge: 18,
    maxAge: 70,
    features: ['Цифровой выпуск', 'Кэшбэк за онлайн-покупки', 'Лимиты в приложении', 'Apple Pay / Google Pay'],
    pros: ['Оформление онлайн', 'Прозрачные лимиты', 'Быстрая блокировка при потере'],
    cons: ['Только цифровой формат', 'Кэшбэк ниже, чем у топовых карт'],
    rating: 4.4,
    reviewsCount: 1510,
    updatedAt: '2026-09-12',
    affiliate: {
      label: 'Freedom Bank',
      url: 'https://freedombank.kz/',
      cta: 'Оформить в Freedom',
    },
  },
  {
    slug: 'jusan-virtual',
    name: 'Jusan Virtual',
    bank: 'Jusan Bank',
    logoText: 'JV',
    tagline: 'Виртуальная карта с кэшбэком и рассрочкой 0%',
    summary:
      'Виртуальная карта с оплатой частями у партнёров и кэшбэком. Подходит для онлайн-подписок, поездок и покупок в маркетплейсах.',
    type: 'debit',
    virtual: true,
    freeServiceYears: 2,
    serviceCostYear: 0,
    currency: '₸',
    cashbackPercent: 3,
    cashbackCapMonth: 7_000,
    minAge: 18,
    maxAge: 70,
    features: ['Оплата частями 0%', 'Кэшбэк до 3%', 'Бесплатное обслуживание 2 года', 'Apple Pay'],
    pros: ['Рассрочка 0% у партнёров', 'Бесплатное обслуживание', 'Мгновенный выпуск'],
    cons: ['Акции нужно активировать заранее', 'Ограничения по некоторым операциям'],
    rating: 4.5,
    reviewsCount: 1980,
    updatedAt: '2026-09-21',
    affiliate: {
      label: 'Jusan Bank',
      url: 'https://jusan.kz/',
      cta: 'Оформить в Jusan',
    },
  },
];

export function getCardBySlug(slug: string): CardOffer | undefined {
  return CARD_OFFERS.find((card) => card.slug === slug);
}

export function getFeaturedCards(): CardOffer[] {
  return CARD_OFFERS.filter((card) => card.featured);
}

export function formatType(type: CardOffer['type']): string {
  return type === 'credit' ? 'Кредитная' : 'Дебетовая';
}
