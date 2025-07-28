import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import PremiumAddOns from './pages/PremiumAddOns';
import SampleDeliverables from './pages/SampleDeliverables';
import WhatWeOffer from './pages/WhatWeOffer';
import WhyWorkWithUs from './pages/WhyWorkWithUs';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/premium-add-ons" element={<PremiumAddOns />} />
        <Route path="/sample-deliverables" element={<SampleDeliverables />} />
        <Route path="/what-we-offer" element={<WhatWeOffer />} />
        <Route path="/why-work-with-us" element={<WhyWorkWithUs />} />
      </Routes>
    </Router>
  );
}
