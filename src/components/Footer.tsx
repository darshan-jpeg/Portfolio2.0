import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-black/8 dark:border-white/8 py-10 pb-28 sm:py-14 sm:pb-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
        {/* Brand & Title */}
        <div className="text-center sm:text-left space-y-0.5">
          <div className="font-extrabold text-black dark:text-white tracking-tight text-base">
            {personalInfo.name}
          </div>
          <div className="text-xs font-mono text-neutral-500">
            {personalInfo.title}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/12 border border-black/8 dark:border-white/8 text-black dark:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/12 border border-black/8 dark:border-white/8 text-black dark:text-white transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/12 border border-black/8 dark:border-white/8 text-black dark:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/12 border border-black/8 dark:border-white/8 text-black dark:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-[11px] sm:text-xs font-mono text-neutral-400 dark:text-neutral-600 text-center sm:text-right">
          © 2026 {personalInfo.name.replace('.', '')}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
