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
        <div className="min-h-screen flex flex-col justify-center items-center bg-[url('/assets/bg-image.svg')] bg-cover bg-center px-4">
      
      {/* Hero */}
      <section className="text-center py-20 bg-midnight-100 rounded-2xl mb-12 w-full max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-heading text-cream-100 mb-4">
          Tell Your Story Creatively
        </h1>
        <p className="text-lg text-cream-200 max-w-xl mx-auto">
          We craft bespoke video content that resonates — from branded films to documentaries.
        </p>
      </section>

      {/* Page Links Grid */}
      <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {pages.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className="
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
