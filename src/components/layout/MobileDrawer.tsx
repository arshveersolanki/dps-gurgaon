import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion as m } from "framer-motion";
import { NAV } from "@/components/layout/navItems";
import { LangToggle } from "@/components/layout/LangToggle";
import { useUI } from "@/lib/store/ui";
import { useT } from "@/lib/i18n/useT";
import { EASE_BOUTIQUE } from "@/lib/motion";

export function MobileDrawer() {
  const open = useUI((s) => s.mobileOpen);
  const setOpen = useUI((s) => s.setMobileOpen);
  const { t } = useT();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          className="fixed inset-0 z-[90] flex flex-col bg-forest-900 text-paper lg:hidden"
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.5, ease: EASE_BOUTIQUE }}
        >
          <div className="flex h-[74px] items-center justify-between px-6">
            <span className="font-mono text-[0.7rem] uppercase tracking-label text-ochre-light">
              {t("brand.line2")}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("nav.close")}
              className="font-mono text-[0.72rem] uppercase tracking-label hover:text-ochre"
            >
              {t("nav.close")} ✕
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-6" aria-label="Mobile">
            {NAV.map((item, i) => (
              <m.div
                key={item.key}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.05, ease: EASE_BOUTIQUE }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-paper/10 py-4 font-display text-3xl font-light tracking-tight2 transition-colors hover:text-ochre"
                >
                  <span className="font-mono text-[0.7rem] text-ochre/70">0{i + 1}</span>
                  {t(item.key)}
                </a>
              </m.div>
            ))}
          </nav>

          <div className="flex items-center justify-between gap-4 border-t border-paper/10 px-6 py-6">
            <Link
              to="/portal"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 border border-paper/30 px-5 py-3 font-mono text-[0.7rem] uppercase tracking-label hover:border-ochre hover:text-ochre"
            >
              <span className="h-1.5 w-1.5 bg-ochre" aria-hidden />
              {t("nav.portal")}
            </Link>
            <LangToggle />
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
