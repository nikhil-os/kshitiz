"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function ThreeScene({ children, ...props }) {
  return (
    <div className="w-full h-full absolute inset-0" {...props}>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
        style={{
          background: "transparent",
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
