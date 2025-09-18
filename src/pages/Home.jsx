import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
    const [showMenu, setShowMenu] = useState(false);
    const [blurOut, setBlurOut] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const skipIntro = location.state?.skipIntro;

    useEffect(() => {
        if (skipIntro) {
            setShowIntro(false);
            setContentVisible(true);
            return;
        }
        setIntroVisible(true);
        const hold = setTimeout(() => setIntroVisible(false), 3500);
        const done = setTimeout(() => {
            setShowIntro(false);
            setContentVisible(true);
        }, 4000);
        return () => {
            clearTimeout(hold);
            clearTimeout(done);
        };
    }, [skipIntro]);

    // Handler for menu link click
    const handleMenuLink = (path) => {
        setBlurOut(true);
        setTimeout(() => {
            setShowMenu(false);
            setBlurOut(false);
            navigate(path);
        }, 700); // 350ms matches the transition
    };

    return (
        <div className="min-h-screen bg-[url('/assets/flamebgimage.mp4')] bg-cover bg-center relative">
            {/* Splash Intro Overlay */}
            {showIntro && (
                <div
                    className={`fixed inset-0 z-50 flex flex-col items-center justify-center
            bg-black/60 transition-opacity duration-700
            ${introVisible ? "opacity-100" : "opacity-0"}`}
                >
                    <div className="flex flex-col items-center">
                        <h1 className="text-white text-6xl font-black text-center mb-6">
                            ARE YOU READY TO
                        </h1>
                        <div className="flex flex-row justify-evenly items-center w-full max-w-2xl gap-4">
                            <p className="text-terracotta-500 text-2xl font-extrabold tracking-wide">RECONNECT</p>
                            <p className="text-terracotta-500 text-2xl font-extrabold tracking-wide">REGENERATE</p>
                            <p className="text-terracotta-500 text-2xl font-extrabold tracking-wide">REDISCOVER</p>
                        </div>
                    </div>
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

                {/* Menu Button */}
                <div className="flex justify-center mb-12">
                    <button
                        onClick={() => setShowMenu(true)}
                        className="text-terracotta-500 font-bold py-4 px-12 rounded-2xl text-2xl shadow-lg transition"
                    >
                        Menu
                    </button>
                </div>

                {/* Menu Overlay */}
                {showMenu && (
                    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-700 ${blurOut ? "blur-sm opacity-60" : "blur-0 opacity-100"}`}>
                        <div className="bg-white/80 rounded-2xl shadow-2xl p-10 max-w-md w-full relative flex flex-col items-center transition-all duration-300">
                            <button
                                onClick={() => setShowMenu(false)}
                                className="absolute top-4 right-4 text-3xl text-terracotta-500 hover:text-terracotta-700 font-bold"
                                aria-label="Close menu"
                            >
                                &times;
                            </button>
                            <h2 className="text-3xl font-extrabold text-terracotta-700 mb-8">Menu</h2>
                            <nav className="flex flex-col gap-6 w-full">
                                {pages.map(({ name, path }) => (
                                    <button
                                        key={name}
                                        className="block text-xl text-center font-semibold text-terracotta-800 hover:text-terracotta-500 transition bg-transparent"
                                        onClick={() => handleMenuLink(path)}
                                    >
                                        {name}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}