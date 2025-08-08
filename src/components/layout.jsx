import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="relative flex flex-col min-h-screen w-screen">

      {/* --- full-bleed SVG underlay --- */}
              <div
          className="
                  fixed inset-0 -z-10
                  bg-[linear-gradient(90deg,_theme(colors.olive.400),_
                                        theme(colors.sage.500),_
                                        theme(colors.cream.800),_
                                        theme(colors.terracotta.300))]
                  bg-[length:200%_200%]
                  animate-gradient-shift
                "/>

      {/* Header */}
      <header className="bg-olive-500 text-cream-100 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-2xl font-heading">Crew Story Collective</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full p-0 bg-transparent text-terracotta-800">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-olive-800 text-terracotta-800 text-center py-4">
        &copy; {new Date().getFullYear()} Crew Story Collective
      </footer>
    </div>
  );
}
