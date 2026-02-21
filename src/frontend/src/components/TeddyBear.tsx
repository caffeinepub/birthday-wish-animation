import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

interface TeddyBearProps {
  position: [number, number, number];
  variant?: 'white' | 'brown';
}

export function TeddyBear({ position, variant = 'white' }: TeddyBearProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeOffset = Math.random() * Math.PI * 2;

  const texturePath = variant === 'white' 
    ? '/assets/generated/kawaii-white-bear-hearts.dim_400x400.png'
    : '/assets/generated/kawaii-brown-bear.dim_400x400.png';
  
  const texture = useLoader(TextureLoader, texturePath);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() + timeOffset;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1;
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={2}>
      <planeGeometry args={[1.5, 1.5]} />
      <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}
