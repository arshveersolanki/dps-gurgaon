import { ImagePageHeader } from "@/components/ui/ImagePageHeader";
import { News } from "@/components/sections/News";
import { Events } from "@/components/sections/Events";

export function NewsPage() {
  return (
    <>
      <ImagePageHeader
        image="/img/sections/founders-event.jpg"
        alt="Students at a DPS Gurgaon school event"
        eyebrow="News & Events"
        title="The school in motion"
        intro="The latest from across our campuses — board results, house functions, exchange dispatches, what's next on the calendar."
      />
      <News />
      <Events />
    </>
  );
}
