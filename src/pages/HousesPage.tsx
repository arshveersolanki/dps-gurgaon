import { ImagePageHeader } from "@/components/ui/ImagePageHeader";
import { Section } from "@/components/ui/Section";
import { useLocaleStore } from "@/lib/store/locale";
import { houses } from "@/lib/content/houses";
import { pick } from "@/lib/content/types";

export function HousesPage() {
  const locale = useLocaleStore((s) => s.locale);

  return (
    <>
      <ImagePageHeader
        image="/img/sections/house-function.jpg"
        alt="DPS Gurgaon Jamuna and Jhelum House Function — Seeds of Tomorrow"
        eyebrow="Houses"
        title="Four rivers, one school"
        intro="Every student belongs to one of four houses, named after the rivers that shape the subcontinent. The house culture runs through assemblies, sports, drama and a calendar of inter-house cups."
      />
      <Section id="houses" className="bg-bg">
        <div className="shell">
          <ul className="grid gap-px border border-line/15 md:grid-cols-2">
            {houses.map((h, i) => (
              <li key={h.id} className="relative bg-bg p-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="relative grid h-20 w-20 shrink-0 place-items-center">
                    <svg viewBox="0 0 80 80" className="absolute inset-0">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        fill="none"
                        stroke={h.accent.ring}
                        strokeWidth="1.5"
                        strokeDasharray={`${2 * Math.PI * 36 * 0.85} ${2 * Math.PI * 36}`}
                        transform="rotate(-120 40 40)"
                      />
                    </svg>
                    <span
                      className="font-display text-2xl font-light"
                      style={{ color: h.accent.ring }}
                    >
                      {h.name.charAt(0)}
                    </span>
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted">
                    {String(i + 1).padStart(2, "0")} · {h.river}
                  </span>
                </div>
                <h2
                  className="mt-8 font-display text-4xl font-light tracking-tight2"
                  style={{ color: h.accent.ring }}
                >
                  {h.name}
                </h2>
                <p className="mt-2 font-display text-lg italic text-muted">
                  “{pick(h.motto, locale)}”
                </p>
                <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-muted">
                  {pick(h.blurb, locale)}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-3xl font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
            Ravi and Satluj names are pending school confirmation; Jamuna and Jhelum are drawn
            from the school's 2026 Seeds of Tomorrow House Function.
          </p>
        </div>
      </Section>
    </>
  );
}
