import { useState } from "react";
import { news } from "@/lib/content/news";
import { useLocaleStore } from "@/lib/store/locale";
import { pick } from "@/lib/content/types";
import { cn } from "@/lib/cn";

/**
 * The signature green "News" band from the real DPS Gurgaon site, restyled.
 * A solid forest tab sits flush-left, then a marquee of the latest
 * headlines scrolls right-to-left. Pauses on hover.
 */
export function NewsTicker() {
  const locale = useLocaleStore((s) => s.locale);
  const [paused, setPaused] = useState(false);

  // Two passes side by side so the marquee loops seamlessly.
  const items = [...news, ...news];

  return (
    <section
      aria-label="Latest news"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative isolate flex items-stretch border-b border-forest-700 bg-forest-600 text-paper"
    >
      <div className="relative z-10 flex shrink-0 items-center gap-3 bg-forest-700 px-6 py-3.5">
        <span className="block h-1.5 w-1.5 bg-ochre" aria-hidden />
        <span className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.28em]">
          Latest News
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div
          className={cn(
            "flex w-max items-center gap-12 whitespace-nowrap py-3.5 pr-12",
            "animate-ticker",
          )}
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {items.map((item, i) => (
            <a
              key={`${item.id}-${i}`}
              href="#news"
              className="group flex items-center gap-4 font-sans text-sm text-paper/85 transition-colors hover:text-ochre"
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ochre-light">
                {new Date(item.date).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
              <span className="max-w-[60ch] truncate font-medium">
                {pick(item.title, locale)}
              </span>
              <span aria-hidden className="block h-1 w-1 rounded-full bg-paper/35" />
            </a>
          ))}
        </div>
        {/* Edge fades for premium feel */}
        <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-forest-600 to-transparent" />
        <span aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-forest-600 to-transparent" />
      </div>
    </section>
  );
}
