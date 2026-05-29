// Curated placement highlights — full placement record is on the school's
// official PDF (Alumni-Placment-2014-2025.pdf). Update as new data lands.
export interface PlacementCluster {
  region: string;
  examples: string[];
}

export const placements: PlacementCluster[] = [
  {
    region: "Indian Institutes & National",
    examples: ["IIT (multiple)", "BITS Pilani", "NIT", "NLU", "AIIMS", "St. Stephen's", "Lady Shri Ram", "Hindu College"],
  },
  {
    region: "United Kingdom",
    examples: ["University College London", "King's College London", "Imperial College", "LSE", "Edinburgh", "Manchester", "Arts University Bournemouth"],
  },
  {
    region: "United States",
    examples: ["Cornell", "NYU", "Carnegie Mellon", "Berkeley", "UCLA", "Boston University", "Parsons", "Babson"],
  },
  {
    region: "Australia, Canada & Europe",
    examples: ["University of Toronto", "McGill", "University of Melbourne", "University of Sydney", "ESCP Business School", "University of Copenhagen"],
  },
];

export const placementYears = 11; // 2014–2025
export const placementHighlight = {
  acceptances: "1,400+",
  years: "Eleven years tracked",
  source: "Alumni-Placment-2014-2025.pdf",
};
