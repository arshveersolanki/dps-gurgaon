
import { motion as m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { stats, jubileeYears } from "@/lib/content/numbers";
import { pick } from "@/lib/content/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export function Numbers() {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);

  return (
    <Section id="numbers" className="bg-navy-900 text-paper">
      <div className="shell">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeading
              eyebrow={t("numbers.eyebrow")}
              title={t("numbers.title")}
              tone="invert"
            />
          </div>
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="flex items-baseline gap-4 md:col-span-5 md:justify-end"
          >
            <span className="fluid-stat font-display font-light leading-none text-gold">
              <Counter value={jubileeYears} />
            </span>
            <span className="max-w-[7rem] font-mono text-[0.7rem] uppercase leading-tight tracking-label text-paper/65">
              Years of Service · Silver Jubilee
            </span>
          </m.div>
        </div>

        <m.div
          variants={stagger(0.1, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-1 gap-px border-t border-paper/12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat) => (
            <m.div
              key={stat.label.en}
              variants={fadeUp}
              className="group border-b border-paper/12 py-9 transition-colors hover:bg-paper/[0.03] sm:px-6"
            >
              <p className="font-display text-6xl font-light leading-none text-paper md:text-7xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-4 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper/60">
                <span className="h-px w-6 bg-gold transition-all duration-500 ease-boutique group-hover:w-10" />
                {pick(stat.label, locale)}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </Section>
  );
}
