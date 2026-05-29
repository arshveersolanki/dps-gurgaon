import { ImagePageHeader } from "@/components/ui/ImagePageHeader";
import { Principal } from "@/components/sections/Principal";

export function AboutPage() {
  return (
    <>
      <ImagePageHeader
        image="/img/sections/sports.jpg"
        alt="A DPS Gurgaon sports day moment"
        eyebrow="The School"
        title="Twenty-five years of meaningful impact"
        intro="A note from Ms Rati Chugh, Principal, under the leadership of Director Ms Aditi Misra — and the Silver Jubilee story behind it."
      />
      <Principal />
    </>
  );
}
