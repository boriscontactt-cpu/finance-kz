/**
 * Глобальная конфигурация сайта и партнёрских ссылок.
 * Одно место, где меняются домен, тексты и рекламные/партнёрские ссылки.
 */

export const SITE = {
  name: 'Finance KZ',
  shortName: 'Finance KZ',
  url: 'https://finance-kz.kz',
  locale: 'ru_KZ',
  lang: 'ru',
  titleDefault: 'Finance KZ — МФО и банковские карты Казахстана',
  titleTemplate: '%s | Finance KZ',
  description:
    'Finance KZ — информационный справочник по финансам РК: микрофинансовые организации и банковские карты Казахстана. Сравнивайте предложения и выбирайте осознанно.',
  ogImage: '/og-image.svg',
  themeColor: '#0b1220',
  foundedYear: 2026,
} as const;

export const CONTACT = {
  email: 'hello@finance-kz.kz',
  telegram: 'https://t.me/financekz',
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const NAV: NavItem[] = [
  { label: 'МФО Казахстана', href: '/mfo', description: 'Каталог микрофинансовых организаций' },
  { label: 'Банковские карты', href: '/bank-cards', description: 'Дебетовые и кредитные карты банков КЗ' },
  { label: 'Статьи', href: '/articles', description: 'Разборы, гиды и инструкции' },
  { label: 'О проекте', href: '/about', description: 'Кто мы и как мы работаем' },
];

/**
 * Партнёрские (affiliate) ссылки.
 *
 * ВАЖНО ДЛЯ MVP: ссылки-заглушки ведут на главные страницы сайтов партнёров.
 * Перед запуском в прод замените `url` на реальные трекинговые ссылки
 * (CPA/CPS-партнёрки, банки, агентства). Текст кнопки берётся из поля cta.
 */
export type AffiliateLink = {
  label: string;
  url: string;
  cta: string;
};

export const AFFILIATE: Record<string, AffiliateLink> = {
  kaspi: {
    label: 'Kaspi.kz',
    url: 'https://kaspi.kz/',
    cta: 'Открыть на kaspi.kz',
  },
  partnerGeneral: {
    label: 'Партнёрский переход',
    url: 'https://example.com/partners/finance-kz',
    cta: 'Перейти к партнёру',
  },
};

/** Пометка «реклама» для блока партнёрских предложений. */
export const AD_LABEL = 'Реклама';

/** Позиционирование сайта — нейтральное, без обещаний независимости. */
export const TAGLINE = 'Информационный справочник по финансам РК';

/**
 * Обязательная партнёрская пометка для страниц с офферами.
 * Показывается заметно, но не перегружает макет.
 */
export const PARTNER_DISCLOSURE =
  'Партнёрские предложения. При переходе по ссылке мы можем получить вознаграждение. Это не влияет на условия предложения.';

/**
 * Пояснение для страницы организации, когда условия ещё не подтверждены.
 * Показывается вместо пустых блоков «сумма / ставка / срок».
 */
export const MFO_TERMS_HINT =
  'Мы не публикуем суммы, ставки и сроки, пока они не проверены по официальному источнику: решение о займе легко принять по неверной цифре. Все условия — на официальном сайте организации.';
