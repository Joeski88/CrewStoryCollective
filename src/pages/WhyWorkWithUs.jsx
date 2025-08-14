import { useEffect } from "react";
import RevealCard from "../components/RevealCard";
import { useBackground } from "../components/BackgroundContent";

const items = [
  { title: "Senior Craft", desc: "Decades of production experience across documentary, branded, and live." },
  { title: "Strategy-First", desc: "We align story, channel, and audience before we roll camera." },
  { title: "Transparent Process", desc: "Clear milestones, budgets, and communication at every stage." },
  { title: "Measurable Impact", desc: "Creative that maps to KPIs: engagement, conversions, and brand lift." },
];

export default function WhyWorkWithUs() {
  const { setActiveBg } = useBackground();
  useEffect(() => { setActiveBg("/assets/bg-withus.svg"); }, [setActiveBg]);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-white bg-olive-500 px-6 py-3 rounded-2xl mb-8">
          Why Work With Us</h1>
        <p className="text-2xl text-cream-100/90">What Makes Us Different</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, desc }) => (
          <RevealCard key={title} title={title}><p>{desc}</p></RevealCard>
        ))}
      </div>
    </div>
  );
}
