"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function MorphingBlob({
  position = [0, 0, 0],
  color = "#8B5CF6",
}) {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z =
        Math.cos(state.clock.elapsedTime * 0.2) * 0.1;

      // Pulsing scale effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }

    if (materialRef.current) {
      // Animate distortion
      materialRef.current.distort =
        0.4 + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[1.5, 4]} />
      <MeshDistortMaterial
        ref={materialRef}
        color={color}
        attach="material"
        distort={0.6}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}
