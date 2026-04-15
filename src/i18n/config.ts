export const locales = ["de", "fr", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
