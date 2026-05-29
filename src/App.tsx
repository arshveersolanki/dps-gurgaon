import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Providers } from "@/components/layout/Providers";
import { RootLayout } from "@/components/layout/RootLayout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { AcademicsPage } from "@/pages/AcademicsPage";
import { GlobalPage } from "@/pages/GlobalPage";
import { CampusPage } from "@/pages/CampusPage";
import { NewsPage } from "@/pages/NewsPage";
import { AdmissionsPage } from "@/pages/AdmissionsPage";
import { ContactPage } from "@/pages/ContactPage";
import { PortalPage } from "@/pages/PortalPage";

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
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/global" element={<GlobalPage />} />
          <Route path="/campus" element={<CampusPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portal" element={<PortalPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Providers>
  );
}
