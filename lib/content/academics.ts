import type { Localized } from "@/lib/content/types";

export interface Stage {
  grades: string;
  name: Localized;
  note: Localized;
}

export const stages: Stage[] = [
  {
    grades: "Pre-Nursery – Prep",
    name: { en: "Foundational Years", hi: "आधारभूत वर्ष" },
    note: { en: "Play-led, inquiry-first early learning.", hi: "खेल-आधारित प्रारंभिक शिक्षा।" },
  },
  {
    grades: "I – V",
    name: { en: "Primary", hi: "प्राथमिक" },
    note: { en: "Literacy, numeracy and curiosity.", hi: "साक्षरता, संख्यात्मकता व जिज्ञासा।" },
  },
  {
    grades: "VI – VIII",
    name: { en: "Middle", hi: "माध्यमिक" },
    note: { en: "Concepts, labs and the first clubs.", hi: "अवधारणाएँ, प्रयोगशालाएँ व क्लब।" },
  },
  {
    grades: "IX – X",
    name: { en: "Secondary", hi: "उच्च" },
    note: { en: "CBSE board foundation with depth.", hi: "गहनता के साथ सीबीएसई आधार।" },
  },
  {
    grades: "XI – XII",
    name: { en: "Senior Secondary", hi: "वरिष्ठ माध्यमिक" },
    note: { en: "Science, Commerce & Humanities streams.", hi: "विज्ञान, वाणिज्य व मानविकी।" },
  },
];

export interface Highlight {
  title: Localized;
  detail: Localized;
}

export const futureSubjects: Highlight[] = [
  {
    title: { en: "Artificial Intelligence", hi: "आर्टिफिशियल इंटेलिजेंस" },
    detail: {
      en: "A future-facing subject offered as part of the CBSE curriculum.",
      hi: "सीबीएसई पाठ्यक्रम का भविष्योन्मुख विषय।",
    },
  },
  {
    title: { en: "Applied Mathematics", hi: "अनुप्रयुक्त गणित" },
    detail: {
      en: "Real-world mathematics for commerce, data and the social sciences.",
      hi: "वाणिज्य, डेटा व समाज विज्ञान हेतु व्यावहारिक गणित।",
    },
  },
];

export interface Language {
  id: "de" | "es" | "fr";
  name: Localized;
}

export const languages: Language[] = [
  { id: "de", name: { en: "German", hi: "जर्मन" } },
  { id: "es", name: { en: "Spanish", hi: "स्पेनिश" } },
  { id: "fr", name: { en: "French", hi: "फ्रेंच" } },
];
