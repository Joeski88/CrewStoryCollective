import React, { useEffect } from "react";
import RevealCard from "../components/RevealCard";
import HomeButton from "../components/HomeButton";


const PremiumAddOn = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Optional scroll reset
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      {/* Home button */}
      <HomeButton />

      {/* Page Title Section */}
      <div className="text-center mb-16">
        <h1 className="inline-block text-4xl sm:text-5xl font-heading text-cream-100 bg-terracotta-500/80 px-6 py-2 rounded-2xl mb-3">
          Experience
        </h1>
      </div>

      {/* Single Pill */}
      <div className="w-full max-w-2xl bg-cream-800/90 rounded-2xl shadow-2xl p-8 text-black text-left">
        <p className="mb-6">
          With a decade of front line hospitality experience, our journey has been shaped by remarkable collaborations and projects like Amex Presents BST, Etihad Stadium, Junction 2, KOKO Camden, Padella & Royal Ascot.</p>
        <p className="mb-6">
          Our founding projects reflect our commitment to creating spaces that embody presence, pleasure, and purpose, fostering community and shared experiences.
        </p>
      </div>
    </div>
  );
};

export default PremiumAddOn;