"use client";

import { useState, useEffect } from "react";
import ThreeScene from "./ThreeScene";
import {
  FloatingGeometry,
  FloatingCube,
  FloatingTorus,
} from "./FloatingGeometry";
import ParticleField from "./ParticleField";
import MorphingBlob from "./MorphingBlob";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* 3D Background */}
      <ThreeScene>
        <ParticleField count={150} />
        <FloatingGeometry position={[-3, 1, -2]} color="#8B5CF6" />
        <FloatingCube position={[3, -1, -1]} color="#06B6D4" />
        <FloatingTorus position={[0, 2, -3]} color="#F59E0B" />
        <MorphingBlob position={[0, 0, -2]} color="#EC4899" />
      </ThreeScene>

      {/* Loading UI */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-light text-white mb-4 tracking-wider">
            LOADING
          </h1>
          <p className="text-xl text-gray-400 tracking-widest">
            A MESMERIZING EXPERIENCE
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 h-1 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-2xl text-white font-mono">{progress}%</div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}
