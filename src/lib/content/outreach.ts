import type { Localized } from "@/lib/content/types";

export interface Initiative {
  id: string;
  name: string;
  tag: Localized;
  blurb: Localized;
}

export const outreach: Initiative[] = [
  {
    id: "shiksha-kendra",
    name: "Shiksha Kendra",
    tag: { en: "Non-formal Education", hi: "अनौपचारिक शिक्षा" },
    blurb: {
      en: "A non-formal education outreach bringing learning to children beyond the classroom — the heart of Service Before Self.",
      hi: "कक्षा से परे बच्चों तक शिक्षा पहुँचाने वाला अनौपचारिक शिक्षा अभियान — स्वयं से पहले सेवा का मर्म।",
    },
  },
  {
    id: "hum-saarthi",
    name: "Hum Saarthi",
    tag: { en: "Community Outreach", hi: "सामुदायिक सेवा" },
    blurb: {
      en: "Student-led community service partnering with neighbourhoods around our campuses.",
      hi: "हमारे कैंपसों के आसपास के समुदायों के साथ छात्र-नेतृत्व वाली सेवा।",
    },
  },
  {
    id: "dofe",
    name: "Duke of Edinburgh",
    tag: { en: "Award Programme", hi: "पुरस्कार कार्यक्रम" },
    blurb: {
      en: "The International Award for Young People — service, skill, adventure and physical challenge.",
      hi: "युवाओं हेतु अंतर्राष्ट्रीय पुरस्कार — सेवा, कौशल, साहस व शारीरिक चुनौती।",
    },
  },
];

// Institutional partners & collaborations.
export const collaborations: string[] = [
  "UNIC",
  "RWYC Japan",
  "British Council",
  "Duke of Edinburgh",
  "TERI",
  "FICCI",
  "tGELF",
  "ICS",
  "ICTRC",
  "Rotary",
];
