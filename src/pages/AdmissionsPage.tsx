import { PageHeader } from "@/components/ui/PageHeader";
import { Admissions } from "@/components/sections/Admissions";
import { useT } from "@/lib/i18n/useT";

export function AdmissionsPage() {
  const { t } = useT();
  return (
    <>
      <PageHeader
        eyebrow={t("adm.eyebrow")}
        title={t("adm.title")}
        intro="Three entry points (Pre-Nursery & Nursery, Class XI, Lateral), one process, and a school office ready to help you through it."
      />
      <Admissions hideHeading />
    </>
  );
}
