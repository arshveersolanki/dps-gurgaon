import Image from "next/image";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

interface FigureProps {
  src?: string;
  alt: string;
  seed?: number;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** placeholder icon + label, shown until a real photo is dropped in */
  icon?: IconName;
  label?: string;
}

/**
 * Single swap point for imagery. With `src` it renders an optimised next/image;
 * otherwise an intentionally-designed navy/gold placeholder so the layout reads
 * as finished, premium design rather than a missing image.
 */
export function Figure({
  src,
  alt,
  seed = 7,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  icon = "camera",
  label = "Campus Photography · Coming Soon",
}: FigureProps) {
  return (
    <div className={cn("relative overflow-hidden bg-navy-800", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <Placeholder seed={seed} icon={icon} label={label} />
      )}
    </div>
  );
}

function Placeholder({
  seed,
  icon,
  label,
}: {
  seed: number;
  icon: IconName;
  label: string;
}) {
  const angle = 120 + (seed % 60);
  const gx = 24 + (seed % 40);
  const gy = 18 + (seed % 34);
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(120% 120% at ${gx}% ${gy}%, rgba(196,149,43,0.22), transparent 52%), linear-gradient(${angle}deg, #0B1226, #1B2B5E)`,
      }}
      aria-hidden="true"
    >
      <div className="grain absolute inset-0 opacity-50" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
      {/* hairline frame */}
      <div className="absolute inset-3 border border-gold/20" />
      <div className="absolute inset-0 grid place-items-center">
        <Icon name={icon} size={42} className="text-gold/55" />
      </div>
      <span className="absolute inset-x-0 bottom-4 text-center font-mono text-[0.58rem] uppercase tracking-[0.28em] text-paper/45">
        {label}
      </span>
      <span className="absolute right-3 top-3 font-mono text-[0.56rem] tracking-widest text-gold/45">
        DPS·{String(seed).padStart(2, "0")}
      </span>
    </div>
  );
}
