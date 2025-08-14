import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * RevealCard
 * - Title “pill” always visible
 * - Description fades & slides in on hover (desktop) or tap (mobile)
 * - Accessible: keyboard focus also reveals content
 */
export default function RevealCard({ title, children, className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group relative w-full ${className}`}
      // mobile tap toggles; desktop hover handled by CSS + group
      onClick={() => setOpen((v) => !v)}
    >
      {/* Card base */}
      <div className="rounded-2xl bg-black/35 backdrop-blur-sm ring-1 ring-white/10 shadow-lg p-6 transition-transform group-hover:scale-[1.02]">
        {/* Title pill */}
        <div className="inline-block rounded-full bg-black/50 px-5 py-2 text-cream-100 font-semibold shadow">
          {title}
        </div>

        {/* Description (hover/focus/tap reveal) */}
        <AnimatePresence initial={false}>
          {(open) && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-4 text-cream-100/90 leading-relaxed"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop hover/focus reveal (no JS) */}
        <div
          className="
            pointer-events-none mt-4 text-cream-100/90 leading-relaxed
            opacity-0 translate-y-2 transition-all duration-200 ease-out
            group-hover:opacity-100 group-hover:translate-y-0
            group-focus-within:opacity-100 group-focus-within:translate-y-0
            hidden md:block
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
