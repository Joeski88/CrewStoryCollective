import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import PremiumAddOn from "./PremiumAddOn";
import SampleDeliverables from "./SampleDeliverables";
import WhatWeOffer from "./WhatWeOffer";
import WhyWorkWithUs from "./WhyWorkWithUs";

export default function AllSections() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen  bg-[url('/assets/flamebgimage.mp4')] bg-cover bg-center">
      <section id="what-we-offer" className="max-w-3xl mx-auto my-16 bg-cream-800/30 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
        <WhatWeOffer />
      </section>
      <section id="premium-add-ons" className="max-w-3xl mx-auto my-16 bg-cream-800/30 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
        <PremiumAddOn />
      </section>
      <section id="sample-deliverables" className="max-w-3xl mx-auto my-16 bg-cream-800/30 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
        <SampleDeliverables />
      </section>
      <section id="why-work-with-us" className="max-w-3xl mx-auto my-16 bg-cream-800/30 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
        <WhyWorkWithUs />
      </section>
      <section id="about" className="max-w-3xl mx-auto my-16 bg-cream-800/30 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
        <About />
      </section>
      <section id="contact" className="max-w-3xl mx-auto my-16 bg-cream-800/30 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
        <Contact />
      </section>
    </div>
  );
}