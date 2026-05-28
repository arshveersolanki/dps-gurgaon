import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "gold" | "outline" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const base =
  "group relative inline-flex items-center gap-3 px-7 py-3.5 font-mono text-[0.72rem] font-medium uppercase tracking-label transition-colors duration-500 ease-boutique focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  solid: "bg-navy-600 text-paper hover:bg-navy-700",
  gold: "bg-gold text-navy-900 hover:bg-gold-light",
  outline:
    "border border-content/25 text-content hover:border-content/60 dark:border-paper/25 dark:text-paper",
  ghost: "text-content hover:text-navy-500 dark:text-paper",
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
    const external = href.startsWith("http");
    if (external) {
      return (
        <a className={cls} href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link className={cls} href={href}>
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
