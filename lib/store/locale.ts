"use client";

import { create } from "zustand";

export type Locale = "en" | "hi";

const STORAGE_KEY = "dps-locale";

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
  init: () => void;
}

function apply(locale: Locale): void {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("lang", locale);
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* non-fatal */
  }
}

export const useLocaleStore = create<LocaleState>((set, get) => ({
  locale: "en",
  setLocale: (locale) => {
    apply(locale);
    set({ locale });
  },
  toggle: () => {
    const next: Locale = get().locale === "en" ? "hi" : "en";
    apply(next);
    set({ locale: next });
  },
  init: () => {
    if (typeof window === "undefined") return;
    let stored: Locale | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    } catch {
      stored = null;
    }
    const locale: Locale = stored ?? "en";
    apply(locale);
    set({ locale });
  },
}));
