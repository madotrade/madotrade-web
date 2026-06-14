import { HeroSection } from "@/components/sections/hero";
import { ConceptSection } from "@/components/sections/concept";
import { CharacterSection } from "@/components/sections/characters";
import { GameplaySection } from "@/components/sections/gameplay";
import { WorldSection } from "@/components/sections/world";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <HeroSection />
      <ConceptSection />
      <CharacterSection />
      <WorldSection />
      <GameplaySection />
      <CTASection />
      <Footer />
    </main>
  );
}
