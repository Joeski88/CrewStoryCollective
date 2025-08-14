import { useEffect } from "react";
import RevealCard from "../components/RevealCard";
import { useBackground } from "../components/BackgroundContent";

const items = [
  { title: "Brand Film (90s)", desc: "Narrative-led hero piece with VO, score, and on-location shoot." },
  { title: "Cutdowns (15/6s)", desc: "Platform-optimized edits for paid + organic social." },
  { title: "Key Visual Stills", desc: "High-resolution frames graded for print and OOH." },
  { title: "Behind-the-Scenes", desc: "Process mini-docs for recruitment and community building." },
];

export default function SampleDeliverables() {
  const { setActiveBg } = useBackground();
  useEffect(() => { setActiveBg("/assets/bg-deliverables.svg"); }, [setActiveBg]);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-white bg-olive-500 px-6 py-3 rounded-2xl mb-8">Sample Deliverables</h1>
        <p className="text-2xl text-cream-100/90">What You’ll Receive</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center w-full max-w-6xl">
        {items.map(({ title, desc }) => (
          <RevealCard key={title} title={title}><p>{desc}</p></RevealCard>
        ))}
      </div>
    </div>
  );
}
