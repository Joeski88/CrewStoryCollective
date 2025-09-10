import React, { useEffect } from "react";
import HomeButton from "../components/HomeButton";

const deliverables = [
  { number: "84%", text: "of guests trust UGC more Travelers are far more likely to trust a hotel that shares real guest stories (Source: CrowdRiff)." },
  { number: "77%", text: "say UGC influences booking choices. User-generated content helps turn lookers into bookers (Source: CrowdRiff)." },
  { number: "28%", text: "The amount UGC can boost engagement by. By sharing authentic, behind-the-scenes content, hotels see significantly higher interaction (Source: Hospitality Marketing Insights)" },

];

const SampleDeliverables = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      <HomeButton />

      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-heading text-cream-100 bg-terracotta-500/80 px-6 py-3 rounded-2xl mb-4">
          Sample Deliverables
        </h1>
      </div>

      {/* Single Pill */}
      <div className="w-full max-w-2xl bg-cream-800/90 rounded-2xl shadow-2xl p-8 text-black text-left">
        <div className="space-y-8">
          {deliverables.map(({ number, text }, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-6xl sm:text-7xl font-black text-terracotta-500 mr-8 min-w-[90px] flex-shrink-0 text-center">
                {number}
              </span>
              <span className="text-lg break-normal">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleDeliverables;
