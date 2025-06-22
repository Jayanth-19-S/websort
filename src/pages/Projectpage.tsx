import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import appImg from "../assets/app.png";
import marketImg from "../assets/market.png";
import uiuxImg from "../assets/uiux.jpg";
import webImg from "../assets/web.png";
import Footer from "../components/Footer";

export default function Projectpage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const projects = [
    {
      title: "App development",
      image: appImg,
    },
    {
      title: "UI/UX Design",
      image: uiuxImg,
    },
    {
      title: "Web development",
      image: webImg,
    },
    {
      title: "Digital Marketing",
      image: marketImg,
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isVisible, projects.length]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.8,
      },
    },
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  const getVisibleCards = () => {
    if (isMobile) {
      return [{ ...projects[activeIndex], originalIndex: activeIndex, position: "center" }];
    }

    const totalCards = projects.length;
    const leftIndex = (activeIndex - 1 + totalCards) % totalCards;
    const centerIndex = activeIndex;
    const rightIndex = (activeIndex + 1) % totalCards;

    return [
      { ...projects[leftIndex], originalIndex: leftIndex, position: "left" },
      { ...projects[centerIndex], originalIndex: centerIndex, position: "center" },
      { ...projects[rightIndex], originalIndex: rightIndex, position: "right" },
    ];
  };

  const visibleCards = getVisibleCards();

  // Animated particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements */}
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: -mousePosition.x * 30,
            y: -mousePosition.y * 30,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="animatedGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <motion.path
                  d="M0 0h50v50h-50z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animatedGrid)" />
          </svg>
        </div>

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-4xl opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💻
        </motion.div>

        <motion.div
          className="absolute top-3/4 right-1/4 text-4xl opacity-10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🚀
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/3 text-4xl opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ⚡
        </motion.div>

        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-lg"
          style={{
            background: `linear-gradient(45deg, 
              rgba(59, 130, 246, 0.3), 
              rgba(147, 51, 234, 0.3), 
              rgba(236, 72, 153, 0.3), 
              rgba(59, 130, 246, 0.3))`,
            backgroundSize: '400% 400%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 flex flex-col items-center">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-8 mt-2 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Our Project
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full mb-16"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeOut",
            }}
          />

          <motion.div
            ref={sectionRef}
            className="w-full flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Carousel Container */}
            <div className="relative flex items-center justify-center mt-16 w-full">
              <div className="flex items-center justify-center gap-12 w-full max-w-[1100px]">
                <div className={`flex items-center justify-center ${isMobile ? 'w-full' : 'gap-12'} relative`}>
                  {visibleCards.map((project) => {
                    const isCenter = project.position === "center";
                    let scale = isMobile ? 1 : (isCenter ? 1.18 : 0.95);
                    let opacity = isMobile ? 1 : (isCenter ? 1 : 0.8);
                    let zIndex = isCenter ? 20 : 10;

                    return (
                      <motion.div
                        key={`${project.originalIndex}-${activeIndex}`}
                        className="relative group cursor-pointer transition-all duration-500 ease-out flex flex-col items-center"
                        style={{
                          zIndex: zIndex,
                          width: isMobile ? "280px" : "24rem",
                          transformOrigin: "center",
                        }}
                        initial={{
                          scale: scale,
                          opacity: opacity,
                          x: project.position === "left" ? -100 : project.position === "right" ? 100 : 0,
                        }}
                        animate={{
                          scale: scale,
                          opacity: opacity,
                          x: 0,
                          transition: { 
                            duration: 0.6, 
                            ease: "easeInOut",
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                          },
                        }}
                        exit={{
                          scale: 0.8,
                          opacity: 0,
                          x: project.position === "left" ? -100 : project.position === "right" ? 100 : 0,
                          transition: { duration: 0.4, ease: "easeInOut" },
                        }}
                        onClick={() => handleCardClick(project.originalIndex)}
                        whileHover={{
                          scale: isMobile ? 1.05 : (isCenter ? 1.15 : scale + 0.05),
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div
                          className={`relative overflow-hidden rounded-3xl p-2 shadow-2xl ${isCenter
                              ? "border-4 border-pink-400 bg-gradient-to-r from-pink-500 to-purple-600 shadow-pink-500/25"
                              : "border-4 border-white bg-gradient-to-r from-blue-500/50 to-purple-500/50 shadow-blue-500/20"
                            }`}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`rounded-2xl object-cover ${isCenter ? "w-96 h-96" : "w-72 h-72"}`}
                          />
                        </div>
                        <div className="mt-6 flex justify-center">
                          <span
                            className={`px-5 py-2 rounded-full font-semibold text-sm shadow transition-all duration-300 ${isCenter
                                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                                : "bg-white text-gray-900"
                              }`}
                          >
                            {project.title}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}