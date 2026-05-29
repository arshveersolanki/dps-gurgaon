import type { Localized } from "@/lib/content/types";
import type { IconName } from "@/components/ui/Icon";

export interface Club {
  id: string;
  name: string;
  icon: IconName;
  blurb: Localized;
}

// The 20 societies named in the brief.
export const clubs: Club[] = [
  { id: "node", name: "NODE", icon: "code", blurb: { en: "Coding, web and app development for young builders.", hi: "युवा निर्माताओं हेतु कोडिंग व ऐप विकास।" } },
  { id: "squad", name: "SQUAD", icon: "shield", blurb: { en: "Student council in action — leadership and service.", hi: "नेतृत्व व सेवा में सक्रिय छात्र परिषद।" } },
  { id: "redshift", name: "Redshift", icon: "telescope", blurb: { en: "Astrophysics, observation nights and cosmology.", hi: "खगोल भौतिकी व अवलोकन रातें।" } },
  { id: "allotropes", name: "Allotropes", icon: "atom", blurb: { en: "Chemistry beyond the syllabus — reactions and research.", hi: "पाठ्यक्रम से परे रसायन विज्ञान।" } },
  { id: "pulse", name: "Pulse", icon: "activity", blurb: { en: "Student journalism, reportage and the school press.", hi: "छात्र पत्रकारिता व विद्यालय प्रेस।" } },
  { id: "viewfinders", name: "Viewfinders", icon: "camera", blurb: { en: "Photography and visual storytelling.", hi: "फोटोग्राफी व दृश्य कथावाचन।" } },
  { id: "kaizen", name: "Kaizen", icon: "compass", blurb: { en: "Continuous improvement, design thinking and entrepreneurship.", hi: "सतत सुधार व उद्यमिता।" } },
  { id: "pisquad", name: "Pi SQUAD", icon: "calculator", blurb: { en: "Mathematics olympiads, puzzles and proofs.", hi: "गणित ओलंपियाड व पहेलियाँ।" } },
  { id: "tedx", name: "TEDx Youth", icon: "mic", blurb: { en: "Ideas worth spreading, staged by students.", hi: "छात्रों द्वारा प्रस्तुत फैलाने योग्य विचार।" } },
  { id: "dharohar", name: "Dharohar", icon: "landmark", blurb: { en: "Indian heritage, culture and the classical arts.", hi: "भारतीय विरासत, संस्कृति व शास्त्रीय कला।" } },
  { id: "ayli", name: "As You Like It", icon: "masks", blurb: { en: "English theatre and dramatics society.", hi: "अंग्रेज़ी रंगमंच व नाट्य समिति।" } },
  { id: "yuvrang", name: "Yuvrang", icon: "palette", blurb: { en: "Hindi theatre and the performing arts.", hi: "हिंदी रंगमंच व प्रदर्शन कला।" } },
  { id: "insight", name: "Insight", icon: "eye", blurb: { en: "Debate, discourse and critical thinking.", hi: "वाद-विवाद व समीक्षात्मक चिंतन।" } },
  { id: "interact", name: "Interact", icon: "handshake", blurb: { en: "Rotary-affiliated community service in action.", hi: "रोटरी-संबद्ध सामुदायिक सेवा।" } },
  { id: "mun", name: "Model UN", icon: "globe", blurb: { en: "Diplomacy and global affairs across committees.", hi: "समितियों में कूटनीति व वैश्विक मामले।" } },
  { id: "lingua", name: "Lingua Clava", icon: "language", blurb: { en: "Foreign languages — German, Spanish and French.", hi: "विदेशी भाषाएँ — जर्मन, स्पेनिश व फ्रेंच।" } },
  { id: "legal", name: "Legal Literacy", icon: "gavel", blurb: { en: "Constitution, rights and moot court.", hi: "संविधान, अधिकार व मूट कोर्ट।" } },
  { id: "ensemble", name: "Ensemble", icon: "music", blurb: { en: "Choir, orchestra and the music society.", hi: "गायन मंडली, वाद्यवृंद व संगीत।" } },
  { id: "space", name: "Space Club", icon: "rocket", blurb: { en: "Rocketry, satellites and space science.", hi: "रॉकेट्री, उपग्रह व अंतरिक्ष विज्ञान।" } },
  { id: "bis", name: "BIS", icon: "award", blurb: { en: "Bureau of Indian Standards — quality and standards club.", hi: "भारतीय मानक ब्यूरो — गुणवत्ता क्लब।" } },
];
