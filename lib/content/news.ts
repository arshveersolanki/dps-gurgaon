import type { Localized } from "@/lib/content/types";

export interface NewsItem {
  id: string;
  category: Localized;
  title: Localized;
  date: string; // ISO
  image?: string;
  seed: number;
}

// Headlines reflect real items from dpsgurgaon.org (CBSE results, the 16 May 2026
// Jamuna & Jhelum "Seeds of Tomorrow" House Function) plus representative entries.
export const news: NewsItem[] = [
  {
    id: "cbse-xii",
    category: { en: "Results", hi: "परिणाम" },
    title: {
      en: "Congratulations! CBSE Class XII (2025–26) results announced",
      hi: "बधाई! सीबीएसई कक्षा बारहवीं (2025–26) परिणाम घोषित",
    },
    date: "2026-05-13",
    seed: 4,
  },
  {
    id: "seeds-of-tomorrow",
    category: { en: "House Function", hi: "सदन समारोह" },
    title: {
      en: "Jamuna & Jhelum present ‘Seeds of Tomorrow: Nurture Today, Nourish Tomorrow’",
      hi: "जमुना व झेलम ने प्रस्तुत किया ‘सीड्स ऑफ़ टुमॉरो’",
    },
    date: "2026-05-16",
    seed: 16,
  },
  {
    id: "cbse-x",
    category: { en: "Results", hi: "परिणाम" },
    title: {
      en: "Congratulations! CBSE Class X (2025–26) results announced",
      hi: "बधाई! सीबीएसई कक्षा दसवीं (2025–26) परिणाम घोषित",
    },
    date: "2026-05-13",
    seed: 29,
  },
  {
    id: "silver-jubilee",
    category: { en: "Milestone", hi: "उपलब्धि" },
    title: {
      en: "Silver Jubilee year opens with a season of service",
      hi: "रजत जयंती वर्ष का शुभारंभ सेवा के मौसम के साथ",
    },
    date: "2026-04-08",
    seed: 41,
  },
  {
    id: "germany-exchange",
    category: { en: "Global", hi: "वैश्विक" },
    title: {
      en: "Student delegation returns from Germany exchange",
      hi: "छात्र प्रतिनिधिमंडल जर्मनी आदान-प्रदान से लौटा",
    },
    date: "2026-03-21",
    seed: 57,
  },
];
