import { ImagePageHeader } from "@/components/ui/ImagePageHeader";
import { Academics } from "@/components/sections/Academics";
import { Labs } from "@/components/sections/Labs";
import { Clubs } from "@/components/sections/Clubs";

export function AcademicsPage() {
  return (
    <>
      <ImagePageHeader
        image="/img/sections/classroom.jpg"
        alt="A Mathematics lab session at DPS Gurgaon"
        eyebrow="Academics"
        title="A curriculum with real range"
        intro="From play-led foundational years through CBSE board prep into streamed senior secondary. Fourteen labs, twenty societies, future-ready subjects."
      />
      <Academics hideHeading />
      <Labs />
      <Clubs />
    </>
  );
}
