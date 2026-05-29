import { ImagePageHeader } from "@/components/ui/ImagePageHeader";
import { GlobalProgrammes } from "@/components/sections/GlobalProgrammes";

export function GlobalPage() {
  return (
    <>
      <ImagePageHeader
        image="/img/sections/global-trip.jpg"
        alt="DPS Gurgaon students on the Indo-French exchange visit"
        eyebrow="Global Programmes"
        title="A school without borders"
        intro="Student exchanges and cultural immersions with eleven partner nations across Europe, the Americas, the Asia-Pacific and beyond."
      />
      <GlobalProgrammes hideHeading />
    </>
  );
}
