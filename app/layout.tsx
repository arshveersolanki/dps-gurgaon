import type { Metadata, Viewport } from "next";
import {
  Newsreader,
  Plus_Jakarta_Sans,
  IBM_Plex_Mono,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

const deva = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-deva",
  display: "swap",
  preload: false,
});

const SITE = "https://www.dpsgurgaon.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Delhi Public School, Sector 45, Gurgaon — Silver Jubilee 2026–27",
    template: "%s · DPS Gurgaon",
  },
  description:
    "A CBSE school in Gurgaon nurturing thinkers, makers and global citizens for twenty-five years. Service Before Self.",
  keywords: [
    "DPS Gurgaon",
    "Delhi Public School Sector 45",
    "CBSE school Gurgaon",
    "admissions 2026-27",
    "Silver Jubilee",
  ],
  openGraph: {
    title: "Delhi Public School, Sector 45, Gurgaon",
    description:
      "Twenty-five years of meaningful impact. Service Before Self.",
    url: SITE,
    siteName: "DPS Gurgaon",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#08140E" },
  ],
};

const noFlash = `(function(){try{var t=localStorage.getItem('dps-theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');var l=localStorage.getItem('dps-locale')||'en';document.documentElement.setAttribute('lang',l);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} ${deva.variable} font-sans antialiased`}
      >
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: noFlash }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
