import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const pages = [
  { name: "What We Offer", path: "/what-we-offer" },
  { name: "Premium Add-Ons", path: "/premium-add-ons" },
  { name: "Sample Deliverables", path: "/sample-deliverables" },
  { name: "Why Work With Us", path: "/why-work-with-us" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introVisible, setIntroVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setIntroVisible(true);
    const hold = setTimeout(() => setIntroVisible(false), 1800);
    const done = setTimeout(() => {
      setShowIntro(false);
      setContentVisible(true);
    }, 2500);
    return () => {
      clearTimeout(hold);
      clearTimeout(done);
    };
  }, []);

  return (
    <>
      {/* Intro Splash Overlay */}
      {showIntro && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center 
                      bg-olive-500 transition-opacity duration-700
                      ${introVisible ? "opacity-100" : "opacity-0"}`}
        >
          <h1
            className="
              font-black uppercase tracking-tight
              text-black
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              text-stroke-white text-outline-fallback
              text-center mx-auto px-4 mb-4
            "
          >
            {/* Mobile: stacked */}
            <span className="md:hidden block">
              THE<br />CREW<br />STORY<br />COLLECTIVE
            </span>

            {/* Desktop: single line */}
            <span className="hidden md:flex justify-center gap-3">
              <span>THE</span>
              <span>CREW</span>
              <span>STORY</span>
              <span>COLLECTIVE</span>
            </span>
          </h1>
        </div>
      )}

      {/* Foreground content */}
      <section
        className={`w-full py-20 mb-12 text-center relative z-10 transition-opacity duration-700 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="
              font-black uppercase tracking-tight
              text-black
              text-5xl md:text-6xl lg:text-7xl
              text-stroke-white text-outline-fallback
              text-center mx-auto mb-4
            "
          >
            {/* Mobile: stacked */}
            <span className="md:hidden block">
              WE<br />ARE<br />THE<br />CREW<br />STORY<br />COLLECTIVE
            </span>

            {/* Desktop: single line */}
            <span className="hidden md:flex justify-center gap-3">
              <span>WE</span>
              <span>ARE</span>
              <span>THE</span>
              <span>CREW</span>
              <span>STORY</span>
              <span>COLLECTIVE</span>
            </span>
          </h1>
        </div>
      </section>

      {/* Grid of links */}
      <section
        className={`grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl mx-auto justify-items-stretch relative z-10 transition-opacity duration-700 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {pages.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className="w-full p-8 bg-olive-500/80 hover:bg-olive-500 rounded-2xl shadow-md transition-transform transform hover:scale-105"
          >
            <span className="block text-xl font-semibold text-cream-100">{name}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
