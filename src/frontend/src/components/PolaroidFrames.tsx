import { useState, useEffect } from 'react';

const memories = [
  { text: 'Our First Date 💕', delay: 0 },
  { text: 'Best Memories 🌸', delay: 800 },
  { text: 'Forever Together 💖', delay: 1600 },
  { text: 'You & Me Always 🎀', delay: 2400 },
];

export function PolaroidFrames() {
  const [visibleFrames, setVisibleFrames] = useState<number[]>([]);

  useEffect(() => {
    memories.forEach((memory, index) => {
      setTimeout(() => {
        setVisibleFrames(prev => [...prev, index]);
      }, memory.delay);
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="grid grid-cols-2 gap-6 max-w-2xl">
        {memories.map((memory, index) => (
          <div
            key={index}
            className={`polaroid-frame transition-all duration-700 ${
              visibleFrames.includes(index) 
                ? 'opacity-100 translate-x-0 rotate-0' 
                : 'opacity-0 -translate-x-20 -rotate-12'
            }`}
            style={{
              transform: visibleFrames.includes(index) 
                ? `rotate(${(index % 2 === 0 ? -1 : 1) * 3}deg)` 
                : undefined
            }}
          >
            <div className="bg-white p-4 shadow-xl rounded-lg">
              <div className="aspect-square bg-gradient-to-br from-romantic-pink/20 to-romantic-lavender/20 rounded mb-3 flex items-center justify-center">
                <span className="text-6xl">💝</span>
              </div>
              <p className="text-center font-handwriting text-lg text-romantic-dark">
                {memory.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
