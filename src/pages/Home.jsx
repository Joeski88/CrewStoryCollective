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
    <div className="min-h-screen flex flex-col justify-center items-center bg-sage-500 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center text-terracotta-800">
        Crew Story Collective
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {pages.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className="group relative p-8 bg-slate-100 hover:bg-slate-200 rounded-2xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl text-center"
          >
            <span className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
              {name}
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition rounded-2xl pointer-events-none" />
          </Link>
        ))}
      </div>
    </div>
  );
}
