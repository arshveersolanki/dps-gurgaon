import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as m, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { EASE_BOUTIQUE } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface Slide {
  src: string;
  tagline: { en: string; hi: string };
}

const SLIDES: Slide[] = [
  { src: "/img/slider/01.jpg", tagline: { en: "Striving towards meaningful impact", hi: "सार्थक प्रभाव की ओर" } },
  { src: "/img/slider/02.jpg", tagline: { en: "Ready to surge ahead", hi: "आगे बढ़ने को तत्पर" } },
  { src: "/img/slider/03.jpg", tagline: { en: "Service Before Self", hi: "स्वयं से पहले सेवा" } },
  { src: "/img/slider/04.jpg", tagline: { en: "Twenty-five years, one promise", hi: "पच्चीस वर्ष, एक वचन" } },
  { src: "/img/slider/05.jpg", tagline: { en: "Rooted in service, reaching the world", hi: "सेवा में निहित, विश्व तक" } },
  { src: "/img/slider/06.jpg", tagline: { en: "Where curiosity has room to run", hi: "जहाँ जिज्ञासा को मिले विस्तार" } },
];

const SLIDE_MS = 6000;
const total = SLIDES.length;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), SLIDE_MS);
    return () => clearInterval(id);
  }, [paused, reduced]);

  const current = SLIDES[index];

  return (
    <section
      id="hero"
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-forest-900"
    >
      <AnimatePresence mode="sync">
        <m.div
          key={current.src}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE_BOUTIQUE }}
          className="absolute inset-0"
        >
          <img
            src={current.src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </m.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/75 via-forest-900/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-transparent" />

      {/* Top-left jubilee callout */}
      <div className="absolute left-6 top-[92px] z-10 hidden items-center gap-3 md:flex">
        <span className="h-px w-8 bg-ochre" />
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.32em] text-paper">
          {t("hero.jubilee")}
        </span>
      </div>

      {/* Vertical brand strip */}
      <div
        className="pointer-events-none absolute bottom-7 left-6 z-10 hidden md:block"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.5em] text-paper/55">
          DPS · Sector 45 · Est. 2001 · Gurugram
        </span>
      </div>

      {/* Content — asymmetric bottom-left */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 md:pb-24">
        <div className="shell">
          <div className="max-w-3xl pl-0 md:pl-14">
            <h1 className="fluid-hero font-display font-light tracking-mega text-paper text-balance">
              {t("hero.name")}
            </h1>

            <div className="mt-7 h-[3.2em] overflow-hidden">
              <AnimatePresence mode="wait">
                <m.p
                  key={current.src}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.7, ease: EASE_BOUTIQUE }}
                  className="font-display text-2xl italic leading-[1.3] text-paper/90 md:text-[1.7rem]"
                >
                  {current.tagline[locale]}
                </m.p>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#admissions" variant="ochre">
                {t("hero.cta.admissions")}
              </Button>
              <Button href="#principal" variant="ghost" className="text-paper">
                {t("hero.cta.explore")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicator + counter */}
      <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-6 md:flex">
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-paper/65">
          <span className="text-ochre">{String(index + 1).padStart(2, "0")}</span>
          {" / "}
          {String(total).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "h-px transition-all duration-500 ease-boutique",
                i === index ? "w-10 bg-ochre" : "w-5 bg-paper/35 hover:bg-paper/65",
              )}
            />
          ))}
        </div>
      </div>

      {/* Corner accents */}
      <span className="pointer-events-none absolute left-0 top-[74px] h-12 w-px bg-ochre/70" />
      <span className="pointer-events-none absolute right-0 top-[74px] h-12 w-px bg-ochre/70" />
    </section>
  );
}
