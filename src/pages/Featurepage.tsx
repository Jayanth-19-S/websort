import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import img4 from "../assets/img4.jpeg";
import iotImg from "../assets/iot.png.jpg";
import saasImg from "../assets/sas.png.jpg";
import techImg from "../assets/tech.png.jpg";

const features = [
  {
    title: "AI & IoT",
    image: iotImg,
    overlay: "AI and IoT-driven products",
    icons: [
      
    ],
    button: "Know More",
  },
  {
    title: "SaaS",
    image: saasImg,
    overlay: "Creating a tech community hub for developers and entrepreneurs",
    icons: [
      
    ],
    button: "Know More",
  },
  {
    title: "Tech",
    image: techImg,
    overlay: "Creating a tech community hub for developers and entrepreneurs",
    icons: [
      
    ],
    button: "Know More",
  },
];

export default function Featurepage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hovered) {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 4000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, hovered]);

  const handleKnowMore = () => {
    navigate('/services');
  };

  const feature = features[activeIndex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative pb-8" style={{backgroundImage:`url(${img4})`}}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>

      <div className="relative z-20 px-8 py-16 w-full max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 mt-8 text-center">Fueling the Future with Innovation</h2>
        <div className="flex flex-col items-center">
          <div
            className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-400 bg-slate-900 mb-8 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl aspect-[16/9]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70"
            >
              <span className="text-white text-2xl font-bold text-center px-8">{feature.overlay}</span>
            </motion.div>
          </div>
          {/* Feature Icons - Clear and Sharp */}
          <div className="flex justify-center gap-8 my-6 relative z-20">
            {feature.icons.map((icon, idx) => (
              <span key={idx}>{icon}</span>
            ))}
          </div>
          {/* Navigation Icons */}
          <div className="flex items-center justify-center gap-6 mb-8 relative z-20">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="focus:outline-none transform hover:scale-110 transition-transform duration-200"
              >
                <svg
                  className={`w-12 h-8 ${activeIndex === idx ? "text-red-500" : "text-white"} drop-shadow-lg`}
                  fill="none"
                  viewBox="0 0 48 32"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <polyline
                    points="4,16 16,4 28,16 16,28 4,16"
                    stroke="currentColor"
                    fill="none"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="20,16 32,4 44,16 32,28 20,16"
                    stroke="currentColor"
                    fill="none"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>
          {/* Know More Button - Clear and Sharp */}
          <button 
            onClick={handleKnowMore}
            className="relative z-20 px-10 py-3 rounded-md bg-black border border-white text-white font-semibold text-lg shadow-lg hover:bg-white hover:text-black transition-colors duration-300 drop-shadow-lg"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
} 