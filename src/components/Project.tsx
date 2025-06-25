import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import appImg from "../assets/app.png";
import img2 from "../assets/img2.jpg"; // Example image, replace with actual project images
import uiuxImg from "../assets/uiux.jpg";
import webImg from "../assets/web.png";

export default function Projectpage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, []);

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

  return (
    <div className="min-h-screen  relative overflow-hidden" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80h-80z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="2" fill="currentColor" />
              <circle cx="80" cy="80" r="2" fill="currentColor" />
              <path d="M20 20L80 80M80 20L20 80" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 flex flex-col items-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 mt-2 text-center">
          Our Project
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 rounded-full mx-auto mb-8"></div>

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
          {/* Carousel Dots */}
          <div className="flex justify-center mt-24 gap-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 focus:outline-none ${
                  idx === activeIndex
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 border-pink-500 scale-125 shadow-lg"
                    : "bg-white/60 border-gray-300 hover:scale-110"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}