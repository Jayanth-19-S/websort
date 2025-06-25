import { motion } from "framer-motion";

export default function BlurredBlobsBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Light Blue Blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-300 opacity-30 rounded-full blur-3xl"
        style={{ top: '-100px', left: '-120px' }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Lighter Blue Blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-blue-200 opacity-20 rounded-full blur-2xl"
        style={{ bottom: '-80px', right: '-100px' }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Faint White Blob */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-white opacity-20 rounded-full blur-2xl"
        style={{ top: '40%', left: '50%' }}
        animate={{ x: [0, 20, 0], y: [0, 10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
} 