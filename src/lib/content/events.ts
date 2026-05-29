import type { Localized } from "@/lib/content/types";

export interface EventItem {
  id: string;
  date: string; // ISO
  title: Localized;
  detail: Localized;
  tag: Localized;
}

export const events: EventItem[] = [
  {
    id: "founders-day",
    date: "2026-07-18",
    title: { en: "Silver Jubilee Founders' Day", hi: "रजत जयंती संस्थापक दिवस" },
    detail: {
      en: "A whole-school commemoration of twenty-five years of service.",
      hi: "सेवा के पच्चीस वर्षों का सम्पूर्ण-विद्यालय स्मरणोत्सव।",
    },
    tag: { en: "Flagship", hi: "प्रमुख" },
  },
  {
    id: "investiture",
    date: "2026-08-05",
    title: { en: "Investiture Ceremony", hi: "अलंकरण समारोह" },
    detail: {
      en: "The new student council takes its oath of service.",
      hi: "नई छात्र परिषद सेवा की शपथ लेती है।",
    },
    tag: { en: "Ceremony", hi: "समारोह" },
  },
  {
    id: "mun-2026",
    date: "2026-09-19",
    title: { en: "DPS Model UN 2026", hi: "डीपीएस मॉडल यूएन 2026" },
    detail: {
      en: "Three days of diplomacy across twelve simulated committees.",
      hi: "बारह समितियों में तीन दिवसीय कूटनीति।",
    },
    tag: { en: "Conference", hi: "सम्मेलन" },
  },
  {
    id: "annual-day",
    date: "2026-12-12",
    title: { en: "Annual Day · Rangmanch", hi: "वार्षिकोत्सव · रंगमंच" },
    detail: {
      en: "An evening of music, theatre and dance on the main stage.",
      hi: "मुख्य मंच पर संगीत, रंगमंच व नृत्य की एक संध्या।",
    },
    tag: { en: "Showcase", hi: "प्रदर्शन" },
  },
];
