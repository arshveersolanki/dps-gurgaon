
import { motion as m } from "framer-motion";
import { useT } from "@/lib/i18n/useT";
import { VIEWPORT } from "@/lib/motion";

export function SilverJubilee() {
  const { t } = useT();
  return (
    <section className="relative border-y border-ochre/30 bg-forest-900 text-paper">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9 }}
        className="shell flex items-center justify-center gap-5 py-6 md:gap-8"
      >
        <span className="hidden h-px w-12 bg-ochre/60 sm:block" />
        <span className="font-display text-2xl font-light tracking-mega text-ochre-light md:text-3xl">
          25
        </span>
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-paper/80 md:text-[0.74rem]">
          {t("jubilee.strip")}
        </span>
        <span className="hidden h-px w-12 bg-ochre/60 sm:block" />
      </m.div>
    </section>
  );
}
