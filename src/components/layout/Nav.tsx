import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LangToggle } from "@/components/layout/LangToggle";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { NAV } from "@/components/layout/navItems";
import { useUI } from "@/lib/store/ui";
import { useT } from "@/lib/i18n/useT";
import { cn } from "@/lib/cn";

/** Returns true if the current route matches a nav target (ignoring hashes). */
function routeMatches(currentPath: string, to: string): boolean {
  const path = to.split("#")[0] || "/";
  if (path === "/") return currentPath === "/";
  return currentPath === path || currentPath.startsWith(path + "/");
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const scrollProgress = useUI((s) => s.scrollProgress);
  const setMobileOpen = useUI((s) => s.setMobileOpen);
  const { t } = useT();
  const { pathname } = useLocation();

  // Home hero is the only place that wants the over-photo paper text colour;
  // every other route gets a solid (light or themed) bar with content-coloured text.
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !onHome;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-boutique",
          solid
            ? "border-b border-line/15 bg-bg/85 text-content backdrop-blur-md supports-[backdrop-filter]:bg-bg/70"
            : "border-b border-transparent text-paper",
        )}
      >
        <div className="shell flex h-[74px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const isActive = routeMatches(pathname, item.to);
              return (
                <div key={item.key} className="group relative">
                  <Link
                    to={item.to}
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
                          to={c.to}
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
              to="/portal"
              className="hidden items-center gap-2 whitespace-nowrap border edge-mid px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] transition-colors hover:border-ochre hover:text-ochre md:inline-flex"
            >              {t("nav.portal")}
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
