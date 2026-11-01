import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PowderTextProps {
  sentences: string[];
  interval?: number;
  className?: string;
}

// Deterministic pseudo-random seed generator based on index
const getPseudoSeed = (index: number, offset = 0) => {
  const x = Math.sin(index + offset * 997) * 10000;
  return x - Math.floor(x);
};

export const PowderText: React.FC<PowderTextProps> = ({
  sentences,
  interval = 4200,
  className = ""
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, interval);

    return () => clearInterval(timer);
  }, [sentences.length, interval]);

  const currentSentence = sentences[index];
  const words = currentSentence.split(' ');

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="flex flex-wrap items-baseline gap-x-[0.3em] gap-y-[0.1em]"
        >
          {/* Opening Quote with Powder Dissolve */}
          <motion.span
            initial={{
              opacity: 0,
              y: 12,
              filter: 'blur(8px)',
              scale: 1.06,
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -25,
              y: -30,
              filter: 'blur(10px)',
              scale: 0.15,
              rotate: -20,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0,
            }}
            className="inline-block text-black/40 dark:text-white/40 font-serif select-none transform-gpu will-change-transform"
          >
            &ldquo;
          </motion.span>

          {/* Words and Characters with Powder Dissolve */}
          {words.map((word, wordIdx) => {
            const characters = word.split('');
            return (
              <span key={wordIdx} className="inline-flex whitespace-nowrap overflow-visible">
                {characters.map((char, charIdx) => {
                  const globalIdx = wordIdx * 10 + charIdx;
                  const randomX = (getPseudoSeed(globalIdx, 1) - 0.5) * 60;
                  const randomY = -15 - getPseudoSeed(globalIdx, 2) * 45;
                  const randomRotate = (getPseudoSeed(globalIdx, 3) - 0.5) * 50;
                  const randomDuration = 0.55 + getPseudoSeed(globalIdx, 4) * 0.25;

                  return (
                    <motion.span
                      key={charIdx}
                      initial={{
                        opacity: 0,
                        y: 12,
                        filter: 'blur(8px)',
                        scale: 1.06,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        x: randomX,
                        y: randomY,
                        filter: 'blur(10px)',
                        scale: 0.15,
                        rotate: randomRotate,
                      }}
                      transition={{
                        duration: randomDuration,
                        ease: [0.22, 1, 0.36, 1],
                        delay: charIdx * 0.012 + wordIdx * 0.025,
                      }}
                      className="inline-block transform-gpu will-change-transform"
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            );
          })}

          {/* Closing Quote with Powder Dissolve */}
          <motion.span
            initial={{
              opacity: 0,
              y: 12,
              filter: 'blur(8px)',
              scale: 1.06,
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: 25,
              y: -30,
              filter: 'blur(10px)',
              scale: 0.15,
              rotate: 20,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: words.length * 0.025 + 0.05,
            }}
            className="inline-block text-black/40 dark:text-white/40 font-serif select-none transform-gpu will-change-transform"
          >
            &rdquo;
          </motion.span>
        </motion.div>
      </AnimatePresence>

      {/* Floating Stardust Particles that puff upward during transitions */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <AnimatePresence>
          {[...Array(14)].map((_, pIdx) => {
            const seed = getPseudoSeed(index * 20 + pIdx, 5);
            const pX = seed * 100;
            const pY = -10 - getPseudoSeed(index * 20 + pIdx, 6) * 60;
            const pSize = 1.5 + getPseudoSeed(index * 20 + pIdx, 7) * 2.5;

            return (
              <motion.div
                key={`${index}-particle-${pIdx}`}
                initial={{
                  opacity: 0.9,
                  scale: 1,
                  x: `${pX}%`,
                  y: 10,
                }}
                animate={{
                  opacity: 0,
                  scale: 0,
                  y: pY,
                  x: `${pX + (seed - 0.5) * 25}%`,
                }}
                transition={{
                  duration: 1.2 + seed * 0.6,
                  ease: 'easeOut',
                  delay: seed * 0.2,
                }}
                className="absolute rounded-full bg-black/60 dark:bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                style={{
                  width: `${pSize}px`,
                  height: `${pSize}px`,
                  bottom: '20%',
                }}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
