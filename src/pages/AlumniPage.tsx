import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { placements, placementHighlight } from "@/lib/content/alumni";

export function AlumniPage() {
  return (
    <>
      <PageHeader
        eyebrow="Alumni"
        title="Where the school has gone next"
        intro="Eleven years of tracked placement, more than a thousand and four hundred offers across the Indian Institutes, the UK Russell Group, the US Ivy League and beyond."
      />
      <Section id="alumni" className="bg-bg">
        <div className="shell">
          {/* Stat strip */}
          <div className="grid gap-px border border-line/15 md:grid-cols-3">
            <div className="bg-bg p-7">
              <p className="font-display text-5xl font-light text-forest-600">
                {placementHighlight.acceptances}
              </p>
              <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted">
                Tracked acceptances
              </p>
            </div>
            <div className="bg-bg p-7">
              <p className="font-display text-5xl font-light text-forest-600">
                {placementHighlight.years}
              </p>
              <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted">
                Years of record
              </p>
            </div>
            <div className="bg-bg p-7">
              <p className="font-display text-5xl font-light text-forest-600">4</p>
              <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted">
                Continents reached
              </p>
            </div>
          </div>

          {/* Cluster list */}
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {placements.map((p) => (
              <div key={p.region}>
                <p className="eyebrow mb-4">{p.region}</p>
                <ul className="flex flex-wrap gap-2">
                  {p.examples.map((name) => (
                    <li
                      key={name}
                      className="border border-line/20 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <Button
              href={`https://www.dpsgurgaon.org/pdfs/${placementHighlight.source}`}
              variant="outline"
            >
              Read the full placement record
            </Button>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
              PDF · official school source
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
