
import { useEffect, type ReactNode } from "react";
import { useTheme } from "@/lib/store/theme";
import { useLocaleStore } from "@/lib/store/locale";
import { useUI } from "@/lib/store/ui";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    useTheme.getState().init();
    useLocaleStore.getState().init();
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        useUI.getState().setScrollProgress(max > 0 ? el.scrollTop / max : 0);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <>{children}</>;
}
