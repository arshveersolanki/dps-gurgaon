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
          <rect width="24" height="16" fill="#000000" />
          <rect y="5.33" width="24" height="5.34" fill="#DD0000" />
          <rect y="10.67" width="24" height="5.33" fill="#FFCE00" />
        </>
      )}
      {id === "es" && (
        <>
          <rect width="24" height="16" fill="#AA151B" />
          <rect y="4" width="24" height="8" fill="#F1BF00" />
        </>
      )}
      {id === "fr" && (
        <>
          <rect width="8" height="16" fill="#0055A4" />
          <rect x="8" width="8" height="16" fill="#FFFFFF" />
          <rect x="16" width="8" height="16" fill="#EF4135" />
        </>
      )}
      <rect width="24" height="16" fill="none" stroke="currentColor" strokeOpacity="0.15" />
    </svg>
  );
}
