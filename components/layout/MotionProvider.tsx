"use client";

import { LazyMotion, MotionConfig, domMax } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads Framer features lazily and forces use of `m.*` (strict) to keep the
 * initial JS bundle small. `reducedMotion="user"` respects OS preferences
 * across every animation in the tree.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
