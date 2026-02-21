import { useState, useEffect } from 'react';

const notes = [
  'You make every day brighter ☀️',
  'My heart belongs to you 💕',
  'Forever grateful for you 🌸',
  'You are my everything 💖',
];

export function LoveNotes() {
  const [visibleNotes, setVisibleNotes] = useState<number[]>([]);

  useEffect(() => {
    notes.forEach((_, index) => {
      setTimeout(() => {
        setVisibleNotes(prev => [...prev, index]);
      }, index * 600);
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`love-note transition-all duration-500 ${
              visibleNotes.includes(index)
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-50'
            }`}
          >
            <div 
              className="bg-white/95 p-6 rounded-2xl shadow-lg border-2 border-romantic-pink/30"
              style={{
                backgroundImage: 'url(/assets/generated/love-note-paper.dim_500x700.png)',
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
              }}
            >
              <p className="text-xl font-handwriting text-romantic-dark text-center">
                {note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
