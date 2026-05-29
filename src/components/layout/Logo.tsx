import { Link } from "react-router-dom";
import { useT } from "@/lib/i18n/useT";
import { cn } from "@/lib/cn";

/** Custom lamp-of-knowledge crest + bilingual wordmark. Sharp, no rounding. */
export function Logo({ compact = false }: { compact?: boolean }) {
  const { t } = useT();
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="DPS Gurgaon — home">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center border edge-mid">
        <span className="absolute inset-[3px] border border-gold/50" />
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3.2c2.6 1.1 2.6 3.9 1.2 5.2 1.9.5 3.2 2.1 3.2 4.1 0 2.6-2.4 4.3-4.4 4.3s-4.4-1.7-4.4-4.3c0-2 1.3-3.6 3.2-4.1C9.4 7.1 9.4 4.3 12 3.2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <path d="M8 19.5h8M9 21.3h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </span>
      <span className={cn("flex flex-col leading-none", compact && "hidden sm:flex")}>
        <span className="font-display text-[1.05rem] font-medium tracking-tight2">
          {t("brand.line1")}
        </span>
        <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
          {t("brand.line2")}
        </span>
      </span>
    </Link>
  );
}
