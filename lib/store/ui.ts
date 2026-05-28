"use client";

import { create } from "zustand";

interface UIState {
  /** id of the section currently inhabiting the viewport */
  activeSection: string;
  setActiveSection: (id: string) => void;
  /** 0..1 page scroll progress, fed to the nav progress rail */
  scrollProgress: number;
  setScrollProgress: (n: number) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const useUI = create<UIState>((set) => ({
  activeSection: "hero",
  setActiveSection: (id) => set({ activeSection: id }),
  scrollProgress: 0,
  setScrollProgress: (n) => set({ scrollProgress: n }),
  mobileOpen: false,
  setMobileOpen: (open) => set({ mobileOpen: open }),
}));
