import { useState } from 'react';
import { QuestionCard } from './QuestionCard';
import { BearReaction } from './BearReaction';

interface QuestionSequenceProps {
  onComplete: () => void;
}

const questions: Array<{
  question: string;
  options: [string, string];
  reactionType: 'hearts' | 'blush' | 'spin' | 'laugh' | 'hug';
  message: string;
}> = [
  {
    question: 'Do you know you are my favourite person?',
    options: ['Yes', 'Yes obviously'],
    reactionType: 'hearts',
    message: 'Love you 💕',
  },
  {
    question: 'Do you know how special you are to me?',
    options: ['Yes', 'Of course'],
    reactionType: 'blush',
    message: 'You are magic ✨',
  },
  {
    question: 'Are you ready for unlimited love today?',
    options: ['Yes', '100% yes'],
    reactionType: 'spin',
    message: 'Unlimited love 💞',
  },
  {
    question: 'Can I keep annoying you forever?',
    options: ['Yes', 'Always 😚'],
    reactionType: 'laugh',
    message: 'Approved ❤️',
  },
  {
    question: 'Even when I\'m silly or annoying... will you still stay with me?',
    options: ['Yes', 'Always'],
    reactionType: 'hug',
    message: 'Stay forever 🤍',
  },
];

export function QuestionSequence({ onComplete }: QuestionSequenceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showReaction, setShowReaction] = useState(false);

  const handleAnswer = () => {
    setShowReaction(true);
  };

  const handleReactionComplete = () => {
    setShowReaction(false);
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        onComplete();
      }, 500);
    }
  };

  return (
    <div className="flex items-center justify-center h-full px-4">
      {!showReaction && (
        <QuestionCard
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
        />
      )}
      {showReaction && (
        <BearReaction
          reactionType={questions[currentQuestion].reactionType}
          message={questions[currentQuestion].message}
          onComplete={handleReactionComplete}
        />
      )}
    </div>
  );
}
