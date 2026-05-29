import { PageHeader } from "@/components/ui/PageHeader";
import { GlobalProgrammes } from "@/components/sections/GlobalProgrammes";

export function GlobalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Global Programmes"
        title="A school without borders"
        intro="Student exchanges and cultural immersions with eleven partner nations across Europe, the Americas, the Asia-Pacific and beyond."
      />
      <GlobalProgrammes hideHeading />
    </>
  );
}
