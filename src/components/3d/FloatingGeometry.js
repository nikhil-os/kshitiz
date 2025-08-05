"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export function FloatingGeometry({ position = [0, 0, 0], color = "#8B5CF6" }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.6}
        speed={2}
        roughness={0.4}
        metalness={0.8}
      />
    </Sphere>
  );
}

export function FloatingCube({ position = [0, 0, 0], color = "#06B6D4" }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

export function FloatingTorus({ position = [0, 0, 0], color = "#F59E0B" }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
      meshRef.current.position.x =
        position[0] + Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.1}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}
