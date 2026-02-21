import { useState, useEffect } from 'react';

export function CountdownAnimation() {
  const [count, setCount] = useState(15);

  useEffect(() => {
    if (count < 18) {
      const timer = setTimeout(() => {
        setCount(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="countdown-number text-9xl font-bold text-romantic-pink animate-bounce-slow">
          {count}
        </div>
        <div className="text-2xl mt-4 text-romantic-lavender font-semibold animate-pulse">
          {count === 18 ? '🎉 Happy Birthday! 🎉' : 'Counting to your special day...'}
        </div>
        <div className="sparkle-burst" />
      </div>
    </div>
  );
}
