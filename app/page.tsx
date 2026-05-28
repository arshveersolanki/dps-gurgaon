import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SilverJubilee } from "@/components/sections/SilverJubilee";
import { Numbers } from "@/components/sections/Numbers";
import { Principal } from "@/components/sections/Principal";
import { Academics } from "@/components/sections/Academics";
import { GlobalProgrammes } from "@/components/sections/GlobalProgrammes";
import { Labs } from "@/components/sections/Labs";
import { Clubs } from "@/components/sections/Clubs";
import { Campuses } from "@/components/sections/Campuses";
import { News } from "@/components/sections/News";
import { Events } from "@/components/sections/Events";
import { Admissions } from "@/components/sections/Admissions";
import { CommunityOutreach } from "@/components/sections/CommunityOutreach";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SilverJubilee />
        <Numbers />
        <Principal />
        <Academics />
        <GlobalProgrammes />
        <Labs />
        <Clubs />
        <Campuses />
        <News />
        <Events />
        <Admissions />
        <CommunityOutreach />
      </main>
      <Footer />
    </>
  );
}
