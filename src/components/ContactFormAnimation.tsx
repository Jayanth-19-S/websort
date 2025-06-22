"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export const ContactFormAnimation = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 70 }).map(() => ({
        id: Math.random(),
        color: Math.random() > 0.5 ? "bg-red-500/50" : "bg-green-500/50",
        style: {
          width: Math.random() * 3 + 1,
          height: Math.random() * 3 + 1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        },
        transition: {
          duration: Math.random() * 20 + 15,
          repeat: Infinity,
          repeatType: "mirror" as const,
          ease: "linear" as const,
          delay: Math.random() * -20,
        },
        animate: {
          x: `${Math.random() * 80 - 40}vw`,
          y: `${Math.random() * 80 - 40}vh`,
        },
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.color} rounded-full blur-sm`}
          style={particle.style}
          animate={particle.animate}
          transition={particle.transition}
        />
      ))}
    </div>
  );
}; 