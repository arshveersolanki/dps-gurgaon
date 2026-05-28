"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LangToggle } from "@/components/layout/LangToggle";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { useUI } from "@/lib/store/ui";
import { useT } from "@/lib/i18n/useT";
import type { TranslationKey } from "@/lib/i18n/dict";
import { cn } from "@/lib/cn";

interface NavLink {
  key: TranslationKey;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV: NavLink[] = [
  {
    key: "nav.about",
    href: "#principal",
    children: [
      { label: "Principal's Message", href: "#principal" },
      { label: "DPS in Numbers", href: "#numbers" },
      { label: "Our Campuses", href: "#campus" },
    ],
  },
  {
    key: "nav.academics",
    href: "#academics",
    children: [
      { label: "Curriculum", href: "#academics" },
      { label: "Labs & Innovation", href: "#labs" },
      { label: "Clubs & Societies", href: "#clubs" },
    ],
  },
  { key: "nav.global", href: "#global" },
  {
    key: "nav.campusLife",
    href: "#clubs",
    children: [
      { label: "Clubs & Societies", href: "#clubs" },
      { label: "Our Campuses", href: "#campus" },
      { label: "Community Outreach", href: "#outreach" },
    ],
  },
  { key: "nav.news", href: "#news" },
  { key: "nav.admissions", href: "#admissions" },
  { key: "nav.contact", href: "#footer" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const active = useUI((s) => s.activeSection);
  const scrollProgress = useUI((s) => s.scrollProgress);
  const setMobileOpen = useUI((s) => s.setMobileOpen);
  const { t } = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-boutique",
          scrolled
            ? "border-b border-line/15 bg-bg/85 text-content backdrop-blur-md supports-[backdrop-filter]:bg-bg/70"
            : "border-b border-transparent text-paper",
        )}
      >
        <div className="shell flex h-[74px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const isActive = item.href === `#${active}`;
              return (
                <div key={item.key} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex items-center gap-1.5 px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] transition-colors",
                      isActive ? "text-current" : "ink-70 hover:text-current",
                    )}
                  >
                    {t(item.key)}
                    {item.children && (
                      <span aria-hidden className="text-[0.6em] opacity-60">
                        ▾
                      </span>
                    )}
                    <span
                      className={cn(
                        "absolute inset-x-3 bottom-1 h-px origin-left bg-gold transition-transform duration-500 ease-boutique",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </Link>

                  {item.children && (
                    <div className="invisible absolute left-0 top-full w-60 translate-y-1 border border-line/15 bg-surface text-content opacity-0 shadow-xl transition-all duration-300 ease-boutique group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="block border-b border-line/10 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-label text-accent">
                        {t(item.key)}
                      </span>
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="block px-4 py-2.5 font-sans text-sm text-content/80 transition-colors hover:bg-surface-2 hover:text-content"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href="/portal"
              className="hidden items-center gap-2 border edge-mid px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] transition-colors hover:border-gold hover:text-gold md:inline-flex"
            >
              <span className="h-1.5 w-1.5 bg-gold" aria-hidden />
              {t("nav.portal")}
            </Link>
            <div className="hidden sm:block">
              <LangToggle />
            </div>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={t("nav.menu")}
              className="flex h-9 w-9 items-center justify-center border edge lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <m.div
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gold"
          style={{ scaleX: scrollProgress }}
          aria-hidden
        />
      </header>

      <MobileDrawer />
    </>
  );
}
