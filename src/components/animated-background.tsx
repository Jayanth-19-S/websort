"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const imageUrl = "/images/flowing-background.jpeg";

export function AnimatedBackground() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-teal-900 to-black" />

      {/* Moving background layers */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ x: 0, y: 0, scale: 1.1 }}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 30, -30, 0],
          scale: [1.1, 1.2, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ mixBlendMode: "overlay" }}
        />
      </motion.div>

      {/* Second layer for depth */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ x: 0, y: 0, scale: 1.2, rotate: 0 }}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -20, 40, 0],
          scale: [1.2, 1.1, 1.3, 1.2],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ mixBlendMode: "soft-light" }}
        />
      </motion.div>

      {/* Third layer for more complexity */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ x: 0, y: 0, scale: 1.3 }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 50, -20, 0],
          scale: [1.3, 1.1, 1.4, 1.3],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ mixBlendMode: "multiply" }}
        />
      </motion.div>

      {/* Floating particles for extra effect */}
      {windowSize.width > 0 &&
        Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              y: [null, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
    </div>
  );
} 