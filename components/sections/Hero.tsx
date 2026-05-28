"use client";

import { useRef } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Figure } from "@/components/ui/Figure";
import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/useT";
import { EASE_BOUTIQUE } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { t } = useT();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const ease = EASE_BOUTIQUE;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex h-[100svh] min-h-[620px] w-full items-center justify-center overflow-hidden bg-navy-900"
    >
      <m.div style={{ y: bgY }} className="gpu absolute inset-0 scale-110">
        <Figure
          alt="Delhi Public School Gurgaon campus"
          seed={2}
          priority
          sizes="100vw"
          icon="landmark"
          label="Campus Photography · Coming Soon"
          className="h-full w-full"
        />
      </m.div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/55 to-navy-900/90" />

      <m.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <m.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          className="mb-7 flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-label text-gold-light"
        >
          <span className="h-px w-8 bg-gold" />
          {t("hero.jubilee")}
          <span className="h-px w-8 bg-gold" />
        </m.p>

        <m.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease }}
          className="fluid-hero font-display font-light tracking-mega text-paper text-balance"
        >
          {t("hero.name")}
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease }}
          className="mt-6 max-w-xl font-display text-xl italic text-paper/80 md:text-2xl"
        >
          {t("hero.tagline")}
        </m.p>

        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease }}
          className="mt-4 font-mono text-[0.66rem] uppercase tracking-[0.3em] text-paper/55"
        >
          Service Before Self
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#admissions" variant="gold">
            {t("hero.cta.admissions")}
          </Button>
          <Button href="#principal" variant="ghost" className="text-paper">
            {t("hero.cta.explore")}
          </Button>
        </m.div>
      </m.div>

      <m.div
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-label text-paper/55">
          {t("hero.scroll")}
        </span>
        <m.span
          className="block h-10 w-px bg-paper/40"
          animate={reduced ? undefined : { scaleY: [0.3, 1, 0.3] }}
          style={{ transformOrigin: "top" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </m.div>
    </section>
  );
}
