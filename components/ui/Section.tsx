"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useUI } from "@/lib/store/ui";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** vertical rhythm; set false for full-bleed sections that manage their own */
  pad?: boolean;
}

export function Section({ id, children, className, pad = true }: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) useUI.getState().setActiveSection(id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [id]);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative scroll-mt-24",
        pad && "py-24 md:py-36",
        className,
      )}
    >
      {children}
    </section>
  );
}
