import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LangToggle } from "@/components/layout/LangToggle";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { NAV } from "@/components/layout/navItems";
import { useUI } from "@/lib/store/ui";
import { useT } from "@/lib/i18n/useT";
import { cn } from "@/lib/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const active = useUI((s) => s.activeSection);
  const scrollProgress = useUI((s) => s.scrollProgress);
  const setMobileOpen = useUI((s) => s.setMobileOpen);
  const { t } = useT();
  const navRef = useRef<HTMLElement>(null);

  // Solid bar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close flyouts on Escape + click outside
  useEffect(() => {
    if (!openKey) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenKey(null);
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenKey(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openKey]);

  // Close when the active section changes — the user actually navigated.
  useEffect(() => {
    setOpenKey(null);
  }, [active]);

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

          <nav
            ref={navRef}
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
            onMouseLeave={() => setOpenKey(null)}
          >
            {NAV.map((item) => {
              const isActive = item.href === `#${active}`;
              const isOpen = openKey === item.key;
              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenKey(item.key)}
                >
                  <a
                    href={item.href}
                    aria-haspopup={item.children ? "menu" : undefined}
                    aria-expanded={item.children ? isOpen : undefined}
                    onClick={() => setOpenKey(null)}
                    onFocus={() => item.children && setOpenKey(item.key)}
                    className={cn(
                      "relative flex items-center gap-1.5 whitespace-nowrap px-2.5 py-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] transition-colors",
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
                        "absolute inset-x-3 bottom-1 h-px origin-left bg-ochre transition-transform duration-500 ease-boutique",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>

                  {item.children && (
                    <div
                      role="menu"
                      className={cn(
                        "absolute left-0 top-full z-10 w-60 border border-line/15 bg-surface text-content shadow-xl",
                        "transition-all duration-200 ease-out",
                        isOpen
                          ? "visible translate-y-0 opacity-100"
                          : "pointer-events-none invisible translate-y-1 opacity-0",
                      )}
                    >
                      <span className="block border-b border-line/10 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-label text-accent">
                        {t(item.key)}
                      </span>
                      {item.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          role="menuitem"
                          onClick={() => setOpenKey(null)}
                          className="block px-4 py-2.5 font-sans text-sm text-content/80 transition-colors hover:bg-surface-2 hover:text-content"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              to="/portal"
              className="hidden items-center gap-2 whitespace-nowrap border edge-mid px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] transition-colors hover:border-ochre hover:text-ochre md:inline-flex"
            >
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
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-ochre"
          style={{ scaleX: scrollProgress }}
          aria-hidden
        />
      </header>

      <MobileDrawer />
    </>
  );
}
