import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-100 text-midnight-500">
      {/* Header */}
      <header className="bg-olive-500 text-cream-100 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-2xl font-heading">Crew Story Collective</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-6 bg-sage-500 text-terracotta-800">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-olive-800 text-terracotta-800 text-center py-4">
        &copy; {new Date().getFullYear()} Crew Story Collective
      </footer>
    </div>
  );
}
