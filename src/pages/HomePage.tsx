import { Link } from "react-router-dom";
import { Hero } from "@/components/sections/Hero";
import { NewsTicker } from "@/components/sections/NewsTicker";
import { Numbers } from "@/components/sections/Numbers";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { campuses } from "@/lib/content/campuses";
import { principal } from "@/lib/content/principal";
import { pick } from "@/lib/content/types";

const CAMPUS_IMG: Record<string, string> = {
  main: "/img/sections/campus-main.jpg",
  primary: "/img/sections/campus-primary.jpg",
  infant: "/img/sections/campus-infant.jpg",
};

export function HomePage() {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);

  return (
    <>
      <Hero />
      <NewsTicker />
      <Numbers />

      {/* Principal teaser — real photo + lead into /about */}
      <Section id="home-principal" className="bg-bg">
        <div className="shell grid gap-12 md:grid-cols-12 md:gap-16">
          <figure className="relative aspect-[4/5] overflow-hidden md:col-span-5">
            <img alt={`${pick(principal.name, locale)}, Principal of DPS Gurgaon`}
              src="/img/principal.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="md:col-span-7 md:pl-6">
            <p className="eyebrow mb-5">{t("principal.eyebrow")}</p>
            <blockquote className="font-display text-3xl font-light leading-[1.15] tracking-tight2 text-balance md:text-[2.4rem]">
              “{pick(principal.pullQuote, locale)}”
            </blockquote>
            <p className="mt-8 font-display text-lg italic text-content">
              {pick(principal.name, locale)} — {pick(principal.role, locale)}
            </p>
            <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
              {t("principal.under")} {pick(principal.director, locale)},{" "}
              {pick(principal.directorRole, locale)}
            </p>
            <div className="mt-10">
              <Button href="/about" variant="outline">
                {t("principal.read")}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Three campuses teaser strip — photo-led */}
      <section className="bg-surface-2 py-24 md:py-32">
        <div className="shell">
          <div className="grid items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow mb-5">{t("campus.eyebrow")}</p>
              <h2 className="fluid-h2 font-display font-light tracking-tight2 text-content text-balance">
                {t("campus.title")}
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Button href="/campus" variant="ghost">
                View all campuses
              </Button>
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {campuses.map((c, i) => (
              <Link
                key={c.id}
                to="/campus"
                className="group block focus-visible:outline-offset-4"
              >
                <figure className="relative aspect-[4/5] overflow-hidden">
                  <img alt={`${pick(c.name, locale)}, ${c.sector}`}
                    src={CAMPUS_IMG[c.id]}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-900/90 via-forest-900/30 to-transparent" />
                  <figcaption className="absolute inset-x-5 bottom-5 text-paper">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ochre-light">
                      {String(i + 1).padStart(2, "0")} · {c.sector}
                    </p>
                    <p className="mt-1 font-display text-2xl font-light tracking-tight2">
                      {pick(c.name, locale)}
                    </p>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global teaser — photo of an actual trip + lead into /global */}
      <Section id="home-global" className="bg-bg">
        <div className="shell grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow mb-5">{t("global.eyebrow")}</p>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight2 md:text-5xl">
              {t("global.title")}
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-muted">
              Eleven partner nations across Europe, the Americas and the Asia-Pacific —
              year-round student exchanges, language immersions and cultural visits.
            </p>
            <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-forest-600">
              {t("global.tagline")}
            </p>
            <div className="mt-10">
              <Button href="/global" variant="outline">
                See the world map
              </Button>
            </div>
          </div>
          <figure className="relative aspect-[5/4] overflow-hidden md:col-span-7">
            <img alt="DPS Gurgaon students on the Indo-French immersion trip"
              src="/img/sections/global-trip.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </Section>

      {/* Admissions strip — full-bleed photo with overlaid CTA */}
      <section className="relative isolate overflow-hidden text-paper">
        <img alt="DPS Gurgaon Founders' Day, Silver Jubilee year"
          src="/img/sections/founders.jpg"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <span aria-hidden className="absolute inset-0 -z-10 bg-forest-900/75" />
        <div className="shell py-24 md:py-32">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow mb-5 text-ochre-light">{t("adm.eyebrow")}</p>
              <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight2 md:text-5xl">
                {t("adm.title")}
              </h2>
              <p className="mt-5 max-w-xl font-sans text-base text-paper/80">
                Three entry points, one process. Pre-Nursery & Nursery, Class XI stream
                selection, and lateral admissions against available seats.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <Button href="/admissions" variant="ochre">
                Begin Admissions
              </Button>
              <Button href="/contact" variant="ghost" className="text-paper">
                Talk to the school
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
