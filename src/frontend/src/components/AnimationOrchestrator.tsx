import { useState, useEffect } from 'react';
import { AnimatedCanvas } from './AnimatedCanvas';
import { GlitterText } from './GlitterText';
import { QuestionSequence } from './QuestionSequence';
import { CountdownAnimation } from './CountdownAnimation';
import { PolaroidFrames } from './PolaroidFrames';
import { LoveNotes } from './LoveNotes';
import { CakeCandleAnimation } from './CakeCandleAnimation';
import { GiftcardsSection } from './GiftcardsSection';
import { FlowerBouquetFinale } from './FlowerBouquetFinale';
import { PersonalPhotoEnding } from './PersonalPhotoEnding';
import { HeartExplosion } from './HeartExplosion';
import { FinalMessages } from './FinalMessages';

type Scene = 
  | 'glitterText'
  | 'questions'
  | 'countdown'
  | 'polaroids'
  | 'loveNotes'
  | 'cake'
  | 'giftcards'
  | 'flowerBouquet'
  | 'personalPhoto'
  | 'heartExplosion'
  | 'finalMessages';

export function AnimationOrchestrator() {
  const [currentScene, setCurrentScene] = useState<Scene>('glitterText');
  const [showCanvas, setShowCanvas] = useState(true);

  useEffect(() => {
    // Initial glitter text timer
    const glitterTimer = setTimeout(() => {
      setCurrentScene('questions');
    }, 4000);

    return () => clearTimeout(glitterTimer);
  }, []);

  const handleQuestionsComplete = () => {
    setCurrentScene('countdown');
    setTimeout(() => setCurrentScene('polaroids'), 5000);
    setTimeout(() => setCurrentScene('loveNotes'), 11000);
    setTimeout(() => setCurrentScene('cake'), 16000);
    setTimeout(() => setCurrentScene('giftcards'), 22000);
  };

  const handleGiftcardsComplete = () => {
    setCurrentScene('flowerBouquet');
  };

  const handleFlowerBouquetComplete = () => {
    setCurrentScene('personalPhoto');
  };

  const handlePersonalPhotoComplete = () => {
    setCurrentScene('heartExplosion');
    setTimeout(() => setCurrentScene('finalMessages'), 3000);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 3D Background Canvas */}
      {showCanvas && <AnimatedCanvas />}

      {/* Scene Overlays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto w-full h-full">
          {currentScene === 'glitterText' && <GlitterText />}
          {currentScene === 'questions' && <QuestionSequence onComplete={handleQuestionsComplete} />}
          {currentScene === 'countdown' && <CountdownAnimation />}
          {currentScene === 'polaroids' && <PolaroidFrames />}
          {currentScene === 'loveNotes' && <LoveNotes />}
          {currentScene === 'cake' && <CakeCandleAnimation />}
          {currentScene === 'giftcards' && <GiftcardsSection onComplete={handleGiftcardsComplete} />}
          {currentScene === 'flowerBouquet' && <FlowerBouquetFinale onComplete={handleFlowerBouquetComplete} />}
          {currentScene === 'personalPhoto' && <PersonalPhotoEnding onComplete={handlePersonalPhotoComplete} />}
          {currentScene === 'heartExplosion' && <HeartExplosion />}
          {currentScene === 'finalMessages' && <FinalMessages />}
        </div>
      </div>
    </div>
  );
}
