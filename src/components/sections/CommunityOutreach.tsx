
import { motion as m } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { useT } from "@/lib/i18n/useT";
import { useLocaleStore } from "@/lib/store/locale";
import { outreach, collaborations } from "@/lib/content/outreach";
import { pick } from "@/lib/content/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

const icons: Record<string, IconName> = {
  "shiksha-kendra": "sparkles",
  "hum-saarthi": "handshake",
  dofe: "award",
};

export function CommunityOutreach() {
  const { t } = useT();
  const locale = useLocaleStore((s) => s.locale);

  return (
    <Section id="outreach" className="bg-surface">
      <div className="shell">
        <SectionHeading
          eyebrow={t("outreach.eyebrow")}
          title={t("outreach.title")}
          intro={t("outreach.sub")}
        />

        <m.div
          variants={stagger(0.1, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-12 grid gap-px border border-line/15 md:grid-cols-3"
        >
          {outreach.map((o) => (
            <m.article
              key={o.id}
              variants={fadeUp}
              className="group flex flex-col bg-bg p-8 transition-colors hover:bg-surface-2"
            >
              <span className="grid h-12 w-12 place-items-center border border-ochre/40 text-ochre">
                <Icon name={icons[o.id] ?? "sparkles"} size={24} />
              </span>
              <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-label text-accent">
                {pick(o.tag, locale)}
              </p>
              <h3 className="mt-2 font-display text-2xl font-light tracking-tight2">
                {o.name}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                {pick(o.blurb, locale)}
              </p>
            </m.article>
          ))}
        </m.div>

        {/* Collaborations */}
        <div className="mt-14 border-t border-line/15 pt-10">
          <p className="mb-6 text-center font-mono text-[0.62rem] uppercase tracking-label text-muted">
            {t("footer.collab")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {collaborations.map((c) => (
              <span
                key={c}
                className="font-display text-lg font-light tracking-tight2 text-content/55 transition-colors hover:text-content"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
