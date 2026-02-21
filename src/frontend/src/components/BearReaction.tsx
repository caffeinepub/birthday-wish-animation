import { useEffect, useState } from 'react';

interface BearReactionProps {
  reactionType: 'hearts' | 'blush' | 'spin' | 'laugh' | 'hug';
  message: string;
  onComplete: () => void;
}

const reactionImages = {
  hearts: '/assets/generated/kawaii-white-bear-hearts.dim_400x400.png',
  blush: '/assets/generated/kawaii-white-bear-blush.dim_400x400.png',
  spin: '/assets/generated/kawaii-white-bear-spin.dim_400x400.png',
  laugh: '/assets/generated/kawaii-white-bear-laugh.dim_400x400.png',
  hug: '/assets/generated/kawaii-white-bear-hug-heart.dim_400x400.png',
};

const reactionAnimations = {
  hearts: 'animate-throw-hearts',
  blush: 'animate-blush-pulse',
  spin: 'animate-spin-360',
  laugh: 'animate-bounce',
  hug: 'animate-hug-scale',
};

export function BearReaction({ reactionType, message, onComplete }: BearReactionProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative flex flex-col items-center">
        <img
          src={reactionImages[reactionType]}
          alt="Bear reaction"
          className={`w-64 h-64 object-contain ${reactionAnimations[reactionType]}`}
        />
        <div className="mt-4 bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 shadow-2xl border-4 border-romantic-pink">
          <p className="text-2xl font-bold text-romantic-pink text-center kawaii-text">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
