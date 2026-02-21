import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface GiftcardsSectionProps {
  onComplete: () => void;
}

const giftcards = [
  {
    image: '/assets/generated/giftcard-hugs.dim_600x400.png',
    text: 'Unlimited hugs card 🤍',
  },
  {
    image: '/assets/generated/giftcard-annoyance.dim_600x400.png',
    text: 'One lifetime annoyance pass 😚',
  },
  {
    image: '/assets/generated/giftcard-midnight.dim_600x400.png',
    text: 'Midnight talks card 🌙',
  },
  {
    image: '/assets/generated/giftcard-always.dim_600x400.png',
    text: 'Always there for you card 💕',
  },
  {
    image: '/assets/generated/giftcard-safe.dim_600x400.png',
    text: 'Safe place card 🫶',
  },
  {
    image: '/assets/generated/giftcard-tikli-master.dim_600x400.png',
    text: 'Tikli Master',
    special: true,
  },
];

export function GiftcardsSection({ onComplete }: GiftcardsSectionProps) {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    giftcards.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 200);
    });

    const completeTimer = setTimeout(() => {
      onComplete();
    }, giftcards.length * 200 + 3000);

    return () => clearTimeout(completeTimer);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center h-full px-4 py-8 overflow-y-auto">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-romantic-pink kawaii-text animate-float">
          Your Special Giftcards 🎁
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {giftcards.map((card, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 ${
                card.special ? 'border-romantic-lavender animate-glow' : 'border-romantic-pink'
              }`}>
                <img
                  src={card.image}
                  alt={card.text}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className={`text-xl font-bold text-white text-center ${
                    card.special ? 'text-2xl' : ''
                  }`}>
                    {card.text}
                  </p>
                </div>
                {visibleCards.includes(index) && (
                  <div className="absolute top-2 right-2">
                    <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
