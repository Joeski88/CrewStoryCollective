import { Outlet } from "react-router-dom";
import { useBackground } from "../components/BackgroundContent";
import BackgroundFader from "./BackgroundFader";
import HomeButton from "./HomeButton";

export default function Layout() {
  const { activeBg } = useBackground();

  return (
    <div className="relative flex flex-col min-h-screen w-screen">
      <BackgroundFader src={activeBg} />
          {/* ✅ Global Home button, appears on all pages */}
      <HomeButton />
      <main className="flex-1 w-full p-0 bg-transparent relative z-10">
        <Outlet />
      </main>
      <footer className="relative z-10 py-3 px-6 bg-black/40 text-cream-100 rounded-full mx-auto mb-6">
        &copy; {new Date().getFullYear()} Crew Story Collective
      </footer>
    </div>
  );
}
