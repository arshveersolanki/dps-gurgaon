import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { campuses, contact } from "@/lib/content/campuses";
import { pick } from "@/lib/content/types";
import { cn } from "@/lib/cn";

const CAMPUS_IMAGES = [
  "/img/sections/campus-main.jpg",
  "/img/sections/campus-primary.jpg",
  "/img/sections/campus-infant.jpg",
];

export function Campuses({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);

  return (
    <Section id="campus" className="bg-bg">
      <div className="shell">
        {!hideHeading && (
          <header className="grid items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow mb-5">{t("campus.eyebrow")}</p>
              <h2 className="fluid-h2 font-display font-light tracking-tight2 text-content text-balance">
                {t("campus.title")}
              </h2>
            </div>
            <div className="md:col-span-5 md:text-right">
              <Button href={contact.tour360} variant="outline">
                {t("campus.tour")}
              </Button>
            </div>
          </header>
        )}

        {/* Alternating magazine rows — clean text-first layout, no overlay text */}
        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {campuses.map((c, i) => {
            const flipped = i % 2 === 1;
            return (
              <article
                key={c.id}
                className="grid items-center gap-10 md:grid-cols-12 md:gap-16"
              >
                <figure
                  className={cn(
                    "relative aspect-[5/4] overflow-hidden md:col-span-7",
                    flipped ? "md:order-2" : "md:order-1",
                  )}
                >
                  <img alt={`${pick(c.name, locale)}, DPS Gurgaon ${c.sector}`}
                    src={CAMPUS_IMAGES[i] ?? CAMPUS_IMAGES[0]}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <div
                  className={cn(
                    "md:col-span-5",
                    flipped ? "md:order-1 md:pr-6" : "md:order-2 md:pl-6",
                  )}
                >
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-forest-600">
                    {String(i + 1).padStart(2, "0")} · {c.sector}
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-light leading-[1.05] tracking-tight2 md:text-[2.6rem]">
                    {pick(c.name, locale)}
                  </h3>
                  <p className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted">
                    {pick(c.wing, locale)}
                  </p>
                  <span className="mt-6 block h-px w-16 bg-forest-600" />
                  <address className="mt-6 max-w-md font-sans text-base not-italic leading-relaxed text-muted">
                    {pick(c.address, locale)}
                  </address>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
