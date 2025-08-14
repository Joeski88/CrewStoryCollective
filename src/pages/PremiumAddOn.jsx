import { useEffect } from "react";
import RevealCard from "../components/RevealCard";

// ⬅ NEW: Import the HomeButton
import HomeButton from "../components/HomeButton";

// ✅ IMPORTANT: make sure path matches your actual file name/location
import { useBackground } from "../components/BackgroundContent"; 

const items = [
  { title: "Cinematics Package", desc: "Advanced camera moves, prime glass, lighting design, and color pipeline for a filmic look." },
  { title: "Original Score & Sound", desc: "Custom composition, foley, and immersive spatial mixing to elevate the narrative." },
  { title: "Motion & Titles", desc: "Animated brand elements, kinetic typography, and bespoke lower-thirds." },
  { title: "Talent & Casting", desc: "Casting, contracts, and direction to find the right voice and face for your story." },
];

export default function PremiumAddOn() {
  const { setActiveBg } = useBackground();

  useEffect(() => {
    setActiveBg("/assets/bg-addons.svg");
  }, [setActiveBg]);

  return (
    // ⬅ WRAP the whole page in a relative container so z-index works properly
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">

      {/* ⬅ NEW: Home button at top-left */}
      <HomeButton />

      {/* Page Title Section */}
      <div className="text-center mb-16">
        <h1 className="inline-block text-4xl sm:text-5xl font-heading text-cream-100 bg-olive-500/80 px-6 py-2 rounded-2xl mb-3">
          Premium Add-Ons
        </h1>
        <p className="text-2xl text-cream-100/90">Enhance Your Production</p>
      </div>

      {/* Pills Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {items.map(({ title, desc }) => (
          <RevealCard key={title} title={title}>
            <p>{desc}</p>
          </RevealCard>
        ))}
      </div>
    </div>
  );
}
