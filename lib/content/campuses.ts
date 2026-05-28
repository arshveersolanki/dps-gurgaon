import type { Localized } from "@/lib/content/types";

export interface Campus {
  id: string;
  name: Localized;
  wing: Localized;
  sector: string;
  address: Localized;
}

export const campuses: Campus[] = [
  {
    id: "main",
    name: { en: "Main Campus", hi: "मुख्य कैंपस" },
    wing: { en: "Classes V – XII", hi: "कक्षा V – XII" },
    sector: "Sector 45",
    address: {
      en: "Site No. 1, Sector-45 Urban Estate, Gurugram 122003",
      hi: "साइट नं. 1, सेक्टर-45 अर्बन एस्टेट, गुरुग्राम 122003",
    },
  },
  {
    id: "primary",
    name: { en: "Primary Wing", hi: "प्राथमिक विंग" },
    wing: { en: "Classes I – IV", hi: "कक्षा I – IV" },
    sector: "Sector 47",
    address: { en: "Sector 47, Gurugram, Haryana", hi: "सेक्टर 47, गुरुग्राम, हरियाणा" },
  },
  {
    id: "infant",
    name: { en: "Infant Wing", hi: "शिशु विंग" },
    wing: { en: "Pre-Nursery – Prep", hi: "प्री-नर्सरी – प्रेप" },
    sector: "Sector 40",
    address: { en: "Sector 40, Gurugram, Haryana", hi: "सेक्टर 40, गुरुग्राम, हरियाणा" },
  },
];

// Jamuna & Jhelum confirmed; the remaining two are best-guess river names —
// CONFIRM with the school before going live.
export const houses = ["Jamuna", "Jhelum", "Ravi", "Satluj"];

export const contact = {
  address: "Site No. 1, Sector-45 Urban Estate, Gurugram 122003, India",
  phone: "0124 4125800-801",
  phoneHref: "tel:+911244125800",
  email: "principal@dpsgurgaon.org",
  tour360: "https://www.iviewd.com/dps45ggn1",
  campusCare: "https://www.dpsggncampuscare.org",
};

export const social = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/dpsggn" },
  { id: "instagram", label: "Instagram", href: "#" },
  { id: "twitter", label: "Twitter / X", href: "#" },
  { id: "linkedin", label: "LinkedIn", href: "#" },
  { id: "youtube", label: "YouTube", href: "#" },
];
