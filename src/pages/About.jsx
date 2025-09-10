import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Optional: scroll to top on page load
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-white bg-olive-500 px-6 py-3 rounded-2xl mb-8">
          Why This Matters To You
        </h1>
      </div>
      {/* Single Pill */}
      <div className="w-full max-w-2xl bg-cream-800/90 rounded-2xl shadow-2xl p-8 text-white text-left">
        <p className="mb-6">
          <strong>Together</strong>we unite atmosphere, design mixed with first class & authentic hospitality, with audiences through an immersive experience.
        </p>
        <p className="mb-6">
          We Bring the Back of House to<strong>LIFE!</strong>
        </p>
        <p className="mb-6">
          <strong>Your</strong>voices first, your story told with passion, creativity, and authenticity.
        </p>
        <p>
          <strong>Sustainability:</strong> Lean crews, responsible travel, and low-impact materials.
        </p>
      </div>
    </div>
  );
};

export default About;
