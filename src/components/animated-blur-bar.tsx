import React from "react";

interface AnimatedBlurBarProps {
  height?: string; // e.g., 'h-4'
  animationType?: "flow" | "pulse" | "wave" | "shimmer" | "glow";
  className?: string;
}

const animationClassMap: Record<string, string> = {
  flow: "animate-gradient-flow",
  pulse: "animate-gradient-pulse",
  wave: "animate-gradient-wave",
  shimmer: "animate-gradient-shimmer",
  glow: "animate-gradient-glow",
};

const AnimatedBlurBar: React.FC<AnimatedBlurBarProps> = ({
  height = "h-4",
  animationType = "flow",
  className = "",
}) => {
  return (
    <div
      className={`w-full ${height} ${animationClassMap[animationType] || ""} ${className}`.trim()}
      style={{
        background:
          "linear-gradient(90deg, #a78bfa 0%, #f472b6 50%, #38bdf8 100%)",
        filter: "blur(0.5px)",
      }}
    />
  );
};

export default AnimatedBlurBar; 