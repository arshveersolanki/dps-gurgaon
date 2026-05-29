import { motion as m } from "framer-motion";
import { EASE_BOUTIQUE } from "@/lib/motion";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

/** Forest band at the top of every non-home route. */
export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="relative isolate overflow-hidden bg-forest-900 px-6 pb-16 pt-36 text-paper md:pb-20 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(70% 60% at 85% 10%, rgba(193,154,75,0.35), transparent 55%), radial-gradient(60% 60% at 0% 100%, rgba(21,168,118,0.18), transparent 60%)",
        }}
      />
      <div className="shell relative">
        <m.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_BOUTIQUE }}
          className="mb-5 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-ochre-light"
        >
          <span className="h-px w-10 bg-ochre" />
          {eyebrow}
        </m.p>
        <m.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.7, ease: EASE_BOUTIQUE }}
          className="fluid-h2 max-w-4xl font-display font-light tracking-mega text-balance"
        >
          {title}
        </m.h1>
        {intro && (
          <m.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.7, ease: EASE_BOUTIQUE }}
            className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-paper/75"
          >
            {intro}
          </m.p>
        )}
      </div>
    </header>
  );
}
