import type { Localized } from "@/lib/content/types";

export interface EntryTrack {
  id: string;
  grade: Localized;
  window: Localized;
  note: Localized;
}

// Three real entry points named in the brief.
export const entryTracks: EntryTrack[] = [
  {
    id: "prenursery",
    grade: { en: "Pre-Nursery & Nursery", hi: "प्री-नर्सरी व नर्सरी" },
    window: { en: "Primary entry point", hi: "मुख्य प्रवेश बिंदु" },
    note: {
      en: "Registration opens annually for the Infant Wing, Sector 40.",
      hi: "शिशु विंग, सेक्टर 40 हेतु वार्षिक पंजीकरण।",
    },
  },
  {
    id: "xi",
    grade: { en: "Class XI", hi: "कक्षा XI" },
    window: { en: "Post Class X results", hi: "कक्षा X परिणाम के बाद" },
    note: {
      en: "Stream selection across Science, Commerce and Humanities.",
      hi: "विज्ञान, वाणिज्य व मानविकी में स्ट्रीम चयन।",
    },
  },
  {
    id: "other",
    grade: { en: "Other Classes", hi: "अन्य कक्षाएँ" },
    window: { en: "Subject to vacancy", hi: "रिक्ति के अधीन" },
    note: {
      en: "Lateral admissions considered against available seats.",
      hi: "उपलब्ध सीटों के अनुसार पार्श्व प्रवेश।",
    },
  },
];

export interface Step {
  n: string;
  title: Localized;
  detail: Localized;
}

export const steps: Step[] = [
  { n: "01", title: { en: "Enquiry", hi: "पूछताछ" }, detail: { en: "Register interest and receive the prospectus.", hi: "रुचि दर्ज करें व विवरणिका प्राप्त करें।" } },
  { n: "02", title: { en: "Registration", hi: "पंजीकरण" }, detail: { en: "Complete the form and submit documents.", hi: "फॉर्म भरें व दस्तावेज़ जमा करें।" } },
  { n: "03", title: { en: "Interaction", hi: "संवाद" }, detail: { en: "A warm, age-appropriate interaction.", hi: "आत्मीय, आयु-अनुरूप संवाद।" } },
  { n: "04", title: { en: "Enrolment", hi: "नामांकन" }, detail: { en: "Confirm the offer and join the DPS family.", hi: "प्रस्ताव की पुष्टि करें व जुड़ें।" } },
];

export interface FeeRow {
  stage: Localized;
  grades: string;
  annual: string;
}

// Indicative figures for the pitch — confirm with the school office.
export const fees: FeeRow[] = [
  { stage: { en: "Infant Wing", hi: "शिशु विंग" }, grades: "Pre-Nursery–Prep", annual: "₹1,48,000" },
  { stage: { en: "Primary", hi: "प्राथमिक" }, grades: "I–IV", annual: "₹1,62,000" },
  { stage: { en: "Middle", hi: "माध्यमिक" }, grades: "V–VIII", annual: "₹1,78,000" },
  { stage: { en: "Secondary & Sr.", hi: "उच्च व वरिष्ठ" }, grades: "IX–XII", annual: "₹1,96,000" },
];

export const feeNote: Localized = {
  en: "Indicative annual tuition for 2026–27. Final fees, charges and concessions are confirmed by the school office.",
  hi: "2026–27 हेतु सांकेतिक वार्षिक शुल्क। अंतिम शुल्क व रियायतें विद्यालय कार्यालय द्वारा पुष्ट।",
};
