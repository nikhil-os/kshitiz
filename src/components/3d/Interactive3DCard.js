"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export default function Interactive3DCard({
  position = [0, 0, 0],
  color = "#8B5CF6",
  onHover,
}) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime) * 0.1;

      // Scale effect on hover
      const targetScale = hovered ? 1.1 : 1;
      groupRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerEnter={() => {
        setHovered(true);
        onHover?.(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
        onHover?.(false);
      }}
    >
      {/* Card Background */}
      <RoundedBox args={[2, 1.5, 0.1]} radius={0.1}>
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </RoundedBox>

      {/* Glowing border when hovered */}
      {hovered && (
        <RoundedBox
          args={[2.1, 1.6, 0.05]}
          radius={0.1}
          position={[0, 0, -0.03]}
        >
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </RoundedBox>
      )}
    </group>
  );
}
