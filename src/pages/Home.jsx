import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const pages = [
    { name: "Ethos", path: "/cascade#what-we-offer" },
    { name: "Experience", path: "/cascade#premium-add-ons" },
    { name: "Did You Know?", path: "/cascade#sample-deliverables" },
    { name: "Our Angle", path: "/cascade#why-work-with-us" },
    { name: "Where We've Been", path: "/cascade#about" },
    { name: "Let's Connect", path: "/cascade#contact" },
];

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);
    const [introVisible, setIntroVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        setIntroVisible(true);
        const hold = setTimeout(() => setIntroVisible(false), 1800);
        const done = setTimeout(() => {
            setShowIntro(false);
            setContentVisible(true);
        }, 2500);
        return () => {
            clearTimeout(hold);
            clearTimeout(done);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[url('/assets/flamebgimage.mp4')] bg-cover bg-center relative">
            {/* Splash Intro Overlay */}
            {showIntro && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center
                        bg-black/60 transition-opacity duration-700
                        ${introVisible ? "opacity-100" : "opacity-0"}`}
                >
                    <h1 className="text-white text-6xl font-black text-center">
                        CREW STORY COLLECTIVE
                    </h1>
                </div>
            )}

            {/* Main Content */}
            <main className={`relative z-10 transition-opacity duration-700 ${contentVisible ? "opacity-100" : "opacity-0"}`}>
                {/* Foreground content */}
                <section
                    className={`w-full py-20 mb-12 text-center relative z-10 transition-opacity duration-700 ${contentVisible ? "opacity-100" : "opacity-0"}`}
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h1
                            className="
                                font-black uppercase tracking-tight
                                text-terracotta-800
                                text-5xl md:text-6xl lg:text-7xl
                                text-stroke-white text-outline-fallback
                                text-center mx-auto mb-4
                            "
                        >
                            {/* Mobile: stacked */}
                            <span className="md:hidden block">
                                WE<br />ARE<br />THE<br />CREW<br />STORY<br />COLLECTIVE
                            </span>
                            {/* Desktop: single line */}
                            <span className="hidden md:flex justify-center gap-3 pt-32">
                                <span>WE</span>
                                <span>ARE</span>
                                <span>THE</span>
                                <span>CREW</span>
                                <span>STORY</span>
                                <span>COLLECTIVE</span>
                            </span>
                        </h1>
                    </div>
                </section>


                {/* Grid of links */}
                <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl mx-auto justify-items-stretch relative z-10">
                    {pages.map(({ name, path }) => (
                        <Link
                            key={name}
                            to={path}
                            className="w-full p-8 bg-terracotta/30 hover:bg-terracotta/10 rounded-2xl shadow-md transition-transform transform hover:scale-105"
                        >
                            <span className="block text-xl text-center font-semibold text-terracotta-800">{name}</span>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    );
}