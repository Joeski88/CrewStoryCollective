import { useEffect } from "react";
import HomeButton from "../components/HomeButton";

export default function WhyWorkWithUs() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load
  }, []);

  const points = [
    "Collaborative approach tailored to your story.",
    "Experienced crew across multiple industries.",
    "Commitment to high-end, cinematic quality.",
    "Transparent pricing and scalable packages."
  ];

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      {/* Home button */}
      <HomeButton />

      {/* Section heading */}
      <div className="text-center mb-12">
        <h1 className="inline-block text-4xl sm:text-5xl font-heading text-cream-100 bg-olive-500/80 px-6 py-2 rounded-2xl mb-6">
          Why Work With Us
        </h1>
        <p className="text-2xl text-cream-100/90">Our Values</p>
      </div>

      {/* List of points styled like pills */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl w-full px-4">
        {points.map((point, i) => (
          <div
            key={i}
            className="bg-olive-800/80 text-cream-100 text-lg p-6 rounded-2xl text-center shadow-md"
          >
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}
