import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { useT } from "@/lib/i18n/useT";
import { EASE_BOUTIQUE } from "@/lib/motion";

export function PortalPage() {
  const { t } = useT();

  return (
    <>
      <Nav />
      <main className="grid min-h-[100svh] place-items-center bg-navy-900 px-6 py-32 text-paper">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_BOUTIQUE }}
          className="w-full max-w-md"
        >
          <p className="eyebrow mb-6">{t("portal.title")}</p>
          <h1 className="font-display text-5xl font-light tracking-mega">
            {t("portal.title")}
          </h1>
          <p className="mt-5 font-sans text-paper/70">{t("portal.sub")}</p>

          <form
            className="mt-10 space-y-4"
            onSubmit={(e) => e.preventDefault()}
            aria-describedby="portal-soon"
          >
            <label className="block">
              <span className="font-mono text-[0.62rem] uppercase tracking-label text-paper/55">
                Email
              </span>
              <input
                type="email"
                disabled
                placeholder="parent@example.com"
                className="mt-2 w-full border border-paper/20 bg-transparent px-4 py-3 font-sans text-paper/60 placeholder:text-paper/30 focus:border-gold focus:outline-none disabled:cursor-not-allowed"
              />
            </label>
            <button
              type="submit"
              disabled
              className="w-full bg-gold/30 px-4 py-3 font-mono text-[0.72rem] uppercase tracking-label text-paper/60"
            >
              Sign in
            </button>
          </form>

          <p
            id="portal-soon"
            className="mt-6 flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-label text-gold-light"
          >
            <span className="h-1.5 w-1.5 bg-gold" aria-hidden />
            {t("portal.soon")}
          </p>

          <Link
            to="/"
            className="mt-12 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-label text-paper/60 transition-colors hover:text-paper"
          >
            ← {t("common.back")}
          </Link>
        </m.div>
      </main>
      <Footer />
    </>
  );
}
