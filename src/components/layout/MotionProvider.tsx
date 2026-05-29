import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Uses the full Framer Motion runtime directly (components alias `motion as m`).
 * LazyMotion was removed because its strict + lazy feature loading interacted
 * badly with our Vite dev pipeline and left animations stuck at their initial
 * keyframes. `reducedMotion="user"` still respects the OS preference.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
