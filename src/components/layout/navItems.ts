import type { TranslationKey } from "@/lib/i18n/dict";

export interface NavLink {
  key: TranslationKey;
  to: string;
  /** Optional second-level routes for the desktop flyout. */
  children?: { label: string; to: string }[];
}

export const NAV: NavLink[] = [
  {
    key: "nav.about",
    to: "/about",
    children: [
      { label: "Principal's Message", to: "/about" },
      { label: "DPS in Numbers", to: "/#numbers" },
      { label: "Our Campuses", to: "/campus" },
    ],
  },
  {
    key: "nav.academics",
    to: "/academics",
    children: [
      { label: "Curriculum", to: "/academics" },
      { label: "Labs & Innovation", to: "/academics#labs" },
      { label: "Clubs & Societies", to: "/academics#clubs" },
    ],
  },
  { key: "nav.global", to: "/global" },
  {
    key: "nav.campusLife",
    to: "/campus",
    children: [
      { label: "Our Campuses", to: "/campus" },
      { label: "Community Outreach", to: "/campus#outreach" },
    ],
  },
  { key: "nav.news", to: "/news" },
  { key: "nav.admissions", to: "/admissions" },
  { key: "nav.contact", to: "/contact" },
];
