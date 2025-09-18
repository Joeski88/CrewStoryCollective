import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import PremiumAddOn from "./PremiumAddOn";
import SampleDeliverables from "./SampleDeliverables";
import WhatWeOffer from "./WhatWeOffer";
import WhyWorkWithUs from "./WhyWorkWithUs";

export default function AllSections() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

    // Button markup for reuse
  const MenuButton = () => (
    <div className="flex justify-end mb-4">
      <button
        onClick={() => navigate("/", { state: { skipIntro: true } })}
        className="text-terracotta-800 px-6 py-2 rounded-2xl font-bold shadow-lg hover:bg-terracotta-700 transition"
      >
        Menu
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[url('/assets/flamebgimage.mp4')] bg-cover bg-center">
      <section id="what-we-offer" className="max-w-4xl mx-auto my-12 bg-cream-800/80 rounded-2xl p-8 shadow-lg">
        <MenuButton />
        <WhatWeOffer />
      </section>
      <section id="premium-add-ons" className="max-w-4xl mx-auto my-12 bg-cream-800/80 rounded-2xl p-8 shadow-lg">
        <MenuButton />
        <PremiumAddOn />
      </section>
      <section id="sample-deliverables" className="max-w-4xl mx-auto my-12 bg-cream-800/80 rounded-2xl p-8 shadow-lg">
        <MenuButton />
        <SampleDeliverables />
      </section>
      <section id="why-work-with-us" className="max-w-4xl mx-auto my-12 bg-cream-800/80 rounded-2xl p-8 shadow-lg">
        <MenuButton />
        <WhyWorkWithUs />
      </section>
      <section id="about" className="max-w-4xl mx-auto my-12 bg-cream-800/80 rounded-2xl p-8 shadow-lg">
        <MenuButton />
        <About />
      </section>
      <section id="contact" className="max-w-4xl mx-auto my-12 bg-cream-800/80 rounded-2xl p-8 shadow-lg">
        <MenuButton />
        <Contact />
      </section>
    </div>
  );
}