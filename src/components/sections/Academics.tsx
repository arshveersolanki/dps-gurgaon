import { motion as m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Flag } from "@/components/ui/Flag";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { stages, futureSubjects, languages } from "@/lib/content/academics";
import { pick } from "@/lib/content/types";
import { fadeUp, stagger, lineReveal, VIEWPORT } from "@/lib/motion";

export function Academics({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);

  return (
    <Section id="academics" className="bg-bg">
      <div className="shell">
        {!hideHeading && (
        <m.header
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid items-end gap-6 md:grid-cols-12"
        >
          <div className="md:col-span-8">
            <m.p variants={fadeUp} className="eyebrow mb-5">
              {t("academics.eyebrow")}
            </m.p>
            <h2 className="fluid-h2 font-display font-light tracking-tight2 text-content text-balance">
              <span className="block overflow-hidden pb-[0.12em]">
                <m.span variants={lineReveal} className="block">
                  {t("academics.title")}
                </m.span>
              </span>
            </h2>
          </div>
          <m.p
            variants={fadeUp}
            className="max-w-sm font-sans text-sm leading-relaxed text-muted md:col-span-4"
          >
            From play-led foundational years to streamed senior secondary —
            a fourteen-year arc, one school.
          </m.p>
        </m.header>
        )}

        {/* Journey rail — desktop horizontal, mobile vertical */}
        <m.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="relative mt-20 md:mt-28"
        >
          {/* Desktop: horizontal rail */}
          <div className="relative hidden md:block">
            <span
              aria-hidden
              className="absolute left-0 right-0 top-[60px] h-px bg-forest-600/30"
            />
            <div className="grid grid-cols-5 gap-4">
              {stages.map((s, i) => (
                <m.div
                  key={s.grades}
                  variants={fadeUp}
                  className="group relative flex flex-col items-center text-center"
                >
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Dot on the rail */}
                  <span className="relative my-6 block h-3 w-3 bg-forest-600 transition-transform duration-500 ease-boutique group-hover:scale-150">
                    <span className="absolute -inset-2 border border-forest-600/30 transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
                  </span>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                    {s.grades}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-light leading-tight tracking-tight2">
                    {pick(s.name, locale)}
                  </h3>
                  <p className="mt-3 max-w-[18ch] font-sans text-sm leading-relaxed text-muted">
                    {pick(s.note, locale)}
                  </p>
                </m.div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical stations with left rail */}
          <div className="relative pl-10 md:hidden">
            <span aria-hidden className="absolute left-4 top-0 h-full w-px bg-forest-600/30" />
            <div className="space-y-10">
              {stages.map((s, i) => (
                <m.div key={s.grades} variants={fadeUp} className="relative">
                  <span className="absolute -left-[26px] top-2 h-3 w-3 bg-forest-600" />
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-accent">
                    {String(i + 1).padStart(2, "0")} · {s.grades}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-light leading-tight tracking-tight2">
                    {pick(s.name, locale)}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                    {pick(s.note, locale)}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </m.div>

        {/* Future-ready + Languages */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full border border-line/15 bg-surface p-8">
              <h3 className="eyebrow mb-7">{t("academics.future")}</h3>
              <div className="space-y-7">
                {futureSubjects.map((f, i) => (
                  <div key={i} className="flex gap-5">
                    <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center border border-forest-600/40 text-forest-600">
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

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col border border-line/15 bg-forest-900 p-8 text-paper">
              <h3 className="mb-7 font-mono text-[0.72rem] uppercase tracking-label text-ochre-light">
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
