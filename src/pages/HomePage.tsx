import { Hero } from "@/components/sections/Hero";
import { NewsTicker } from "@/components/sections/NewsTicker";
import { Numbers } from "@/components/sections/Numbers";

// Curated home — Hero + signature ticker + Numbers. The depth lives on
// dedicated routes (about / academics / global / campus / news / admissions),
// not in a single endless scroll.
export function HomePage() {
  return (
    <>
      <Hero />
      <NewsTicker />
      <Numbers />
    </>
  );
}
