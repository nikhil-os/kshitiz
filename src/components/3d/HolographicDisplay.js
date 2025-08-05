"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three";

export default function HolographicDisplay({ position = [0, 0, 0] }) {
  const groupRef = useRef();
  const planeRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    if (planeRef.current) {
      planeRef.current.material.opacity =
        0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Holographic plane background */}
      <Plane ref={planeRef} args={[4, 2]} position={[0, 0, -0.1]}>
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </Plane>

      {/* Grid lines */}
      {Array.from({ length: 5 }, (_, i) => (
        <mesh key={i} position={[0, (i - 2) * 0.3, 0.01]}>
          <planeGeometry args={[3.5, 0.01]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.6} />
        </mesh>
      ))}

      {Array.from({ length: 7 }, (_, i) => (
        <mesh key={`v-${i}`} position={[(i - 3) * 0.5, 0, 0.01]}>
          <planeGeometry args={[0.01, 1.8]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}
