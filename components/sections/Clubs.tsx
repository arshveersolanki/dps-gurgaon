"use client";

import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { clubs } from "@/lib/content/clubs";
import { pick } from "@/lib/content/types";

export function Clubs() {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);
  const trackRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <Section id="clubs" className="overflow-hidden bg-navy-900 text-paper">
      <div className="shell flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow={t("clubs.eyebrow")} title={t("clubs.title")} tone="invert" />
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[0.64rem] uppercase tracking-label text-paper/45 sm:block">
            {t("clubs.hint")}
          </span>
          <div className="flex">
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center border border-paper/20 text-xl transition-colors hover:border-gold hover:text-gold"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center border border-l-0 border-paper/20 text-xl transition-colors hover:border-gold hover:text-gold"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(1.25rem,calc((100vw-1480px)/2+1.25rem))] pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {clubs.map((club) => (
          <article
            key={club.id}
            className="group flex w-[72vw] shrink-0 snap-start flex-col justify-between border border-paper/12 bg-navy-800/60 p-6 transition-colors hover:border-gold/50 sm:w-[44vw] md:w-[30vw] lg:w-[19vw]"
          >
            <div>
              <span className="grid h-12 w-12 place-items-center border border-paper/15 text-gold-light transition-colors group-hover:border-gold">
                <Icon name={club.icon} size={24} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-light leading-tight tracking-tight2">
                {club.name}
              </h3>
            </div>
            <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-boutique group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
              <p className="overflow-hidden pt-4 font-sans text-sm leading-relaxed text-paper/75">
                {pick(club.blurb, locale)}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="shell mt-6">
        <p className="font-mono text-[0.62rem] uppercase tracking-label text-paper/40">
          20 societies · MUN · TEDx · Robotics · Astronomy · Theatre · Music & more
        </p>
      </div>
    </Section>
  );
}
