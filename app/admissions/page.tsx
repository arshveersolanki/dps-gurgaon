"use client";

import { m } from "framer-motion";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Admissions } from "@/components/sections/Admissions";
import { useT } from "@/lib/i18n/useT";
import { EASE_BOUTIQUE } from "@/lib/motion";

export default function AdmissionsPage() {
  const { t } = useT();
  return (
    <>
      <Nav />
      <main>
        <header className="bg-navy-900 px-6 pb-20 pt-40 text-paper">
          <div className="shell">
            <m.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_BOUTIQUE }}
              className="eyebrow mb-5"
            >
              {t("adm.eyebrow")}
            </m.p>
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: EASE_BOUTIQUE }}
              className="fluid-h2 max-w-3xl font-display font-light tracking-mega"
            >
              {t("adm.title")}
            </m.h1>
          </div>
        </header>
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
