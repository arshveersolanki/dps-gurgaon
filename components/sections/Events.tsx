"use client";

import { m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useT } from "@/lib/i18n/useT";
import { events } from "@/lib/content/events";
import { pick } from "@/lib/content/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export function Events() {
  const { t, locale } = useT();

  const parts = (iso: string) => {
    const d = new Date(iso);
    const loc = locale === "hi" ? "hi-IN" : "en-IN";
    return {
      day: new Intl.DateTimeFormat(loc, { day: "2-digit" }).format(d),
      month: new Intl.DateTimeFormat(loc, { month: "short" }).format(d).toUpperCase(),
      year: new Intl.DateTimeFormat(loc, { year: "numeric" }).format(d),
    };
  };

  return (
    <Section id="events" className="bg-surface-2">
      <div className="shell">
        <SectionHeading eyebrow={t("events.eyebrow")} title={t("events.title")} />

        <m.ol
          variants={stagger(0.1, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 border-t border-line/15"
        >
          {events.map((e) => {
            const d = parts(e.date);
            return (
              <m.li
                key={e.id}
                variants={fadeUp}
                className="group grid grid-cols-1 items-baseline gap-4 border-b border-line/15 py-8 transition-colors hover:bg-bg md:grid-cols-12 md:gap-6 md:px-4"
              >
                <div className="flex items-baseline gap-3 md:col-span-3">
                  <span className="font-display text-5xl font-light leading-none tracking-tight2">
                    {d.day}
                  </span>
                  <span className="font-mono text-[0.66rem] uppercase leading-tight tracking-label text-accent">
                    {d.month}
                    <br />
                    {d.year}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl font-light tracking-tight2">
                    {pick(e.title, locale)}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-muted">{pick(e.detail, locale)}</p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-block border border-line/25 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-label text-muted transition-colors group-hover:border-gold group-hover:text-content">
                    {pick(e.tag, locale)}
                  </span>
                </div>
              </m.li>
            );
          })}
        </m.ol>
      </div>
    </Section>
  );
}
