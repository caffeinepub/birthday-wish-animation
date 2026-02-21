import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

interface FloatingBalloonProps {
  position: [number, number, number];
}

export function FloatingBalloon({ position }: FloatingBalloonProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeOffset = Math.random() * Math.PI * 2;
  const speed = 0.2 + Math.random() * 0.2;

  const texture = useLoader(TextureLoader, '/assets/generated/balloons-glowing.dim_600x800.png');

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() * speed + timeOffset;
      meshRef.current.position.y = position[1] + time * 0.5;
      meshRef.current.position.x = position[0] + Math.sin(time * 2) * 0.5;
      meshRef.current.rotation.z = Math.sin(time) * 0.1;
      
      // Reset position when balloon goes too high
      if (meshRef.current.position.y > 12) {
        meshRef.current.position.y = -8;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 16, 16]} />
      <meshStandardMaterial map={texture} transparent opacity={0.9} />
    </mesh>
  );
}
