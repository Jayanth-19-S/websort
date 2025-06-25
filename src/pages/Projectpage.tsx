import { motion } from "framer-motion";
import { useEffect } from "react";
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
  { image: eleiotImg, title: "GND", desc: "Accurate data capture with high-performance IoT Sensors designed for precision monitoring in real-time.", link: "https://gndsolutions.in/" },
  { image: fhomeImg, title: "cloud 7", desc: "Cloud 7 Properties in Bangalore  presents a diverse selection of 3 BHK flats catering to Luxurious Living.", link: "https://cloud7properties.com/" },
  { image: bagImg, title: "Boombolt", desc: "Boombolt offers a focused line of Indian-made, design-forward backpacks and duffel bags.", link: "https://boombolt.in/" },
  { image: plateformImg, title: "Sonovate", desc: "Empowering recruitment agencies with flexible funding and embedded solutions for scale..", link: "https://www.sonovate.com/" },
  { image: beautyImg, title: "Tilt", desc: "Korean beauty secrets infused with ingredients that truly work for Indian skin.", link: "https://tiltcosmetics.in/" },
  { image: clothImg, title: "Belore Slims", desc: "Belore Slims is a women's fashion brand offering tummy-tucker jeggings, leggings, and shapewear designed for comfort, confidence, and a flattering fit.", link: "https://www.beloreslims.com/" },
  { image: hrImg, title: "stickyhr", desc: "The best HR software for StickyHR companies and startups to manage employee, payroll assistance, time off, attendance tracking with single software.", link: "https://www.stickyhr.com/" },
  { image: carImg, title: "Cngen Services", desc: "our expert technicians ensure top-notch vehicle maintenance and repairs, ensuring your vehicle remains reliable.Cngen services provide car washing services in bangalore.", link: "https://play.google.com/store/apps/details?id=com.services.cngenservices&pcampaignid=web_share" },
  { image: ttenniesImg, title: "PongKart", desc: "PongKart is India's premier online store for table tennis equipment, offering a wide range of blades, rubbers, balls, and accessories from top brands. ", link: "https://www.pongkart.com/" },
];

// Simple light particle background component
function LightParticlesBG() {
  // Many small, visible white dot particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 6, // 6-14px, slightly larger
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 8 + 8,
    delay: Math.random() * 8,
  }));

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-[2px] opacity-90" // less blur, higher opacity
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: 'white',
            zIndex: -1,
            pointerEvents: "none",
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.8, 1, 0.8], // higher opacity throughout
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

export default function Projectpage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Project-themed icons for particles
 

  return (
    <div className="relative w-full min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1437 0%, #000000 100%)', position: 'relative', zIndex: 0 }}>
      {/* Simple light particles background */}
      <LightParticlesBG />
      <div className="relative w-full min-h-screen py-16 flex flex-col items-center overflow-hidden">
        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-lg"
          style={{
            background: `linear-gradient(45deg, 
              rgba(59, 130, 246, 0.3), 
              rgba(34, 211, 238, 0.3), 
              rgba(96, 165, 250, 0.3), 
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
          {/* White dots background only for project section */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <LightParticlesBG />
          </div>
          <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center text-white mb-4 relative z-10">
            Our Projects 
          </h2>
          <div className="mx-auto h-2 w-40 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 relative z-10"></div>
        </div>

          
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 bg-transparent rounded-2xl shadow-none overflow-visible group ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              <div className="flex-1 flex justify-center items-center p-8">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, type: "spring" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full max-w-4xl h-[460px] object-cover shadow-lg ${idx % 2 === 1 ? 'rounded-r-3xl' : 'rounded-l-3xl'}`}
                  />
                </motion.div>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center md:items-start p-8 bg-white bg-opacity-90 dark:bg-transparent rounded-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
                >
                  <p className="text-xl text-gray-700 dark:text-gray-200 mb-6">{project.desc}</p>
                </motion.div>
                {project.link ? (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.6, type: "spring" }}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-2 border border-gray-300 bg-white text-gray-900 rounded-full font-semibold shadow hover:bg-gray-100 transition-colors">Read More</button>
                    </a>
                  </motion.div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
