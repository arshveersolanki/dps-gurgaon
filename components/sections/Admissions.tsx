"use client";

import { m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/useT";
import { entryTracks, steps, fees, feeNote } from "@/lib/content/admissions";
import { contact } from "@/lib/content/campuses";
import { pick } from "@/lib/content/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export function Admissions() {
  const { t, locale } = useT();

  return (
    <Section id="admissions" className="bg-bg">
      <div className="shell">
        <SectionHeading eyebrow={t("adm.eyebrow")} title={t("adm.title")} align="center" />

        {/* Entry points */}
        <m.div
          variants={stagger(0.08, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-px border border-line/15 md:grid-cols-3"
        >
          {entryTracks.map((track) => (
            <m.div key={track.id} variants={fadeUp} className="bg-surface p-7">
              <p className="font-mono text-[0.6rem] uppercase tracking-label text-accent">
                {pick(track.window, locale)}
              </p>
              <h3 className="mt-3 font-display text-2xl font-light tracking-tight2">
                {pick(track.grade, locale)}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                {pick(track.note, locale)}
              </p>
            </m.div>
          ))}
        </m.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Process */}
          <div className="lg:col-span-7">
            <h3 className="eyebrow mb-8">{t("adm.process")}</h3>
            <m.ol
              variants={stagger(0.06, 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="grid gap-px border border-line/15 sm:grid-cols-2"
            >
              {steps.map((s) => (
                <m.li
                  key={s.n}
                  variants={fadeUp}
                  className="group bg-surface p-7 transition-colors hover:bg-surface-2"
                >
                  <span className="font-display text-5xl font-light text-line/25 transition-colors group-hover:text-gold">
                    {s.n}
                  </span>
                  <h4 className="mt-3 font-display text-xl tracking-tight2">
                    {pick(s.title, locale)}
                  </h4>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                    {pick(s.detail, locale)}
                  </p>
                </m.li>
              ))}
            </m.ol>
          </div>

          {/* Fees */}
          <Reveal className="lg:col-span-5">
            <h3 className="eyebrow mb-8">{t("adm.fees")}</h3>
            <div className="border border-line/15">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-line/15 font-mono text-[0.6rem] uppercase tracking-label text-muted">
                    <th className="p-4 font-medium">Stage</th>
                    <th className="p-4 font-medium">Grades</th>
                    <th className="p-4 text-right font-medium">Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((row) => (
                    <tr
                      key={row.grades}
                      className="border-b border-line/10 transition-colors last:border-b-0 hover:bg-surface-2"
                    >
                      <td className="p-4 font-sans text-sm font-medium">{pick(row.stage, locale)}</td>
                      <td className="p-4 font-mono text-xs text-muted">{row.grades}</td>
                      <td className="p-4 text-right font-display text-lg">{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 font-sans text-xs leading-relaxed text-muted">{pick(feeNote, locale)}</p>
          </Reveal>
        </div>
      </div>

      {/* CTA band */}
      <Reveal className="mt-20">
        <div className="bg-navy-900 text-paper">
          <div className="shell flex flex-col items-center gap-8 py-16 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="font-display text-3xl font-light tracking-tight2 md:text-4xl">
                {t("adm.title")}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-block font-mono text-[0.66rem] uppercase tracking-label text-gold-light hover:text-gold"
              >
                {contact.email}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href={`mailto:${contact.email}`} variant="gold">
                {t("adm.cta")}
              </Button>
              <Button href="#footer" variant="ghost" className="text-paper">
                {t("adm.enquire")}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
