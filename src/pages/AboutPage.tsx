import { PageHeader } from "@/components/ui/PageHeader";
import { Principal } from "@/components/sections/Principal";

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The School"
        title="Twenty-five years of meaningful impact"
        intro="A note from Ms Rati Chugh, Principal, under the leadership of Director Ms Aditi Misra — and the Silver Jubilee story behind it."
      />
      <Principal />
    </>
  );
}
