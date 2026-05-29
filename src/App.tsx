import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Providers } from "@/components/layout/Providers";
import { HomePage } from "@/pages/HomePage";
import { AdmissionsPage } from "@/pages/AdmissionsPage";
import { PortalPage } from "@/pages/PortalPage";

/** Smooth-scroll to the section when the URL contains a hash. */
function HashScroller() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [hash, pathname]);
  return null;
}

export function App() {
  return (
    <Providers>
      <HashScroller />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/portal" element={<PortalPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Providers>
  );
}
