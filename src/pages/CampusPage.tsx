import { PageHeader } from "@/components/ui/PageHeader";
import { Campuses } from "@/components/sections/Campuses";
import { CommunityOutreach } from "@/components/sections/CommunityOutreach";

export function CampusPage() {
  return (
    <>
      <PageHeader
        eyebrow="Campus Life"
        title="Three campuses, one ethos"
        intro="Main, Primary and Infant wings across Sectors 45, 47 and 40 — and the outreach programmes that take the school beyond its gates."
      />
      <Campuses hideHeading />
      <CommunityOutreach />
    </>
  );
}
