
import { create } from "zustand";

export type Theme = "light" | "dark";

const STORAGE_KEY = "dps-theme";

interface ThemeState {
  theme: Theme;
  ready: boolean;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
  init: () => void;
}

function apply(theme: Theme): void {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage unavailable — non-fatal */
  }
}

export const useTheme = create<ThemeState>((set, get) => ({
  theme: "light",
  ready: false,
  setTheme: (theme) => {
    apply(theme);
    set({ theme });
  },
  toggle: () => {
    const next: Theme = get().theme === "dark" ? "light" : "dark";
    apply(next);
    set({ theme: next });
  },
  init: () => {
    if (typeof window === "undefined") return;
    let stored: Theme | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    } catch {
      stored = null;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme: Theme = stored ?? (prefersDark ? "dark" : "light");
    apply(theme);
    set({ theme, ready: true });
  },
}));
