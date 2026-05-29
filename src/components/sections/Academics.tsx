
import { motion as m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Flag } from "@/components/ui/Flag";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { stages, futureSubjects, languages } from "@/lib/content/academics";
import { pick } from "@/lib/content/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export function Academics() {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);

  return (
    <Section id="academics" className="bg-bg">
      <div className="shell">
        <SectionHeading eyebrow={t("academics.eyebrow")} title={t("academics.title")} />

        {/* Progression */}
        <m.div
          variants={stagger(0.08, 0.07)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-12 grid gap-px border border-line/15 md:grid-cols-5"
        >
          {stages.map((s) => (
            <m.div
              key={s.grades}
              variants={fadeUp}
              className="group bg-surface p-6 transition-colors hover:bg-surface-2"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-label text-accent">
                {s.grades}
              </p>
              <h3 className="mt-3 font-display text-xl leading-tight tracking-tight2">
                {pick(s.name, locale)}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                {pick(s.note, locale)}
              </p>
            </m.div>
          ))}
        </m.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Future-ready subjects */}
          <Reveal>
            <div className="h-full border border-line/15 bg-surface p-8">
              <h3 className="eyebrow mb-7">{t("academics.future")}</h3>
              <div className="space-y-7">
                {futureSubjects.map((f, i) => (
                  <div key={i} className="flex gap-5">
                    <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center border border-gold/40 text-gold">
                      <Icon name={i === 0 ? "cpu" : "calculator"} size={22} />
                    </span>
                    <div>
                      <h4 className="font-display text-2xl font-light tracking-tight2">
                        {pick(f.title, locale)}
                      </h4>
                      <p className="mt-1.5 font-sans text-sm leading-relaxed text-muted">
                        {pick(f.detail, locale)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Foreign languages */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col border border-line/15 bg-navy-900 p-8 text-paper">
              <h3 className="mb-7 font-mono text-[0.72rem] uppercase tracking-label text-gold-light">
                {t("academics.languages")}
              </h3>
              <div className="grid flex-1 grid-cols-1 gap-px sm:grid-cols-3">
                {languages.map((lang) => (
                  <div
                    key={lang.id}
                    className="flex flex-col items-center justify-center gap-4 border border-paper/10 py-8"
                  >
                    <Flag id={lang.id} className="h-9 w-14 text-paper" />
                    <span className="font-display text-xl">{pick(lang.name, locale)}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-sans text-sm text-paper/60">
                Offered from the middle school through the Lingua Clava programme.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
