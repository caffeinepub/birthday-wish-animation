export function CinematicLighting() {
  return (
    <>
      <ambientLight intensity={0.6} color="oklch(0.95 0.05 330)" />
      <directionalLight position={[5, 5, 5]} intensity={0.4} color="oklch(0.92 0.08 290)" />
      <pointLight position={[-5, 3, 2]} intensity={0.5} color="oklch(0.90 0.10 320)" />
      <pointLight position={[5, -3, 2]} intensity={0.5} color="oklch(0.88 0.12 300)" />
      <spotLight position={[0, 10, 0]} angle={0.5} intensity={0.3} color="oklch(0.95 0.05 330)" />
    </>
  );
}
