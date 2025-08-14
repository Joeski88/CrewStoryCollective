import RevealCard from "../components/RevealCard";
import { useBackground } from "../components/BackgroundContent";
import { useEffect } from "react";

const items = [
  {
    title: "Full Production",
    desc: `Tailored end-to-end event delivery providing a unique,
           sensory-rich experience for your audience.`,
  },
  {
    title: "Immersive Activation",
    desc: `Multisensory design + implementation for launches,
           exhibitions and special occasions.`,
  },
  {
    title: "Consultancy & Creative Direction",
    desc: `Ongoing collaboration to keep a consistent vision while
           evolving your brand’s experiences.`,
  },
  {
    title: "Training Programs",
    desc: `Workshops to develop sensory intelligence and experience
           design capabilities for teams.`,
  },
];

export default function WhatWeOffer() {
  // Optional: set a route-specific background when landing directly
  const { setActiveBg } = useBackground();
  useEffect(() => {
    setActiveBg("/assets/bg-offer.svg"); // choose per page
  }, [setActiveBg]);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-white bg-olive-500 px-6 py-3 rounded-2xl mb-8">
          Service Formats
        </h1>
        <p className="text-2xl text-cream-100/90">Explore Our Offerings</p>
      </div>

      {/* Responsive 4-up grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, desc }) => (
          <RevealCard key={title} title={title}>
            <p>{desc}</p>
          </RevealCard>
        ))}
      </div>
    </div>
  );
}
