import { useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { principal } from "@/lib/content/principal";
import { pick } from "@/lib/content/types";

export function Principal() {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="principal" className="bg-bg">
      <div className="shell" ref={ref}>
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          {/* Real principal portrait — from the school's own brand asset */}
          <Reveal className="md:col-span-5">
            <figure className="relative">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden">
                <img
                  src="/img/principal.jpg"
                  alt={pick(principal.name, locale)}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
                {/* Forest L-shape mark — distinctive frame, not a generic border */}
                <span aria-hidden className="pointer-events-none absolute -bottom-3 -left-3 h-16 w-px bg-forest-600" />
                <span aria-hidden className="pointer-events-none absolute -bottom-3 left-[-12px] h-px w-16 bg-forest-600" />
                <span aria-hidden className="pointer-events-none absolute -top-3 -right-3 h-16 w-px bg-ochre" />
                <span aria-hidden className="pointer-events-none absolute -top-3 right-[-12px] h-px w-16 bg-ochre" />
              </div>
              <figcaption className="mt-6">
                <p className="font-display text-2xl font-light tracking-tight2">
                  {pick(principal.name, locale)}
                </p>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-label text-accent">
                  {pick(principal.role, locale)}
                </p>
                <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                  {t("principal.under")} {pick(principal.director, locale)},{" "}
                  {pick(principal.directorRole, locale)}
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="relative md:col-span-7">
            <div className="absolute -left-6 top-2 hidden h-full w-px bg-line/15 md:block">
              <m.div
                className="absolute left-0 top-0 w-px origin-top bg-forest-600"
                style={{ scaleY: lineScale, height: "100%" }}
              />
            </div>

            <Reveal>
              <p className="eyebrow mb-5">{t("principal.eyebrow")}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <blockquote className="font-display text-3xl font-light leading-[1.15] tracking-tight2 text-balance md:text-[2.5rem]">
                “{pick(principal.pullQuote, locale)}”
              </blockquote>
            </Reveal>

            <div className="mt-10 space-y-6">
              {principal.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="max-w-editorial font-sans text-[1.05rem] leading-relaxed text-muted text-pretty">
                    {pick(p, locale)}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-4">
                <span className="font-display text-xl italic text-content">
                  {pick(principal.name, locale)}
                </span>
                <span className="h-px w-12 bg-forest-600" />
              </div>
              <div className="mt-6">
                <Button href="#footer" variant="outline">
                  {t("principal.read")}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
