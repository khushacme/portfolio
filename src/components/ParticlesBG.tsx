// src/components/ParticlesBG.tsx
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    particleground: any;
  }
}

const ParticlesBG: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particlesRef.current && window.particleground) {
      window.particleground(particlesRef.current, {
        dotColor: "#00ffcc",
        lineColor: "#00ffcc",
        particleRadius: 4,
        lineWidth: 1,
        proximity: 100,
        parallax: true,
        parallaxMultiplier: 5,
      });
    }
  }, []);

  return (
    <div
      id="particles"
      ref={particlesRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        background: "#1a202c", // dark bg
      }}
    />
  );
};

export default ParticlesBG;
