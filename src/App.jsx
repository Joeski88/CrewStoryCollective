import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PremiumAddOn from './pages/PremiumAddOn';
import SampleDeliverables from './pages/SampleDeliverables';
import WhatWeOffer from './pages/WhatWeOffer';
import WhyWorkWithUs from './pages/WhyWorkWithUs';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/premium-add-ons" element={<PremiumAddOn />} />
        <Route path="/sample-deliverables" element={<SampleDeliverables />} />
        <Route path="/what-we-offer" element={<WhatWeOffer />} />
        <Route path="/why-work-with-us" element={<WhyWorkWithUs />} />
      </Routes>
  );
}
