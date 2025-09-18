import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Optional: scroll to top on page load
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-terracotta-500 px-6 py-3 rounded-2xl mb-8">
          Why This Matters To You
        </h1>
      </div>
      {/* Content */}
      <div className="w-full max-w-4xl mx-auto">
        <p className="mb-10 text-black text-center text-2xl leading-loose">
          <strong>Together</strong> we unite atmosphere, design mixed with first class & authentic hospitality, with audiences through an immersive experience.
        </p>
        <p className="mb-10 text-black text-center text-2xl leading-loose">
          We Bring the Back of House to <strong>LIFE!</strong>
        </p>
        <p className="mb-10 text-black text-center text-2xl leading-loose">
          <strong>Your</strong> voices first, your story told with passion, creativity, and authenticity.
        </p>
        <p className="mb-10 text-black text-center text-2xl leading-loose">
          <strong>Sustainability:</strong> Lean crews, responsible travel, and low-impact materials.
        </p>
      </div>
    </div>
  );
};
export default About;
