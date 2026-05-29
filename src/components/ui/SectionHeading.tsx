import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "default" | "invert";
  className?: string;
}

/** Static section heading — no entrance theatre. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "default",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-5", tone === "invert" && "text-ochre-light")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "fluid-h2 font-display font-light tracking-tight2 text-balance",
          tone === "invert" ? "text-paper" : "text-content",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-6 max-w-editorial font-sans text-lg leading-relaxed text-pretty",
            align === "center" && "mx-auto",
            tone === "invert" ? "text-paper/70" : "text-muted",
          )}
        >
          {intro}
        </p>
      )}
    </header>
  );
}
