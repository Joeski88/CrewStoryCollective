import { Outlet } from "react-router-dom";
import HomeButton from "./HomeButton";
import FlameBackground from "./FlameBgImage";

export default function Layout() {
    return (
        <div className="relative w-screen min-h-screen flex flex-col overflow-hidden">
            {/* 🔥 Background video behind everything */}
            <FlameBackground />

            {/* Page Content */}
            <main className="relative z-10 flex-1">
                <Outlet />
            </main>

            <footer className="relative z-10 py-3 px-6 bg-black/40 text-cream-100 rounded-full mx-auto mb-6">
                &copy; {new Date().getFullYear()} Crew Story Collective
            </footer>
        </div>
    );
}
