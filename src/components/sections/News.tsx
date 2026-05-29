
import { motion as m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Figure } from "@/components/ui/Figure";
import { useT } from "@/lib/i18n/useT";
import { news, type NewsItem } from "@/lib/content/news";
import { pick } from "@/lib/content/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

function useDateFmt() {
  const { locale } = useT();
  return (iso: string) =>
    new Intl.DateTimeFormat(locale === "hi" ? "hi-IN" : "en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(iso));
}

export function News() {
  const { t, locale } = useT();
  const fmt = useDateFmt();
  const [featured, ...rest] = news;

  return (
    <Section id="news" className="bg-bg">
      <div className="shell">
        <SectionHeading eyebrow={t("news.eyebrow")} title={t("news.title")} />

        <m.div
          variants={stagger(0.1, 0.07)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {/* Featured */}
          <m.article variants={fadeUp} className="group">
            <a href="#" className="block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Figure
                  alt={pick(featured.title, locale)}
                  seed={featured.seed}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 transition-transform duration-700 ease-boutique group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 bg-navy-600 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-label text-paper">
                  {pick(featured.category, locale)}
                </span>
              </div>
              <p className="mt-5 font-mono text-[0.66rem] uppercase tracking-label text-muted">
                {fmt(featured.date)}
              </p>
              <h3 className="mt-3 max-w-xl font-display text-3xl font-light leading-[1.1] tracking-tight2 transition-colors group-hover:text-navy-500">
                {pick(featured.title, locale)}
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-label text-content/70 transition-colors group-hover:text-navy-500">
                {t("news.readMore")}
                <span className="transition-transform duration-500 ease-boutique group-hover:translate-x-1">→</span>
              </span>
            </a>
          </m.article>

          {/* Compact list */}
          <div className="flex flex-col">
            {rest.map((item: NewsItem) => (
              <m.article
                key={item.id}
                variants={fadeUp}
                className="group border-t border-line/15 py-5 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-5"
              >
                <a href="#" className="flex items-start gap-5">
                  <div className="relative aspect-square w-24 shrink-0 overflow-hidden sm:w-28">
                    <Figure
                      alt={pick(item.title, locale)}
                      seed={item.seed}
                      sizes="120px"
                      className="absolute inset-0 transition-transform duration-700 ease-boutique group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-label text-muted">
                      <span className="text-accent">{pick(item.category, locale)}</span>
                      <span className="h-px w-4 bg-line/30" />
                      {fmt(item.date)}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-light leading-snug tracking-tight2 transition-colors group-hover:text-navy-500">
                      {pick(item.title, locale)}
                    </h3>
                  </div>
                </a>
              </m.article>
            ))}
          </div>
        </m.div>
      </div>
    </Section>
  );
}
