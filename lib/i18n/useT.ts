"use client";

import { useLocaleStore } from "@/lib/store/locale";
import { translate, type TranslationKey } from "@/lib/i18n/dict";

export function useT(): {
  t: (key: TranslationKey) => string;
  locale: "en" | "hi";
} {
  const locale = useLocaleStore((s) => s.locale);
  return {
    locale,
    t: (key: TranslationKey) => translate(locale, key),
  };
}
