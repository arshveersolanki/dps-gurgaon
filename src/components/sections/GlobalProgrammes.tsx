import { useMemo, useState } from "react";
import { motion as m } from "framer-motion";
import { feature } from "topojson-client";
import { geoEqualEarth, geoPath } from "d3-geo";
import type { FeatureCollection, Geometry } from "geojson";
import type { Topology, GeometryCollection } from "topojson-specification";
import worldData from "world-atlas/countries-110m.json";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { origin, partners, type Partner } from "@/lib/content/programmes";
import { pick } from "@/lib/content/types";
import { EASE_BOUTIQUE, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/cn";

const VB_W = 1000;
const VB_H = 500;

interface CountryProps { name?: string }
const topology = worldData as unknown as Topology<{ countries: GeometryCollection<CountryProps> }>;
const countries = feature(
  topology,
  topology.objects.countries,
) as unknown as FeatureCollection<Geometry, CountryProps>;

// Existing programmes data stores x/y as percentages on an equirectangular grid;
// convert back to real lon/lat for d3-geo projection.
const toLonLat = (xPct: number, yPct: number): [number, number] => [
  (xPct / 100) * 360 - 180,
  90 - (yPct / 100) * 180,
];

export function GlobalProgrammes({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);
  const [active, setActive] = useState<string | null>(null);

  const { pathGen, originPx, partnerPx } = useMemo(() => {
    const proj = geoEqualEarth().fitSize([VB_W, VB_H], countries);
    const pg = geoPath(proj);
    const oxy = proj(toLonLat(origin.x, origin.y)) as [number, number];
    const pxy: Record<string, [number, number]> = {};
    partners.forEach((p) => {
      pxy[p.id] = proj(toLonLat(p.x, p.y)) as [number, number];
    });
    return { pathGen: pg, originPx: oxy, partnerPx: pxy };
  }, []);

  const arc = (p: Partner): string => {
    const [ox, oy] = originPx;
    const [px, py] = partnerPx[p.id];
    const mx = (ox + px) / 2;
    const dist = Math.hypot(px - ox, py - oy);
    const my = Math.min(oy, py) - Math.max(40, dist * 0.32);
    return `M ${ox} ${oy} Q ${mx} ${my} ${px} ${py}`;
  };

  return (
    <Section id="global" className="bg-bg">
      <div className="shell">
        {!hideHeading && (
          <SectionHeading
            eyebrow={t("global.eyebrow")}
            title={t("global.title")}
            intro={t("global.sub")}
            align="center"
          />
        )}

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE_BOUTIQUE }}
          className="relative mx-auto mt-14 max-w-6xl border border-line/15 bg-surface p-3 md:p-5"
        >
          <div className="relative w-full" style={{ aspectRatio: `${VB_W} / ${VB_H}` }}>
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="absolute inset-0 h-full w-full"
              aria-label="World map highlighting DPS Gurgaon exchange partner countries"
            >
              <path
                d={pathGen({ type: "Sphere" }) ?? ""}
                fill="none"
                stroke="rgb(var(--line) / 0.10)"
                strokeWidth={1}
              />
              <g>
                {countries.features.map((f, i) => (
                  <path
                    key={i}
                    d={pathGen(f) ?? ""}
                    fill="rgb(var(--line) / 0.05)"
                    stroke="rgb(var(--line) / 0.30)"
                    strokeWidth={0.4}
                  />
                ))}
              </g>
              <g>
                {partners.map((p) => (
                  <m.path
                    key={`arc-${p.id}`}
                    d={arc(p)}
                    fill="none"
                    stroke={active === p.id ? "#C19A4B" : "#15a876"}
                    strokeOpacity={active === p.id ? 1 : 0.65}
                    strokeWidth={active === p.id ? 2.2 : 1.1}
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: EASE_BOUTIQUE }}
                  />
                ))}
              </g>
              <g>
                <circle cx={originPx[0]} cy={originPx[1]} r={5} fill="#C19A4B" />
                <circle cx={originPx[0]} cy={originPx[1]} r={9} fill="none" stroke="#C19A4B" strokeWidth={1} strokeOpacity={0.55} />
                <text x={originPx[0] + 9} y={originPx[1] + 4} fontSize={11} className="fill-content font-mono">
                  {pick(origin.label, locale)}
                </text>
              </g>
              <g>
                {partners.map((p) => {
                  const [x, y] = partnerPx[p.id];
                  const isActive = active === p.id;
                  return (
                    <g
                      key={`pin-${p.id}`}
                      onMouseEnter={() => setActive(p.id)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(p.id)}
                      onBlur={() => setActive(null)}
                      style={{ cursor: "pointer" }}
                      tabIndex={0}
                    >
                      <circle cx={x} cy={y} r={isActive ? 6 : 4} fill={isActive ? "#C19A4B" : "#155b2e"} />
                      <circle cx={x} cy={y} r={isActive ? 12 : 8} fill="none" stroke={isActive ? "#C19A4B" : "#155b2e"} strokeOpacity={0.45} strokeWidth={1} />
                    </g>
                  );
                })}
              </g>
            </svg>

            {partners.map((p) => {
              if (active !== p.id) return null;
              const [x, y] = partnerPx[p.id];
              const leftPct = (x / VB_W) * 100;
              const topPct = (y / VB_H) * 100;
              return (
                <div
                  key={`tt-${p.id}`}
                  className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+18px)] whitespace-nowrap border border-ochre/50 bg-forest-900 px-3 py-2 text-center"
                  style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                >
                  <span className="block font-sans text-[0.78rem] font-medium text-paper">
                    {pick(p.country, locale)} · {p.city}
                  </span>
                  <span className="mt-0.5 block font-mono text-[0.56rem] uppercase tracking-label text-ochre-light">
                    {pick(p.focus, locale)}
                  </span>
                </div>
              );
            })}
          </div>
        </m.div>

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
                active === p.id ? "border-ochre bg-ochre/10 text-content" : "border-line/20 text-muted hover:text-content",
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
