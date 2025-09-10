import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PremiumAddOn from "./pages/PremiumAddOn";
import SampleDeliverables from "./pages/SampleDeliverables";
import WhatWeOffer from "./pages/WhatWeOffer";
import WhyWorkWithUs from "./pages/WhyWorkWithUs";
import AllSections from "./pages/AllSections";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/premium-add-ons" element={<PremiumAddOn />} />
        <Route path="/sample-deliverables" element={<SampleDeliverables />} />
        <Route path="/what-we-offer" element={<WhatWeOffer />} />
        <Route path="/why-work-with-us" element={<WhyWorkWithUs />} />
        {/* Cascade route */}
        <Route path="/cascade" element={<AllSections />} />
      </Route>
    </Routes>
  );
}
