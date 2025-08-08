import { Link } from 'react-router-dom';

const pages = [
  { name: 'What We Offer', path: '/what-we-offer' },
  { name: 'Premium Add-Ons', path: '/premium-add-ons' },
  { name: 'Sample Deliverables', path: '/sample-deliverables' },
  { name: 'Why Work With Us', path: '/why-work-with-us' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Home() {
  return (
    <div className="w-screen min-h-screen">
      {/* Hero */}
      <section className="w-screen py-20 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading text-cream-100 mb-4">
            We Are The Crew Story Collective
          </h1>
          <p className="text-lg text-cream-200">
            We craft bespoke video content that resonates — from branded films to documentaries.
          </p>
        </div>
      </section>

      {/* Page Links Grid */}
      <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl mx-auto justify-items-stretch">
        {pages.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className=" w-full
            group relative p-8 bg-olive-500 hover:bg-olive-100 
            rounded-2xl shadow-md transition-transform transform 
            hover:scale-105
          "
          >
            <span className="block text-xl font-semibold text-midnight-700 group-hover:text-olive-800 transition-colors">
              {name}
            </span>
            <div className="
            absolute inset-0 
            bg-gradient-to-br from-olive-400 to-terracotta-300 
            opacity-0 group-hover:opacity-25 
            rounded-2xl transition-opacity
          " />
          </Link>
        ))}
      </section>
    </div>
  );
}
