import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Cross-fades full-screen background images.
 * Pass `src` and it fades from previous image to new image.
 */
export default function BackgroundFader({ src }) {
  const [stack, setStack] = useState([src]);

  useEffect(() => {
    setStack((prev) => {
      const last = prev[prev.length - 1];
      return last === src ? prev : [...prev, src];
    });
  }, [src]);

  return (
    <div className="fixed inset-0 -z-10">
      <AnimatePresence>
        {stack.map((url, i) => (
          <motion.div
            key={url}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${url})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onAnimationComplete={() => {
              // Only keep the latest image in the stack
              setStack([src]);
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
