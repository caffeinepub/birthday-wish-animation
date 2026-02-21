import { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

interface BloomingFlowerProps {
  position: [number, number, number];
}

export function BloomingFlower({ position }: BloomingFlowerProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(0);
  const timeOffset = Math.random() * Math.PI * 2;

  const texture = useLoader(TextureLoader, '/assets/generated/flowers-bouquet.dim_800x800.png');

  useEffect(() => {
    // Blooming animation
    const interval = setInterval(() => {
      setScale(prev => Math.min(prev + 0.02, 1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() + timeOffset;
      meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale * 1.5}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial map={texture} transparent opacity={0.9} side={THREE.DoubleSide} />
    </mesh>
  );
}
