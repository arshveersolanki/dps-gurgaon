
import { motion as m } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <m.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}
