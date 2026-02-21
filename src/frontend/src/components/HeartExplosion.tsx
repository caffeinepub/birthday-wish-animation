import { useEffect, useState } from 'react';

export function HeartExplosion() {
  const [exploded, setExploded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExploded(true);
    }, 100);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {exploded && (
        <>
          {Array.from({ length: 50 }).map((_, i) => {
            const angle = (i / 50) * Math.PI * 2;
            const distance = 150 + Math.random() * 200;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            const delay = Math.random() * 0.3;
            const duration = 1 + Math.random() * 0.5;

            return (
              <div
                key={i}
                className="heart-particle absolute top-1/2 left-1/2"
                style={{
                  animation: `explode ${duration}s ease-out ${delay}s forwards`,
                  '--tx': `${x}px`,
                  '--ty': `${y}px`,
                } as React.CSSProperties}
              >
                ❤️
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
