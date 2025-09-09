import { useEffect } from "react";
import RevealCard from "../components/RevealCard";
import HomeButton from "../components/HomeButton"; // optional but consistent with other pages

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

const WhatWeOffer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">

      {/* Optional: Home button */}
      <HomeButton />

      {/* Section heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-heading text-cream-100 bg-olive-500/80 px-6 py-3 rounded-2xl mb-4">
          What We Offer
        </h1>
        <p className="text-2xl text-cream-100/90">Explore Our Offerings</p>
      </div>

      {/* Responsive Grid */}
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

export default WhatWeOffer;