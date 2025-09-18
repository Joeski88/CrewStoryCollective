import { useEffect } from "react";
import RevealCard from "../components/RevealCard";
import HomeButton from "../components/HomeButton";

const WhatWeOffer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      <HomeButton />

      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-heading text-terracotta-500 px-6 py-3 rounded-2xl mb-4">
          Ethos
        </h1>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto">
        <p className="mb-10 text-black text-left text-2xl leading-loose">
          Crew Story Collective is a story driven creative studio working at the intersection of hospitality storytelling, presence, and place.
        </p>
        <p className="mb-10 text-black text-left text-2xl leading-loose">
          We believe that truly immersive spaces must nourish not only our planet but also our deepest human needs for Reconnection, Regeneration & Rediscovery.
        </p>
        <p className="mb-10 text-black text-left text-2xl leading-loose">
          Our mission? To create Hospitality UGC experiences that awaken the senses, foster authentic connection, and remind us what it means to be fully alive in this moment.
        </p>
      </div>
    </div>
  );
};

export default WhatWeOffer;

