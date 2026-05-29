import { ImagePageHeader } from "@/components/ui/ImagePageHeader";
import { Campuses } from "@/components/sections/Campuses";
import { CommunityOutreach } from "@/components/sections/CommunityOutreach";

export function CampusPage() {
  return (
    <>
      <ImagePageHeader
        image="/img/sections/campus-main.jpg"
        alt="Delhi Public School Gurgaon, Sector 45 main campus building"
        eyebrow="Campus Life"
        title="Three campuses, one ethos"
        intro="Main, Primary and Infant wings across Sectors 45, 47 and 40 — and the outreach programmes that take the school beyond its gates."
      />
      <Campuses hideHeading />
      <CommunityOutreach />
    </>
  );
}
