import type { Locale } from "@/lib/store/locale";

/** A string available in both supported locales. */
export interface Localized {
  en: string;
  hi: string;
}

export function pick(value: Localized, locale: Locale): string {
  return value[locale] ?? value.en;
}
