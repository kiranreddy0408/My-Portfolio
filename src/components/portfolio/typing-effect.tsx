'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  headlines: string[];
  className?: string;
}

export function TypingEffect({ headlines, className }: TypingEffectProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 1500;

  useEffect(() => {
    if (isPaused) return;

    // Time to start deleting
    if (subIndex === headlines[index].length && !isDeleting) {
      setIsPaused(true);
      setTimeout(() => {
        setIsDeleting(true);
        setIsPaused(false);
      }, pauseDuration);
      return;
    }

    // Finished deleting
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % headlines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, isPaused, headlines, index]);

  useEffect(() => {
    setText(headlines[index].substring(0, subIndex));
  }, [subIndex, index, headlines]);

  return (
    <h2 className={cn(className, "min-h-[1.2em]")}>
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
}
