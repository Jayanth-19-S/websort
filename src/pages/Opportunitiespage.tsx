import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = canvas.parentElement ? canvas.parentElement.offsetHeight : 200;
    canvas.width = width;
    canvas.height = height;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.7,
      dx: (Math.random() - 0.5) * 0.5,
      dy: Math.random() * 0.7 + 0.2,
      opacity: Math.random() * 0.7 + 0.3,
    }));

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.shadowColor = "#b3c6ff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        p.y += p.dy;
        p.x += p.dx;
        if (p.y > height) {
          p.y = -p.r;
          p.x = Math.random() * width;
        }
        if (p.x < 0 || p.x > width) {
          p.x = Math.random() * width;
        }
      }
      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.offsetHeight : 200;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default function Opportunitiespage() {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/careers');
    // Scroll to internship opportunities section after navigation
    setTimeout(() => {
      const element = document.getElementById('internship-opportunities');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-900 to-slate-800 px-4 py-4 overflow-hidden">
      <ParticlesBackground />
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center relative z-10">
        See what opportunities await you
      </h2>
      <button 
        onClick={handleExploreMore}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base px-6 py-2 rounded-lg shadow transition-all duration-300 relative z-10"
      >
        Explore More
      </button>
    </div>
  );
} 