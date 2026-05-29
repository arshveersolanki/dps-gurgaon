import { Link } from "react-router-dom";
import { useTheme } from "@/lib/store/theme";

/**
 * Real DPS Gurgaon wordmark + dual crest, pulled from the school's own brand
 * assets in the mirror. White lockup is used over the dark hero band; the
 * colour lockup takes over on the rest of the (light) site.
 */
export function Logo() {
  const theme = useTheme((s) => s.theme);
  const ready = useTheme((s) => s.ready);
  const useWhite = !ready || theme === "dark";
  const src = useWhite ? "/img/logo/logo-wht.png" : "/img/logo/logo1.jpg";

  return (
    <Link to="/" className="group flex items-center" aria-label="DPS Gurgaon — home">
      <img
        src={src}
        alt="Delhi Public School, Sector 45, Gurgaon"
        width={210}
        height={44}
        className="h-11 w-auto"
      />
    </Link>
  );
}
