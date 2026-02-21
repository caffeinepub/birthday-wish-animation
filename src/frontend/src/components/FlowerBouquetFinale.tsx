import { useState, useEffect } from 'react';

interface FlowerBouquetFinaleProps {
  onComplete: () => void;
}

export function FlowerBouquetFinale({ onComplete }: FlowerBouquetFinaleProps) {
  const [giftBoxOpen, setGiftBoxOpen] = useState(false);
  const [showBouquet, setShowBouquet] = useState(false);
  const [showBear, setShowBear] = useState(false);
  const [showText, setShowText] = useState(false);
  const [petals, setPetals] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    // Open gift box after 1 second
    setTimeout(() => setGiftBoxOpen(true), 1000);
    
    // Show bouquet after box opens
    setTimeout(() => setShowBouquet(true), 2000);
    
    // Show bear presenting flowers
    setTimeout(() => setShowBear(true), 2500);
    
    // Show text
    setTimeout(() => setShowText(true), 3000);
    
    // Generate floating petals
    const petalArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setPetals(petalArray);
    
    // Complete after 6 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => clearTimeout(completeTimer);
  }, [onComplete]);

  return (
    <div className="relative flex items-center justify-center h-full px-4 overflow-hidden">
      {/* Floating petals */}
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute w-3 h-3 bg-romantic-lavender rounded-full opacity-60 animate-float-petal"
          style={{
            left: `${petal.x}%`,
            top: '-10%',
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center">
        {/* Gift Box */}
        <div className="relative mb-8">
          <img
            src={giftBoxOpen ? '/assets/generated/gift-box-opened.dim_800x800.png' : '/assets/generated/gift-box-closed.dim_800x800.png'}
            alt="Gift box"
            className={`w-64 h-64 object-contain transition-all duration-1000 ${
              giftBoxOpen ? 'animate-box-open' : ''
            }`}
          />
        </div>

        {/* Flower Bouquet */}
        {showBouquet && (
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
            showBouquet ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}>
            <img
              src="/assets/generated/flower-bouquet-buffet.dim_1000x1000.png"
              alt="Flower bouquet"
              className="w-96 h-96 object-contain animate-bloom"
            />
          </div>
        )}

        {/* Bear presenting flowers */}
        {showBear && (
          <div className={`absolute bottom-8 right-8 transition-all duration-700 ${
            showBear ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <img
              src="/assets/generated/kawaii-white-bear-hearts.dim_400x400.png"
              alt="Bear presenting flowers"
              className="w-32 h-32 object-contain animate-bounce"
            />
          </div>
        )}

        {/* Text */}
        {showText && (
          <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-2xl border-4 border-romantic-lavender">
              <p className="text-3xl font-bold text-romantic-pink text-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Aur lijiye... bina paiso ka gift 🌸
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
