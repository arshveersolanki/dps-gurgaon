import type { Localized } from "@/lib/content/types";

export interface House {
  id: string;
  name: string;
  motto: Localized;
  river: string;
  accent: { ring: string; chip: string; label: string };
  /** A short, original characterisation — pasted school copy goes here later. */
  blurb: Localized;
}

// Jamuna & Jhelum are confirmed from the school's 2026 "Seeds of Tomorrow"
// House Function; Ravi and Satluj are best-guess river names — confirm with
// the school before going live.
export const houses: House[] = [
  {
    id: "jamuna",
    name: "Jamuna",
    river: "Yamuna",
    motto: { en: "Steady, deep, deliberate.", hi: "स्थिर, गहरा, संकल्पित।" },
    accent: { ring: "#155b2e", chip: "bg-forest-600/10 text-forest-700", label: "Forest" },
    blurb: {
      en: "Discipline, scholarship and a quiet conviction to win the long argument.",
      hi: "अनुशासन, विद्वत्ता और लंबी लड़ाई जीतने की शांत प्रतिज्ञा।",
    },
  },
  {
    id: "jhelum",
    name: "Jhelum",
    river: "Jhelum",
    motto: { en: "Cut the path, then run it.", hi: "मार्ग बनाओ, फिर दौड़ो।" },
    accent: { ring: "#15a876", chip: "bg-teal-DEFAULT/10 text-teal-dark", label: "Teal" },
    blurb: {
      en: "Initiative, sport and the appetite to volunteer first.",
      hi: "पहल, खेल और स्वयं आगे आने की तत्परता।",
    },
  },
  {
    id: "ravi",
    name: "Ravi",
    river: "Ravi",
    motto: { en: "Make. Share. Repeat.", hi: "बनाओ, बाँटो, दोहराओ।" },
    accent: { ring: "#a8340d", chip: "bg-rust-DEFAULT/10 text-rust-dark", label: "Rust" },
    blurb: {
      en: "Craft, fellowship and the art of making something with your hands.",
      hi: "शिल्प, सहकारिता और हाथों से कुछ रचने की कला।",
    },
  },
  {
    id: "satluj",
    name: "Satluj",
    river: "Satluj",
    motto: { en: "Service Before Self.", hi: "स्वयं से पहले सेवा।" },
    accent: { ring: "#C19A4B", chip: "bg-ochre/10 text-ochre-dark", label: "Ochre" },
    blurb: {
      en: "Outreach, citizenship and the ethic that defines the school.",
      hi: "सेवा, नागरिकता और विद्यालय की आत्मा।",
    },
  },
];
