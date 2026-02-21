import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface PersonalPhotoEndingProps {
  onComplete: () => void;
}

export function PersonalPhotoEnding({ onComplete }: PersonalPhotoEndingProps) {
  const [showPhoto, setShowPhoto] = useState(false);
  const [showText, setShowText] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    setTimeout(() => setShowPhoto(true), 500);
    setTimeout(() => setShowText(true), 1500);

    // Generate floating hearts
    const heartArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setHearts(heartArray);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(completeTimer);
  }, [onComplete]);

  return (
    <div className="relative flex items-center justify-center h-full px-4 overflow-hidden">
      {/* Floating hearts background */}
      {hearts.map(heart => (
        <Heart
          key={heart.id}
          className="absolute w-6 h-6 text-romantic-pink opacity-40 animate-float-heart"
          fill="currentColor"
          style={{
            left: `${heart.x}%`,
            top: '100%',
            animationDelay: `${heart.delay}s`,
          }}
        />
      ))}

      {/* Sparkle particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute w-4 h-4 text-romantic-lavender opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Photo with romantic frame */}
        <div
          className={`relative transition-all duration-1000 ${
            showPhoto ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="relative">
            {/* Romantic frame overlay */}
            <div className="absolute inset-0 rounded-3xl border-8 border-romantic-pink shadow-2xl animate-glow" />
            <div className="absolute -inset-4 rounded-3xl border-4 border-romantic-lavender opacity-50 animate-pulse" />
            
            {/* Photo */}
            <img
              src="/assets/Screenshot_20250826-210145~2.png"
              alt="Birthday girl"
              className="w-80 h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Text */}
        {showText && (
          <div
            className={`mt-8 transition-all duration-1000 ${
              showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-12 py-6 shadow-2xl border-4 border-romantic-pink">
              <p
                className="text-4xl font-bold text-center bg-gradient-to-r from-romantic-pink to-romantic-lavender bg-clip-text text-transparent"
                style={{ fontFamily: 'Pacifico, cursive' }}
              >
                tikla hain aap
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
