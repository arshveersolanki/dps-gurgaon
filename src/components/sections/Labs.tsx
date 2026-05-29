
import { motion as m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { labs } from "@/lib/content/labs";
import { pick } from "@/lib/content/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export function Labs() {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);
  const featured = labs.find((l) => l.featured);
  const rest = labs.filter((l) => !l.featured);

  return (
    <Section id="labs" className="bg-surface">
      <div className="shell">
        <SectionHeading eyebrow={t("labs.eyebrow")} title={t("labs.title")} />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Featured — Atal Tinkering Lab */}
          {featured && (
            <Reveal className="lg:col-span-5">
              <div className="relative flex h-full flex-col justify-between overflow-hidden border border-ochre/40 bg-forest-900 p-8 text-paper">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(90% 90% at 80% 0%, rgba(193,154,75,0.16), transparent 55%)",
                  }}
                />
                <div className="relative">
                  <span className="inline-block bg-ochre px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-label text-forest-900">
                    {t("labs.featured")}
                  </span>
                  <span className="mt-8 grid h-14 w-14 place-items-center border border-ochre/40 text-ochre-light">
                    <Icon name={featured.icon} size={28} />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-light tracking-tight2">
                    {pick(featured.name, locale)}
                  </h3>
                  {featured.note && (
                    <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-paper/70">
                      {pick(featured.note, locale)}
                    </p>
                  )}
                </div>
                <p className="relative mt-8 font-mono text-[0.58rem] uppercase tracking-label text-ochre-light/80">
                  Govt. of India · NITI Aayog Initiative
                </p>
              </div>
            </Reveal>
          )}

          {/* Remaining labs */}
          <m.div
            variants={stagger(0.04, 0.04)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="grid grid-cols-2 gap-px self-start border border-line/15 sm:grid-cols-3 lg:col-span-7"
          >
            {rest.map((lab) => (
              <m.div
                key={lab.id}
                variants={fadeUp}
                className="group flex flex-col gap-3 bg-bg p-5 transition-colors hover:bg-surface-2"
              >
                <span className="text-forest-400 transition-colors group-hover:text-ochre">
                  <Icon name={lab.icon} size={26} />
                </span>
                <span className="font-display text-base leading-tight tracking-tight2">
                  {pick(lab.name, locale)}
                </span>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </Section>
  );
}
