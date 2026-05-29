import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

/** Wraps every route with the shared nav + footer chrome. */
export function RootLayout() {
  const { pathname, hash } = useLocation();

  // Scroll to top on route change (skip if there's a hash — that's handled by HashScroller).
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
