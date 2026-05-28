import type { Localized } from "@/lib/content/types";

export interface Partner {
  id: string;
  country: Localized;
  city: string;
  focus: Localized;
  /** equirectangular position: x = lon%, y = lat% (0..100) */
  x: number;
  y: number;
}

// Origin — Gurgaon.
export const origin = {
  label: { en: "Gurgaon, India", hi: "गुड़गांव, भारत" } as Localized,
  x: 71.4,
  y: 34.1,
};

export const partners: Partner[] = [
  { id: "de", country: { en: "Germany", hi: "जर्मनी" }, city: "Berlin", focus: { en: "STEM & language immersion", hi: "विज्ञान व भाषा" }, x: 52.9, y: 21.6 },
  { id: "fr", country: { en: "France", hi: "फ़्रांस" }, city: "Paris", focus: { en: "Arts & francophone exchange", hi: "कला व फ्रैंकोफोन" }, x: 50.6, y: 24.1 },
  { id: "pl", country: { en: "Poland", hi: "पोलैंड" }, city: "Warsaw", focus: { en: "History & civic dialogue", hi: "इतिहास व संवाद" }, x: 55.3, y: 21.1 },
  { id: "dk", country: { en: "Denmark", hi: "डेनमार्क" }, city: "Copenhagen", focus: { en: "Sustainability & design", hi: "स्थिरता व डिज़ाइन" }, x: 52.6, y: 18.8 },
  { id: "es", country: { en: "Spain", hi: "स्पेन" }, city: "Madrid", focus: { en: "Language & cultural studies", hi: "भाषा व संस्कृति" }, x: 49.0, y: 27.6 },
  { id: "ch", country: { en: "Switzerland", hi: "स्विट्ज़रलैंड" }, city: "Zürich", focus: { en: "Research & alpine ecology", hi: "अनुसंधान व पारिस्थितिकी" }, x: 52.3, y: 24.0 },
  { id: "fi", country: { en: "Finland", hi: "फ़िनलैंड" }, city: "Helsinki", focus: { en: "Pedagogy & innovation", hi: "शिक्षाशास्त्र व नवाचार" }, x: 57.1, y: 14.4 },
  { id: "jp", country: { en: "Japan", hi: "जापान" }, city: "Tokyo", focus: { en: "RWYC heritage & robotics", hi: "विरासत व रोबोटिक्स" }, x: 88.3, y: 29.9 },
  { id: "au", country: { en: "Australia", hi: "ऑस्ट्रेलिया" }, city: "Sydney", focus: { en: "Marine & environmental science", hi: "समुद्री व पर्यावरण विज्ञान" }, x: 86.9, y: 63.9 },
  { id: "us", country: { en: "United States", hi: "संयुक्त राज्य" }, city: "Washington", focus: { en: "Leadership & STEM", hi: "नेतृत्व व विज्ञान" }, x: 22.8, y: 28.3 },
  { id: "it", country: { en: "Italy", hi: "इटली" }, city: "Rome", focus: { en: "Art history & classics", hi: "कला इतिहास व क्लासिक्स" }, x: 53.5, y: 26.7 },
];
