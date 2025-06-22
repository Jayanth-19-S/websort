"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export const ServicesAnimatedBackground = () => {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 100 }).map(() => ({
        id: Math.random(),
        color: Math.random() > 0.5 ? "bg-blue-500/20" : "bg-purple-500/20",
        style: {
          width: Math.random() * 80 + 20,
          height: Math.random() * 80 + 20,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        },
        transition: {
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut",
          delay: Math.random() * 3,
        },
        animate: {
          y: `${Math.random() * 40 - 20}vh`,
          x: `${Math.random() * 40 - 20}vw`,
          scale: Math.random() * 0.5 + 0.8,
          rotate: Math.random() * 90 - 45,
        },
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute ${bubble.color} rounded-full blur-sm`}
          style={bubble.style}
          animate={bubble.animate}
          transition={bubble.transition}
        />
      ))}
    </div>
  );
}; 