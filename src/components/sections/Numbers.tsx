import { motion as m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Counter } from "@/components/ui/Counter";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { stats } from "@/lib/content/numbers";
import { pick } from "@/lib/content/types";
import { fadeUp, stagger, VIEWPORT, lineReveal } from "@/lib/motion";

// Each stat takes a different ring accent — restoring the real DPS site's
// multi-colour counter motif but in a refined hand-drawn ring rather than
// a generic shadcn KPI card.
const RING_ACCENTS = [
  { stroke: "#155b2e", text: "text-forest-600", border: "border-forest-600" }, // forest
  { stroke: "#15a876", text: "text-teal-DEFAULT", border: "border-teal-DEFAULT" }, // teal
  { stroke: "#a8340d", text: "text-rust-DEFAULT", border: "border-rust-DEFAULT" }, // rust
  { stroke: "#C19A4B", text: "text-ochre", border: "border-ochre" }, // ochre
  { stroke: "#2c4a5e", text: "text-slate-DEFAULT", border: "border-slate-DEFAULT" }, // slate
] as const;

export function Numbers() {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);

  return (
    <Section id="numbers" className="bg-bg">
      <div className="shell">
        {/* Editorial header — diamond divider like the real site, restrained */}
        <m.header
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto max-w-3xl text-center"
        >
          <m.p variants={fadeUp} className="eyebrow mb-5">
            {t("numbers.eyebrow")}
          </m.p>
          <h2 className="fluid-h2 font-display font-light tracking-tight2 text-content text-balance">
            <span className="block overflow-hidden pb-[0.12em]">
              <m.span variants={lineReveal} className="block">
                {t("numbers.title")}
              </m.span>
            </span>
          </h2>
          <m.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-3 text-line/40">
            <span className="h-px w-12 bg-current" />
            <span className="rotate-45 border border-current p-[3px]" />
            <span className="h-px w-12 bg-current" />
          </m.div>
        </m.header>

        {/* Ring counters — 4-up over 3-up staggered grid like real site */}
        <m.div
          variants={stagger(0.08, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-20 md:grid-cols-4"
        >
          {stats.slice(0, 4).map((stat, i) => (
            <RingCounter
              key={stat.label.en}
              value={stat.value}
              suffix={stat.suffix}
              label={pick(stat.label, locale)}
              accent={RING_ACCENTS[i % RING_ACCENTS.length]}
            />
          ))}
        </m.div>

        {/* second row: 3 centered */}
        <m.div
          variants={stagger(0.08, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto mt-12 grid max-w-[78%] grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-3"
        >
          {stats.slice(4).map((stat, i) => (
            <RingCounter
              key={stat.label.en}
              value={stat.value}
              suffix={stat.suffix}
              label={pick(stat.label, locale)}
              accent={RING_ACCENTS[(i + 4) % RING_ACCENTS.length]}
            />
          ))}
        </m.div>
      </div>
    </Section>
  );
}

interface RingCounterProps {
  value: number;
  suffix?: string;
  label: string;
  accent: (typeof RING_ACCENTS)[number];
}

function RingCounter({ value, suffix, label, accent }: RingCounterProps) {
  // Open-arc ring (gauge-like): leaves a ~70° gap at the bottom-right —
  // distinctive vs the typical closed circle.
  const r = 56;
  const c = 2 * Math.PI * r;
  const visible = 0.82;
  return (
    <m.div variants={fadeUp} className="group flex flex-col items-center text-center">
      <div className="relative h-32 w-32 sm:h-36 sm:w-36">
        <svg viewBox="0 0 128 128" className="absolute inset-0 h-full w-full -rotate-[120deg]">
          {/* subtle base ring */}
          <circle cx="64" cy="64" r={r} fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1.5" className="text-content" />
          {/* accent arc */}
          <circle
            cx="64"
            cy="64"
            r={r}
            fill="none"
            stroke={accent.stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={`${c * visible} ${c}`}
            className="transition-[stroke-width] duration-500 ease-boutique group-hover:[stroke-width:3]"
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className={"font-display text-[2.6rem] font-light leading-none tracking-tight2 sm:text-[3rem] " + accent.text}>
            <Counter value={value} suffix={suffix} />
          </span>
        </div>
      </div>
      <p className="mt-5 max-w-[12rem] font-mono text-[0.62rem] uppercase leading-tight tracking-[0.18em] text-muted">
        {label}
      </p>
    </m.div>
  );
}
