import { PageHeader } from "@/components/ui/PageHeader";
import { News } from "@/components/sections/News";
import { Events } from "@/components/sections/Events";

export function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & Events"
        title="The school in motion"
        intro="The latest from across our campuses — board results, house functions, exchange dispatches, what's next on the calendar."
      />
      <News />
      <Events />
    </>
  );
}
