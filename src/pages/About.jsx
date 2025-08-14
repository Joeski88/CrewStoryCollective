import { useEffect } from "react";
import RevealCard from "../components/RevealCard";
import { useBackground } from "../components/BackgroundContent";

const items = [
  { title: "Our Ethos", desc: "Human stories, crafted with care. We design for resonance over noise." },
  { title: "Our Crew", desc: "Directors, producers, and technologists who’ve shipped at every scale." },
  { title: "Our Network", desc: "Trusted partners for VFX, sound, grade, and post finishing." },
  { title: "Sustainability", desc: "Lean crews, responsible travel, and low-impact materials." },
];

export default function About() {
  const { setActiveBg } = useBackground();
  useEffect(() => { setActiveBg("/assets/bg-about.svg"); }, [setActiveBg]);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-white bg-olive-500 px-6 py-3 rounded-2xl mb-8">
          About</h1>
        <p className="text-2xl text-cream-100/90">Who We Are</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, desc }) => (
          <RevealCard key={title} title={title}><p>{desc}</p></RevealCard>
        ))}
      </div>
    </div>
  );
}
