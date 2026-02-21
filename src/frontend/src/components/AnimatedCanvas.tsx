import { Canvas } from '@react-three/fiber';
import { FloatingHeart } from './FloatingHeart';
import { SparkleParticles } from './SparkleParticles';
import { FloatingBalloon } from './FloatingBalloon';
import { BloomingFlower } from './BloomingFlower';
import { TeddyBear } from './TeddyBear';
import { BokehLights } from './BokehLights';
import { CinematicLighting } from './CinematicLighting';

export function AnimatedCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      className="absolute inset-0"
      style={{ background: 'linear-gradient(135deg, oklch(0.95 0.05 330) 0%, oklch(0.92 0.08 290) 50%, oklch(0.95 0.05 330) 100%)' }}
    >
      <CinematicLighting />
      <BokehLights />
      
      {/* Multiple floating hearts */}
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingHeart key={`heart-${i}`} position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10
        ]} />
      ))}
      
      <SparkleParticles count={100} />
      
      {/* Floating balloons */}
      {Array.from({ length: 5 }).map((_, i) => (
        <FloatingBalloon key={`balloon-${i}`} position={[
          (Math.random() - 0.5) * 15,
          -8 + i * 2,
          (Math.random() - 0.5) * 8
        ]} />
      ))}
      
      {/* Blooming flowers */}
      {Array.from({ length: 4 }).map((_, i) => (
        <BloomingFlower key={`flower-${i}`} position={[
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 12,
          -5 + i
        ]} />
      ))}
      
      {/* Kawaii teddy bears - white and brown variants */}
      <TeddyBear position={[-6, -3, 2]} variant="white" />
      <TeddyBear position={[6, -4, 1]} variant="brown" />
      <TeddyBear position={[-4, 2, 0]} variant="white" />
      <TeddyBear position={[5, 3, -2]} variant="brown" />
    </Canvas>
  );
}
