import type { TranslationKey } from "@/lib/i18n/dict";

export interface NavLink {
  key: TranslationKey;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV: NavLink[] = [
  {
    key: "nav.about",
    href: "#principal",
    children: [
      { label: "Principal's Message", href: "#principal" },
      { label: "DPS in Numbers", href: "#numbers" },
      { label: "Our Campuses", href: "#campus" },
    ],
  },
  {
    key: "nav.academics",
    href: "#academics",
    children: [
      { label: "Curriculum", href: "#academics" },
      { label: "Labs & Innovation", href: "#labs" },
      { label: "Clubs & Societies", href: "#clubs" },
    ],
  },
  { key: "nav.global", href: "#global" },
  {
    key: "nav.campusLife",
    href: "#clubs",
    children: [
      { label: "Clubs & Societies", href: "#clubs" },
      { label: "Our Campuses", href: "#campus" },
      { label: "Community Outreach", href: "#outreach" },
    ],
  },
  { key: "nav.news", href: "#news" },
  { key: "nav.admissions", href: "#admissions" },
  { key: "nav.contact", href: "#footer" },
];
