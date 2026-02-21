import { useState, useEffect } from 'react';

export function CakeCandleAnimation() {
  const [candlesLit, setCandlesLit] = useState(true);
  const [blowing, setBlowing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlowing(true);
      setTimeout(() => {
        setCandlesLit(false);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="relative inline-block">
          <img 
            src="/assets/generated/birthday-cake.dim_600x600.png" 
            alt="Birthday Cake"
            className="w-80 h-80 object-contain animate-float"
          />
          
          {candlesLit && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4">
              {[1, 8].map((num) => (
                <div key={num} className="relative">
                  <div className="candle-flame animate-flicker" />
                </div>
              ))}
            </div>
          )}
          
          {!candlesLit && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="smoke-particles" />
            </div>
          )}
        </div>
        
        <div className="mt-8 text-2xl font-bold text-romantic-pink animate-pulse">
          {blowing ? '🎉 Make a wish! 🎉' : 'Happy 18th Birthday! 🎂'}
        </div>
      </div>
    </div>
  );
}
