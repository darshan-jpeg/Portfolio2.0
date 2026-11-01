import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ShinyText } from './ShinyText';
import { PowderText } from './PowderText';
import { LanyardCard } from './LanyardCard';

interface HeroProps {
  onContactClick: () => void;
}

const dynamicQuotes: string[] = [
  "I understand the code. I leverage the intelligence.",
  "Engineering scalable systems with deliberate polish.",
  "Bridging deep fundamentals with modern AI velocity.",
  "Turning ambitious ideas into resilient digital reality.",
  "Obsessed with architecture, low latency, and craft."
];

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full overflow-visible snap-start"
    >
      {/* Vertically Centered Main Row */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Large Apple Monochromatic Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6 text-left w-full relative z-10">

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit max-w-full bg-black/4 dark:bg-white/6 border border-black/8 dark:border-white/10 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 tracking-wider truncate">
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Confident Name & Title */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight break-words pb-2 leading-[1.15]"
              >
                <ShinyText text={personalInfo.name} speed={3} spread={130} />
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-lg lg:text-xl font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 font-mono pt-1"
              >
                {personalInfo.title}
              </motion.div>
            </div>

            {/* Supporting Philosophy with Powder / Dust Dissolve Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2 sm:space-y-3 pt-1"
            >
              <blockquote className="text-lg sm:text-2xl lg:text-3xl font-light text-neutral-900 dark:text-neutral-100 border-l border-black/20 dark:border-white/20 pl-3 sm:pl-4 py-0.5 leading-snug min-h-[3.6rem] sm:min-h-[4.4rem] lg:min-h-[5.2rem] flex items-center">
                <PowderText 
                  sentences={dynamicQuotes} 
                  interval={4200}
                  className="w-full"
                />
              </blockquote>
              <p className="text-xs sm:text-base text-neutral-600 dark:text-neutral-400 max-w-lg font-normal leading-relaxed pl-3 sm:pl-4">
                {personalInfo.subtext}
              </p>
            </motion.div>

            {/* Action Button Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 sm:pt-4 w-full"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90 shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onContactClick}
                className="flex-1 sm:flex-none text-center px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-medium bg-black/5 dark:bg-white/8 hover:bg-black/10 dark:hover:bg-white/12 border border-black/8 dark:border-white/12 text-black dark:text-white transition-all active:scale-95 cursor-pointer"
              >
                Get in Touch
              </button>

              <button
                onClick={copyEmail}
                className="flex-1 sm:flex-none text-center px-3 sm:px-4 py-3 rounded-full text-[11px] sm:text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white bg-black/3 dark:bg-white/4 hover:bg-black/6 dark:hover:bg-white/8 border border-black/6 dark:border-white/8 transition-all flex items-center justify-center gap-1.5 truncate cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{personalInfo.email}</span>
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Mobile-only Lanyard Card (renders in normal flow below buttons) */}
          <div className="block lg:hidden w-full h-[440px] sm:h-[500px] relative z-20 pointer-events-auto flex items-start justify-center overflow-visible mt-2">
            <LanyardCard />
          </div>

          {/* Desktop Right Column Spacer to reserve grid balance */}
          <div className="hidden lg:block lg:col-span-6 min-h-[580px] pointer-events-none" />
        </div>
      </div>

      {/* Desktop 3D Lanyard ID Card Layer: Pinned to TOP: 0 so strap starts from top of screen with ZERO gap */}
      <div className="hidden lg:flex absolute top-0 right-0 w-1/2 h-full pointer-events-none z-50 overflow-visible items-start justify-center">
        <div className="w-full h-full relative pointer-events-auto overflow-visible flex items-start justify-center">
          <LanyardCard />
        </div>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="py-2 flex flex-col items-center justify-center gap-1 text-neutral-400 dark:text-neutral-600 shrink-0 relative z-30"
      >
        <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3 h-3 stroke-[1.8]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
