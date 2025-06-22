"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export const CareerParticleAnimation = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 150 }).map(() => {
        const size = Math.random() * 2 + 1; // 1px to 3px
        return {
          id: Math.random(),
          style: {
            width: size,
            height: size,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          },
          transition: {
            duration: Math.random() * 1.5 + 0.5, // 0.5s to 2s
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const,
            delay: Math.random() * 2,
          },
          animate: {
            opacity: [0.2, 1, 0.2], // Twinkle effect
          },
        };
      }),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute bg-white rounded-full`}
          style={star.style}
          initial={{ opacity: 0.2 }}
          animate={star.animate}
          transition={star.transition}
        />
      ))}
    </div>
  );
}; 