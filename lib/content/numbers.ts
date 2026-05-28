import type { Localized } from "@/lib/content/types";

export interface Stat {
  value: number;
  suffix?: string;
  label: Localized;
}

// Mirrors the brief's "DPS in Numbers".
export const stats: Stat[] = [
  { value: 20, suffix: ":1", label: { en: "Student–Teacher Ratio", hi: "छात्र–शिक्षक अनुपात" } },
  { value: 184, label: { en: "Smart Classrooms", hi: "स्मार्ट कक्षाएँ" } },
  { value: 3, label: { en: "Foreign Languages", hi: "विदेशी भाषाएँ" } },
  { value: 20, suffix: "+", label: { en: "Clubs & Societies", hi: "क्लब व समितियाँ" } },
  { value: 14, label: { en: "Specialised Labs", hi: "विशेष प्रयोगशालाएँ" } },
  { value: 7, label: { en: "Exchange Countries", hi: "आदान-प्रदान देश" } },
  { value: 25, label: { en: "Years of Excellence", hi: "उत्कृष्टता के वर्ष" } },
];

export const jubileeYears = 25;
export const established = 2001;
