import { motion as m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { campuses, contact } from "@/lib/content/campuses";
import { pick } from "@/lib/content/types";
import { fadeUp, VIEWPORT, lineReveal, stagger } from "@/lib/motion";
import { cn } from "@/lib/cn";

const CAMPUS_IMAGES = [
  "/img/sections/campus-main.jpg",
  "/img/sections/campus-primary.jpg",
  "/img/sections/campus-infant.jpg",
];

export function Campuses({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);

  return (
    <Section id="campus" className="bg-bg">
      <div className="shell">
        {!hideHeading && (
        <m.header
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid items-end gap-6 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <m.p variants={fadeUp} className="eyebrow mb-5">
              {t("campus.eyebrow")}
            </m.p>
            <h2 className="fluid-h2 font-display font-light tracking-tight2 text-content text-balance">
              <span className="block overflow-hidden pb-[0.12em]">
                <m.span variants={lineReveal} className="block">
                  {t("campus.title")}
                </m.span>
              </span>
            </h2>
          </div>
          <m.div variants={fadeUp} className="md:col-span-5 md:text-right">
            <Button href={contact.tour360} variant="outline">
              {t("campus.tour")}
            </Button>
          </m.div>
        </m.header>
        )}

        {/* Alternating magazine rows */}
        <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
          {campuses.map((c, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={c.id}>
                <article className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
                  <figure
                    className={cn(
                      "relative aspect-[5/4] overflow-hidden md:col-span-7",
                      flipped ? "md:order-2" : "md:order-1",
                    )}
                  >
                    <img alt={pick(c.name, locale)}
                      src={CAMPUS_IMAGES[i] ?? CAMPUS_IMAGES[0]}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute left-5 top-5 bg-forest-600 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-paper">
                      {c.sector}
                    </span>
                    <span className="absolute bottom-5 right-5 font-display text-7xl font-light leading-none text-paper/90 drop-shadow-[0_2px_8px_rgba(7,32,15,0.6)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </figure>
                  <div className={cn("md:col-span-5", flipped ? "md:order-1 md:pr-8" : "md:order-2 md:pl-6")}>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-accent">
                      {pick(c.wing, locale)}
                    </p>
                    <h3 className="mt-3 font-display text-4xl font-light leading-[1.05] tracking-tight2 md:text-[2.6rem]">
                      {pick(c.name, locale)}
                    </h3>
                    <span className="mt-6 block h-px w-16 bg-forest-600" />
                    <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-muted">
                      {pick(c.address, locale)}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
