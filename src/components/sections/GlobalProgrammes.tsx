
import { useState } from "react";
import { motion as m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { origin, partners, type Partner } from "@/lib/content/programmes";
import { pick } from "@/lib/content/types";
import { EASE_BOUTIQUE, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/cn";

// viewBox is 100 x 50 (equirectangular). x = lon%, y(view) = lat% * 0.5.
const vy = (latPct: number) => latPct * 0.5;

function arcPath(p: Partner): string {
  const ox = origin.x;
  const oy = vy(origin.y);
  const px = p.x;
  const py = vy(p.y);
  const mx = (ox + px) / 2;
  const dist = Math.hypot(px - ox, py - oy);
  const my = Math.min(oy, py) - dist * 0.28 - 2;
  return `M ${ox} ${oy} Q ${mx} ${my} ${px} ${py}`;
}

export function GlobalProgrammes() {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);
  const [active, setActive] = useState<string | null>(null);

  return (
    <Section id="global" className="bg-surface">
      <div className="shell">
        <SectionHeading
          eyebrow={t("global.eyebrow")}
          title={t("global.title")}
          intro={t("global.sub")}
          align="center"
        />

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE_BOUTIQUE }}
          className="relative mx-auto mt-14 max-w-5xl border border-line/15 bg-bg p-3 md:p-5"
        >
          <div className="relative aspect-[2/1] w-full">
            <svg
              viewBox="0 0 100 50"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <g className="text-line" stroke="currentColor" strokeOpacity="0.12" strokeWidth="0.08">
                {Array.from({ length: 11 }, (_, i) => (
                  <line key={`v${i}`} x1={i * 10} y1={0} x2={i * 10} y2={50} />
                ))}
                {Array.from({ length: 6 }, (_, i) => (
                  <line key={`h${i}`} x1={0} y1={i * 10} x2={100} y2={i * 10} />
                ))}
              </g>
              {partners.map((p) => (
                <m.path
                  key={`arc-${p.id}`}
                  d={arcPath(p)}
                  fill="none"
                  stroke={active === p.id ? "#C4952B" : "#3D5396"}
                  strokeWidth={active === p.id ? 0.4 : 0.18}
                  strokeOpacity={active === p.id ? 1 : 0.55}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: EASE_BOUTIQUE }}
                />
              ))}
            </svg>

            {/* Origin pin */}
            <Pin x={origin.x} y={origin.y} origin label={pick(origin.label, locale)} />

            {/* Partner pins */}
            {partners.map((p) => (
              <button
                key={p.id}
                type="button"
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(p.id)}
                onBlur={() => setActive(null)}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                aria-label={`${pick(p.country, locale)} — ${pick(p.focus, locale)}`}
              >
                <span
                  className={cn(
                    "block rounded-full transition-all duration-300",
                    active === p.id
                      ? "h-3 w-3 bg-gold ring-4 ring-gold/25"
                      : "h-2 w-2 bg-navy-400",
                  )}
                />
                {active === p.id && (
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap border border-gold/40 bg-navy-900 px-2.5 py-1.5 text-center">
                    <span className="block font-sans text-[0.7rem] font-medium text-paper">
                      {pick(p.country, locale)}
                    </span>
                    <span className="block font-mono text-[0.54rem] uppercase tracking-label text-gold-light">
                      {pick(p.focus, locale)}
                    </span>
                  </span>
                )}
              </button>
            ))}
          </div>
        </m.div>

        {/* Country chips — accessible + touch-friendly */}
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
          {partners.map((p) => (
            <button
              key={p.id}
              type="button"
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(p.id)}
              onBlur={() => setActive(null)}
              className={cn(
                "border px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] transition-colors",
                active === p.id
                  ? "border-gold bg-gold/10 text-content"
                  : "border-line/20 text-muted hover:text-content",
              )}
            >
              {pick(p.country, locale)}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center font-mono text-[0.64rem] uppercase tracking-label text-accent">
          {t("global.tagline")}
        </p>
      </div>
    </Section>
  );
}

function Pin({
  x,
  y,
  origin,
  label,
}: {
  x: number;
  y: number;
  origin?: boolean;
  label: string;
}) {
  return (
    <span
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span className="relative block">
        <span className="block h-3 w-3 rounded-full bg-gold ring-4 ring-gold/30" />
        {origin && (
          <span className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap font-mono text-[0.56rem] uppercase tracking-label text-content">
            {label}
          </span>
        )}
      </span>
    </span>
  );
}
