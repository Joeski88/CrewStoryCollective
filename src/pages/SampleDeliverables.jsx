import React, { useEffect } from "react";
import RevealCard from "../components/RevealCard";
import HomeButton from "../components/HomeButton"; // optional, for consistency

const items = [
  {
    title: "Brand Film (90s)",
    desc: "Narrative-led hero piece with VO, score, and on-location shoot.",
  },
  {
    title: "Cutdowns (15/6s)",
    desc: "Platform-optimized edits for paid + organic social.",
  },
  {
    title: "Key Visual Stills",
    desc: "High-resolution frames graded for print and OOH.",
  },
  {
    title: "Behind-the-Scenes",
    desc: "Process mini-docs for recruitment and community building.",
  },
];

const SampleDeliverables = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // optional scroll reset
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      {/* Optional: home button */}
      <HomeButton />

      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-heading text-cream-100 bg-olive-500/80 px-6 py-3 rounded-2xl mb-4">
          Sample Deliverables
        </h1>
        <p className="text-2xl text-cream-100/90">What You’ll Receive</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center w-full max-w-6xl">
        {items.map(({ title, desc }) => (
          <RevealCard key={title} title={title}>
            <p>{desc}</p>
          </RevealCard>
        ))}
      </div>
    </div>
  );
};

export default SampleDeliverables;
