import type { ReactNode } from "react";

export type IconName =
  | "code"
  | "shield"
  | "telescope"
  | "atom"
  | "activity"
  | "camera"
  | "compass"
  | "calculator"
  | "mic"
  | "landmark"
  | "masks"
  | "palette"
  | "eye"
  | "handshake"
  | "globe"
  | "language"
  | "gavel"
  | "music"
  | "rocket"
  | "award"
  | "cpu"
  | "flask"
  | "dna"
  | "beaker"
  | "microscope"
  | "monitor"
  | "brush"
  | "shirt"
  | "brain"
  | "recycle"
  | "sparkles"
  | "compass-rose";

const paths: Record<IconName, ReactNode> = {
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />,
  shield: <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />,
  telescope: (
    <>
      <path d="m3 16 7-2 1 4-6 2-2-4Z" />
      <path d="m10 14 8-9 3 2-7 9M9 18v3" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </>
  ),
  activity: <path d="M3 12h4l3 7 4-14 3 7h4" />,
  camera: (
    <>
      <path d="M3 8h3l2-2h8l2 2h3v11H3Z" />
      <circle cx="12" cy="13" r="3.4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m16 8-5 3-3 5 5-3 3-5Z" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" />
      <path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
    </>
  ),
  mic: <path d="M9 3h0a3 3 0 0 1 6 0v6a3 3 0 0 1-6 0V3ZM5 11a7 7 0 0 0 14 0M12 18v3" />,
  landmark: <path d="M4 21h16M5 21V10M19 21V10M3 10 12 4l9 6M9 21v-8M15 21v-8" />,
  masks: (
    <>
      <path d="M3 5h7v5a3.5 3.5 0 0 1-7 0Z" />
      <path d="M14 9h7v5a3.5 3.5 0 0 1-7 0Z" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-1 1-2s.3-2 1.5-2H18a3 3 0 0 0 3-3c0-5-4-9-9-9Z" />
      <path d="M8 11h.01M12 8h.01M16 11h.01" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  handshake: (
    <>
      <circle cx="8" cy="9" r="3" />
      <path d="M2 20a6 6 0 0 1 12 0M16 7a3 3 0 0 1 0 6M22 20a6 6 0 0 0-5-5.9" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  language: <path d="M3 5h9M7.5 5c0 5-2 8-5 10M5 9c0 3 3 5 6 6M13 19l4-9 4 9M14.5 16h5" />,
  gavel: <path d="m14 6 4 4M16 4l4 4-3 3-4-4 3-3ZM13 9l-7 7M5 15l4 4M3 21h8" />,
  music: (
    <>
      <path d="M9 18V6l10-2v12" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </>
  ),
  rocket: <path d="M12 3c3 2 5 5 5 9l-3 3h-4l-3-3c0-4 2-7 5-9ZM11.2 9.5a1.2 1.2 0 1 0 1.6 0M8 16l-2 5 5-2M16 16l2 5-5-2" />,
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m9 14-2 7 5-3 5 3-2-7" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M10 3v2M14 3v2M10 19v2M14 19v2M3 10h2M3 14h2M19 10h2M19 14h2" />
    </>
  ),
  flask: <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M7 16h10" />,
  dna: <path d="M6 3c0 6 12 6 12 12M18 3c0 6-12 6-12 12M7 4h10M7 20h10M9 7h6M9 17h6" />,
  beaker: <path d="M7 3h10M9 3v6l-3 8a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-3-8V3M6 14h12" />,
  microscope: <path d="M6 18h12M10 18c-3-1-5-4-5-7M9 4l3 1-3 6-3-1ZM11.5 5l2.5 5M15 18a7 7 0 0 0 3-12" />,
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  brush: <path d="M14 3 21 10l-7 4-2 2a3 3 0 0 1-3-3l2-2 3-8ZM7 14c-2 1-3 3-3 6 3 0 5-1 6-3" />,
  shirt: <path d="M8 3 4 6l2 3 2-1v10h8V8l2 1 2-3-4-3-2 2h-4L8 3Z" />,
  brain: <path d="M9.5 4A2.5 2.5 0 0 0 7 6.5 3 3 0 0 0 5 12a3 3 0 0 0 2 4 2.5 2.5 0 0 0 5 0V6.5A2.5 2.5 0 0 0 9.5 4ZM12 6.5A2.5 2.5 0 0 1 17 6.5 3 3 0 0 1 19 12a3 3 0 0 1-2 4 2.5 2.5 0 0 1-5 0" />,
  recycle: (
    <>
      <path d="M4 12a8 8 0 0 1 13-6M20 12a8 8 0 0 1-13 6" />
      <path d="M17 3v3h-3M7 21v-3h3" />
    </>
  ),
  sparkles: <path d="M12 3l1.8 4.8L18 9.5l-4.2 1.7L12 16l-1.8-4.8L6 9.5l4.2-1.7L12 3ZM19 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />,
  "compass-rose": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18M12 12l5-5M12 12l-5 5" />
    </>
  ),
};

export function Icon({
  name,
  className,
  size = 24,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
