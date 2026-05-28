import { cn } from "@/lib/cn";

type FlagId = "de" | "es" | "fr";

export function Flag({ id, className }: { id: FlagId; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={cn("block", className)}
      role="img"
      aria-hidden="true"
    >
      {id === "de" && (
        <>
          <rect width="24" height="16" fill="#1A1A1A" />
          <rect y="5.33" width="24" height="5.34" fill="#D7141A" />
          <rect y="10.67" width="24" height="5.33" fill="#C4952B" />
        </>
      )}
      {id === "es" && (
        <>
          <rect width="24" height="16" fill="#AA151B" />
          <rect y="4" width="24" height="8" fill="#C4952B" />
        </>
      )}
      {id === "fr" && (
        <>
          <rect width="8" height="16" fill="#1B2B5E" />
          <rect x="8" width="8" height="16" fill="#FFFFFF" />
          <rect x="16" width="8" height="16" fill="#D7141A" />
        </>
      )}
      <rect width="24" height="16" fill="none" stroke="currentColor" strokeOpacity="0.15" />
    </svg>
  );
}
