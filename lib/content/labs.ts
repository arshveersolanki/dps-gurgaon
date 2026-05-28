import type { Localized } from "@/lib/content/types";
import type { IconName } from "@/components/ui/Icon";

export interface Lab {
  id: string;
  name: Localized;
  icon: IconName;
  featured?: boolean;
  note?: Localized;
}

// The 14 specialised labs named in the brief. Atal Tinkering Lab is featured.
export const labs: Lab[] = [
  {
    id: "atl",
    name: { en: "Atal Tinkering Lab", hi: "अटल टिंकरिंग लैब" },
    icon: "cpu",
    featured: true,
    note: {
      en: "A Government of India innovation makerspace — 3D printing, robotics, IoT and electronics for student inventors.",
      hi: "भारत सरकार का नवाचार मेकरस्पेस — 3डी प्रिंटिंग, रोबोटिक्स, IoT व इलेक्ट्रॉनिक्स।",
    },
  },
  { id: "physics", name: { en: "Physics", hi: "भौतिकी" }, icon: "atom" },
  { id: "chemistry", name: { en: "Chemistry", hi: "रसायन" }, icon: "flask" },
  { id: "biology", name: { en: "Biology", hi: "जीव विज्ञान" }, icon: "dna" },
  { id: "sci-mid", name: { en: "Science · Middle", hi: "विज्ञान · माध्यमिक" }, icon: "beaker" },
  { id: "sci-sr", name: { en: "Science · Senior", hi: "विज्ञान · वरिष्ठ" }, icon: "microscope" },
  { id: "math", name: { en: "Mathematics", hi: "गणित" }, icon: "calculator" },
  { id: "it", name: { en: "Information Technology", hi: "सूचना प्रौद्योगिकी" }, icon: "monitor" },
  { id: "language", name: { en: "Language", hi: "भाषा" }, icon: "language" },
  { id: "fineart", name: { en: "Fine Art", hi: "ललित कला" }, icon: "brush" },
  { id: "fashion", name: { en: "Fashion Technology", hi: "फैशन प्रौद्योगिकी" }, icon: "shirt" },
  { id: "psychology", name: { en: "Psychology", hi: "मनोविज्ञान" }, icon: "brain" },
  { id: "discovery", name: { en: "Discovery", hi: "डिस्कवरी" }, icon: "compass" },
  { id: "scrap", name: { en: "Scrap", hi: "स्क्रैप" }, icon: "recycle" },
];
