import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingHeartProps {
  position: [number, number, number];
}

export function FloatingHeart({ position }: FloatingHeartProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeOffset = Math.random() * Math.PI * 2;
  const speed = 0.3 + Math.random() * 0.3;
  const amplitude = 0.5 + Math.random() * 0.5;

  // Create heart shape
  const heartShape = new THREE.Shape();
  heartShape.moveTo(0, 0);
  heartShape.bezierCurveTo(0, -0.3, -0.6, -0.3, -0.6, 0);
  heartShape.bezierCurveTo(-0.6, 0.3, 0, 0.6, 0, 1);
  heartShape.bezierCurveTo(0, 0.6, 0.6, 0.3, 0.6, 0);
  heartShape.bezierCurveTo(0.6, -0.3, 0, -0.3, 0, 0);

  const extrudeSettings = {
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 3,
  };

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() * speed + timeOffset;
      meshRef.current.position.y = position[1] + Math.sin(time) * amplitude;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.5) * 0.3;
      meshRef.current.rotation.z = Math.sin(time * 0.8) * 0.2;
    }
  });

  const colors = [
    'oklch(0.85 0.15 350)',
    'oklch(0.88 0.12 330)',
    'oklch(0.82 0.18 340)',
    'oklch(0.90 0.10 320)',
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <mesh ref={meshRef} position={position} scale={0.3}>
      <extrudeGeometry args={[heartShape, extrudeSettings]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  );
}
