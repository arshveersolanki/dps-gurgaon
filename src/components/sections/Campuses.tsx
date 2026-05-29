
import { motion as m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Figure } from "@/components/ui/Figure";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { campuses, contact } from "@/lib/content/campuses";
import { pick } from "@/lib/content/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export function Campuses() {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);

  return (
    <Section id="campus" className="bg-bg">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t("campus.eyebrow")} title={t("campus.title")} />
          <Reveal>
            <Button href={contact.tour360} variant="outline">
              {t("campus.tour")}
            </Button>
          </Reveal>
        </div>

        <m.div
          variants={stagger(0.1, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {campuses.map((c, i) => (
            <m.article key={c.id} variants={fadeUp} className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Figure
                  alt={pick(c.name, locale)}
                  seed={10 + i * 12}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  icon="landmark"
                  label="Campus Photography · Coming Soon"
                  className="absolute inset-0 transition-transform duration-700 ease-boutique group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 bg-forest-900/85 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-label text-ochre-light backdrop-blur-sm">
                  {c.sector}
                </span>
              </div>
              <div className="mt-5 border-t border-line/15 pt-4">
                <h3 className="font-display text-2xl font-light tracking-tight2">
                  {pick(c.name, locale)}
                </h3>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-label text-accent">
                  {pick(c.wing, locale)}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                  {pick(c.address, locale)}
                </p>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </Section>
  );
}
