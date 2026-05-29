
import { useLocaleStore } from "@/lib/store/locale";
import { useT } from "@/lib/i18n/useT";
import { cn } from "@/lib/cn";

export function LangToggle() {
  const locale = useLocaleStore((s) => s.locale);
  const setLocale = useLocaleStore((s) => s.setLocale);
  const { t } = useT();

  return (
    <div
      role="group"
      aria-label={t("lang.toggle")}
      className="flex border edge font-mono text-[0.66rem] uppercase tracking-[0.18em]"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "px-2.5 py-1.5 transition-colors",
          locale === "en"
            ? "bg-forest-600 text-paper"
            : "ink-70 hover:text-current",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("hi")}
        aria-pressed={locale === "hi"}
        className={cn(
          "px-2.5 py-1.5 font-deva transition-colors",
          locale === "hi"
            ? "bg-forest-600 text-paper"
            : "ink-70 hover:text-current",
        )}
      >
        हि
      </button>
    </div>
  );
}
