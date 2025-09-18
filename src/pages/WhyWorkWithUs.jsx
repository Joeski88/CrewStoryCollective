import { useEffect, useState } from "react";
import HomeButton from "../components/HomeButton";

// Replace with your own image URLs or imports
const images = [
  "/assets/ascot.jpg",
  "/assets/bst.jpg",
  "/assets/etihad.jpg",
  "/assets/junction2.jpg",
  "/assets/koko.jpg",
  "/assets/padella.jpg"
];

export default function WhyWorkWithUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);


  const points = [
    "Some quotes about how amazing you guys are?.",
    "customer quotes who attended events.",
    "maybe a quote from you about what you did in these events?",
    "ORRRRRR no text at all? Just images?",
  ];


  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      <HomeButton />

      <div className="text-center mb-12">
        <h1 className="inline-block text-4xl sm:text-5xl font-heading text-terracotta-500 px-6 py-2 rounded-2xl mb-6">
          Where We've Been
        </h1>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-xl mx-auto mb-10 relative">
        <img
          src={images[current]}
          alt={`Gallery ${current + 1}`}
          className="w-full h-96 md:h-[32rem] object-contain rounded-2xl shadow-md bg-black transition-all duration-500"
        />
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-cream-800/70 text-black p-2 rounded-full shadow hover:bg-grey/90 transition"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-cream-800/70 text-black p-2 rounded-full shadow hover:bg-grey/90 transition"
          aria-label="Next"
        >
          &#8594;
        </button>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? "bg-terracotta-500" : "bg-terracotta-500"} transition`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Points */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl w-full px-4">
        {points.map((point, i) => (
          <div
            key={i}
            className=" text-terracotta-500 text-lg p-6 rounded-2xl text-center shadow-md"
          >
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}