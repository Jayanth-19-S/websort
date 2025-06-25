import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bagImg from "../assets/bag.jpg";
import beautyImg from "../assets/beauty.jpg";
import carImg from "../assets/car.jpg";
import clothImg from "../assets/cloth.jpg";
import eleiotImg from "../assets/eleiot.jpg";
import fhomeImg from "../assets/fhome.jpg";
import hrImg from "../assets/hr.jpg";
import plateformImg from "../assets/plateform.jpg";
import ttenniesImg from "../assets/tennies.jpg";
import Footer from "../components/Footer";

const projects = [
  { image: eleiotImg, title: "GND", desc: "Accurate data capture with high-performance IoT Sensors designed for precision monitoring in real-time." },
  { image: fhomeImg, title: "cloud 7", desc: "Cloud 7 Properties in Bangalore  presents a diverse selection of 3 BHK flats catering to Luxurious Living. For those seeking premium experiences, Attractive Only @₹3 Crore, boasting world-class amenities, prime locations, and stunning architecture." },
  { image: bagImg, title: "Boombolt", desc: "Boombolt offers a focused line of Indian-made, design-forward backpacks and duffel bags. The site makes it easy to explore, compare and purchase, backed by business support for dealers and affiliates." },
  { image: plateformImg, title: "Sonovate", desc: "Empowering recruitment agencies with flexible funding and embedded solutions for scale.." },
  { image: beautyImg, title: "Tilt", desc: "Korean beauty secrets infused with ingredients that truly work for Indian skin. Powered by Ginseng, the ultimate skin-repairing powerhouse, and Rice Water, nature's hydration and brightening elixir." },
  { image: clothImg, title: "Belore Slims", desc: "Belore Slims is a women's fashion brand offering tummy-tucker jeggings, leggings, and shapewear designed for comfort, confidence, and a flattering fit." },
  { image: hrImg, title: "stickyhr", desc: "The best HR software for StickyHR companies and startups to manage employee, payroll assistance, time off, attendance tracking with single software." },
  { image: carImg, title: "Cngen Services", desc: "our expert technicians ensure top-notch vehicle maintenance and repairs, ensuring your vehicle remains reliable.Cngen services provide car washing services in bangalore." },
  { image: ttenniesImg, title: "PongKart", desc: "PongKart is India's premier online store for table tennis equipment, offering a wide range of blades, rubbers, balls, and accessories from top brands. " },
];

export default function Projectpage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Animated particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 flex flex-col items-center">
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

        {/* Projects Vertical List */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col gap-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
            Our Projects
          </h2>
          <div className="h-1.5 w-40 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-16 sm:mb-20"></div>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col md:flex-row items-center md:items-stretch bg-transparent rounded-2xl shadow-none overflow-visible group ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.7, type: "spring" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-md"
              />
              <div className="flex flex-col justify-center items-center md:items-start p-8 w-full md:w-1/2 bg-white bg-opacity-90 dark:bg-transparent">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">{project.desc}</p>
                {project.title === "GND" ? (
                  <a href="https://gndsolutions.in/" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 border-2 border-gray-800 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Read More</button>
                  </a>
                ) : project.title === "stickyhr" ? (
                  <a href="https://www.stickyhr.com/" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 border-2 border-gray-800 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Read More</button>
                  </a>
                ) : project.title === "Cngen Services" ? (
                  <a href="https://play.google.com/store/apps/details?id=com.services.cngenservices&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 border-2 border-gray-800 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Read More</button>
                  </a>
                ) : project.title === "Belore Slims" ? (
                  <a href="https://www.beloreslims.com/" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 border-2 border-gray-800 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Read More</button>
                  </a>
                ) : project.title === "Tilt" ? (
                  <a href="https://tiltcosmetics.in/" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 border-2 border-gray-800 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Read More</button>
                  </a>
                ) : project.title === "Sonovate" ? (
                  <a href="https://www.sonovate.com/" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 border-2 border-gray-800 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Read More</button>
                  </a>
                ) : project.title === "Boombolt" ? (
                  <a href="https://boombolt.in/" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 border-2 border-gray-800 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Read More</button>
                  </a>
                ) : project.title === "cloud 7" ? (
                  <a href="https://cloud7properties.com/" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 border-2 border-gray-800 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Read More</button>
                  </a>
                ) : project.title === "PongKart" ? (
                  <a href="https://www.pongkart.com/" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 border-2 border-gray-800 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Read More</button>
                  </a>
                ) : (
                  <button className="px-6 py-2 border-2 border-gray-800 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Read More</button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}