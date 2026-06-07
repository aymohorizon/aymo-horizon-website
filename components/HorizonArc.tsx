"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * HorizonArc — the brand's horizon line, drawn in on page load.
 * A single shallow arc echoing the logo mark.
 */
export default function HorizonArc() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        className="h-[80px] w-full md:h-[120px]"
      >
        <motion.path
          d="M0 110 Q 720 -40 1440 110"
          stroke="#1C2B45"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  );
}
