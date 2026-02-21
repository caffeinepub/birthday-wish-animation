import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface QuestionCardProps {
  question: string;
  options: [string, string];
  onAnswer: () => void;
  questionNumber: number;
  totalQuestions: number;
}

export function QuestionCard({ question, options, onAnswer, questionNumber, totalQuestions }: QuestionCardProps) {
  const [answered, setAnswered] = useState(false);

  const handleClick = () => {
    setAnswered(true);
    setTimeout(() => {
      onAnswer();
      setAnswered(false);
    }, 300);
  };

  return (
    <div className={`question-card max-w-md w-full transition-all duration-500 ${answered ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-romantic-pink">
        <div className="flex justify-center mb-4">
          <Heart className="w-8 h-8 text-romantic-pink animate-pulse" fill="currentColor" />
        </div>
        
        <div className="text-center mb-2 text-sm text-romantic-lavender font-medium">
          Question {questionNumber} of {totalQuestions}
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-8 text-romantic-dark kawaii-text">
          {question}
        </h2>
        
        <div className="flex flex-col gap-4">
          <Button
            onClick={handleClick}
            className="kawaii-button h-14 text-lg font-semibold rounded-full"
            size="lg"
          >
            {options[0]}
          </Button>
          <Button
            onClick={handleClick}
            className="kawaii-button-alt h-14 text-lg font-semibold rounded-full"
            size="lg"
          >
            {options[1]}
          </Button>
        </div>
      </div>
    </div>
  );
}
