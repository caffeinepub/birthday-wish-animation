import { useEffect, useState } from 'react';

export function GlitterText() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`flex items-center justify-center h-full transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      <div className="relative">
        <h1 className="text-4xl md:text-6xl font-bold text-center px-8 glitter-text animate-float">
          Happy 18th Birthday<br />My Love 🎂✨
        </h1>
        <div className="absolute inset-0 sparkle-overlay" />
      </div>
    </div>
  );
}
