import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const neonColors = ["#00ffff", "#ff00ff", "#ffff00", "#00ff00", "#ff0080", "#8000ff", "#ff8000", "#0080ff"];
const codeSnippets = [
  "const", "function", "=>", "{}", "[]", "import", "export", "async", "await", "React", "useState", "useEffect", "API", "JSON", "HTTP", "CSS", "HTML", "JavaScript", "TypeScript", "Node.js", "MongoDB", "SQL", "Git", "Docker",
];

type ConstellationParticle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  connections: number[];
};

type CodeElement = {
  id: number;
  x: number;
  y: number;
  text: string;
  speed: number;
  opacity: number;
  color: string;
};

type NeonShape = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: "hexagon" | "triangle" | "diamond" | "circle";
  color: string;
  glowIntensity: number;
};

export default function CyberBackgroundAnimation() {
  const [particles, setParticles] = useState<ConstellationParticle[]>([]);
  const [codeElements, setCodeElements] = useState<CodeElement[]>([]);
  const [neonShapes, setNeonShapes] = useState<NeonShape[]>([]);
  const [time, setTime] = useState(0);

  // Initialize particles
  useEffect(() => {
    const newParticles: ConstellationParticle[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      color: neonColors[Math.floor(Math.random() * neonColors.length)],
      connections: [],
    }));
    setParticles(newParticles);

    const newCodeElements: CodeElement[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.3 + 0.1,
      color: neonColors[Math.floor(Math.random() * neonColors.length)],
    }));
    setCodeElements(newCodeElements);

    const N = 24;
    const newNeonShapes: NeonShape[] = Array.from({ length: N }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: ((i + 0.5) * window.innerHeight) / N,
      size: Math.random() * 100 + 50,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      type: "circle",
      color: neonColors[Math.floor(Math.random() * neonColors.length)],
      glowIntensity: Math.random() * 0.8 + 0.2,
    }));
    setNeonShapes(newNeonShapes);
  }, []);

  // Animation loop
  useEffect(() => {
    let animationFrame: number;
    function animate() {
      setTime((prev) => prev + 0.016);
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          if (newX < 0) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = 0;
          if (newY < 0) newY = window.innerHeight;
          if (newY > window.innerHeight) newY = 0;
          return { ...particle, x: newX, y: newY };
        })
      );
      setCodeElements((prev) =>
        prev.map((element) => {
          let newY = element.y - element.speed;
          if (newY < -50) {
            newY = window.innerHeight + 50;
          }
          return { ...element, y: newY };
        })
      );
      setNeonShapes((prev) =>
        prev.map((shape) => ({
          ...shape,
          rotation: shape.rotation + shape.rotationSpeed,
          glowIntensity: 0.3 + Math.sin(time * 2 + shape.id) * 0.5,
        }))
      );
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [time]);

  // Calculate connections between particles
  const getConnections = () => {
    const connections: Array<{ x1: number; y1: number; x2: number; y2: number; opacity: number }> = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          const opacity = ((150 - distance) / 150) * 0.3;
          connections.push({
            x1: particles[i].x,
            y1: particles[i].y,
            x2: particles[j].x,
            y2: particles[j].y,
            opacity,
          });
        }
      }
    }
    return connections;
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(255, 255, 0, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)
          `,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 40% 60%, rgba(255, 255, 0, 0.1) 0%, transparent 50%),
             linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)`,
            `radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 20% 80%, rgba(255, 0, 255, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 60% 40%, rgba(255, 255, 0, 0.1) 0%, transparent 50%),
             linear-gradient(225deg, #0a0a0a 0%, #2e0a1a 25%, #3e1621 50%, #60340f 75%, #0a0a0a 100%)`,
            `radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 40% 60%, rgba(255, 255, 0, 0.1) 0%, transparent 50%),
             linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)`,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      {/* Scanning Lines Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.03) 2px,
            rgba(0, 255, 255, 0.03) 4px
          )`,
        }}
        animate={{
          backgroundPosition: ["0px 0px", "0px 100px"],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      {/* Constellation Particles */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Connection Lines */}
        {getConnections().map((connection, i) => (
          <line
            key={i}
            x1={connection.x1}
            y1={connection.y1}
            x2={connection.x2}
            y2={connection.y2}
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            opacity={connection.opacity}
          />
        ))}
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#ff00ff" />
            <stop offset="100%" stopColor="#ffff00" />
          </linearGradient>
        </defs>
      </svg>
      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: particle.id * 0.1,
          }}
        />
      ))}
      {/* Floating Code Elements */}
      {codeElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute font-mono text-sm select-none pointer-events-none"
          style={{
            left: element.x,
            top: element.y,
            color: element.color,
            opacity: element.opacity,
            textShadow: `0 0 10px ${element.color}`,
          }}
          animate={{
            opacity: [element.opacity, element.opacity * 2, element.opacity],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: element.id * 0.2,
          }}
        >
          {element.text}
        </motion.div>
      ))}
      {/* Neon Geometric Shapes */}
      {neonShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: shape.x - shape.size / 2,
            top: shape.y - shape.size / 2,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            rotate: shape.rotation,
          }}
          transition={{
            duration: 0,
          }}
        >
          {shape.type === "hexagon" && (
            <div
              className="w-full h-full"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                border: `2px solid ${shape.color}`,
                boxShadow: `inset 0 0 20px ${shape.color}40, 0 0 20px ${shape.color}${Math.floor(
                  shape.glowIntensity * 255,
                )
                  .toString(16)
                  .padStart(2, "0")}`,
              }}
            />
          )}
          {shape.type === "triangle" && (
            <div
              className="w-0 h-0"
              style={{
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid ${shape.color}40`,
                filter: `drop-shadow(0 0 10px ${shape.color})`,
              }}
            />
          )}
          {shape.type === "diamond" && (
            <div
              className="w-full h-full"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                border: `2px solid ${shape.color}`,
                boxShadow: `inset 0 0 20px ${shape.color}40, 0 0 20px ${shape.color}${Math.floor(
                  shape.glowIntensity * 255,
                )
                  .toString(16)
                  .padStart(2, "0")}`,
              }}
            />
          )}
          {shape.type === "circle" && (
            <div
              className="w-full h-full rounded-full"
              style={{
                border: `2px solid ${shape.color}`,
                boxShadow: `inset 0 0 20px ${shape.color}40, 0 0 20px ${shape.color}${Math.floor(
                  shape.glowIntensity * 255,
                )
                  .toString(16)
                  .padStart(2, "0")}`,
              }}
            />
          )}
        </motion.div>
      ))}
      {/* Holographic Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            45deg,
            transparent 30%,
            rgba(0, 255, 255, 0.05) 50%,
            transparent 70%
          )`,
          backgroundSize: "200px 200px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "200px 200px"],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  );
} 