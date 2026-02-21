import { useState, useEffect } from 'react';

export function FinalMessages() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowFirst(true), 500);
    setTimeout(() => setShowSecond(true), 1500);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      <div
        className={`transition-all duration-1000 mb-8 ${
          showFirst ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-romantic-pink mb-4 final-message animate-float">
          You are my safest place ❤️
        </h1>
      </div>
      
      <div
        className={`transition-all duration-1000 ${
          showSecond ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-romantic-lavender final-message-secondary animate-float-delayed">
          Forever yours
        </h2>
      </div>

      <div className="mt-12 text-romantic-dark/60 text-sm">
        <p className="animate-pulse">💕 Happy 18th Birthday, My Love 💕</p>
      </div>
    </div>
  );
}
