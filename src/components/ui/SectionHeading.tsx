
import { motion as m } from "framer-motion";
import { fadeUp, lineReveal, stagger, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "default" | "invert";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "default",
  className,
}: SectionHeadingProps) {
  return (
    <m.header
      variants={stagger(0, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <m.p
          variants={fadeUp}
          className={cn("eyebrow mb-5", tone === "invert" && "text-ochre-light")}
        >
          {eyebrow}
        </m.p>
      )}
      <h2
        className={cn(
          "fluid-h2 font-display font-light tracking-tight2 text-balance",
          tone === "invert" ? "text-paper" : "text-content",
        )}
      >
        <span className="block overflow-hidden pb-[0.12em]">
          <m.span variants={lineReveal} className="block">
            {title}
          </m.span>
        </span>
      </h2>
      {intro && (
        <m.p
          variants={fadeUp}
          className={cn(
            "mt-6 max-w-editorial font-sans text-lg leading-relaxed text-pretty",
            align === "center" && "mx-auto",
            tone === "invert" ? "text-paper/70" : "text-muted",
          )}
        >
          {intro}
        </m.p>
      )}
    </m.header>
  );
}
