import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "ochre" | "outline" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const base =
  "group relative inline-flex items-center gap-3 px-7 py-3.5 font-mono text-[0.72rem] font-medium uppercase tracking-label transition-colors duration-500 ease-boutique focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  solid: "bg-forest-600 text-paper hover:bg-forest-700",
  ochre: "bg-ochre text-paper hover:bg-ochre-dark",
  outline:
    "border border-content/25 text-content hover:border-content/60 dark:border-paper/25 dark:text-paper",
  ghost: "text-content hover:text-forest-500 dark:text-paper",
};

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block translate-x-0 transition-transform duration-500 ease-boutique group-hover:translate-x-1"
    >
      →
    </span>
  );
}

export function Button({
  children,
  variant = "solid",
  className,
  href,
}: BaseProps & { href?: string }) {
  const cls = cn(base, variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );
  if (href) {
    const isHttp = href.startsWith("http");
    const isAnchor = href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isHttp || isAnchor) {
      return (
        <a
          className={cls}
          href={href}
          {...(isHttp ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {content}
        </a>
      );
    }
    return (
      <Link className={cls} to={href}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cls} type="button">
      {content}
    </button>
  );
}
