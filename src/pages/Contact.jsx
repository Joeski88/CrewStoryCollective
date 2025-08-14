import { useEffect } from "react";
import RevealCard from "../components/RevealCard";
import { useBackground } from "../components/BackgroundContent";

const items = [
  { title: "Project Enquiries", desc: "Tell us your goals, timeline, and budget range — we’ll shape a route." },
  { title: "Collaborations", desc: "Agencies and partners: we love co-creating. Let’s talk capabilities." },
  { title: "Careers & Crew", desc: "Send reels, portfolios, or CVs. We maintain a freelance roster." },
  { title: "General", desc: "Anything else — drop us a line and we’ll get back quickly." },
];

export default function Contact() {
  const { setActiveBg } = useBackground();
  useEffect(() => { setActiveBg("/assets/bg-contact.svg"); }, [setActiveBg]);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-white bg-olive-500 px-6 py-3 rounded-2xl mb-8">Contact</h1>
        <p className="text-2xl text-cream-100/90">Let’s Start a Conversation</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, desc }) => (
          <RevealCard key={title} title={title}><p>{desc}</p></RevealCard>
        ))}
      </div>
    </div>
  );
}
