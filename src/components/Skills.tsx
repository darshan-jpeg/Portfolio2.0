import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutGrid,
  Monitor,
  Box,
  Sparkles,
  Code2,
  Search
} from 'lucide-react';
import { skills } from '../data/portfolioData';
import { getSkillIcon } from './Icons';
import { ShinyText } from './ShinyText';

type FilterKey = 'All' | 'Frontend' | 'Backend' | 'AI & Data' | 'Languages';

interface CategoryOption {
  id: FilterKey;
  label: string;
  categoryMatch: string | null;
  icon: React.ComponentType<{ className?: string }>;
}

const filterCategories: CategoryOption[] = [
  { id: 'All', label: 'All', categoryMatch: null, icon: LayoutGrid },
  { id: 'Frontend', label: 'Frontend', categoryMatch: 'Frontend & UI', icon: Monitor },
  { id: 'Backend', label: 'Backend', categoryMatch: 'Backend & Cloud', icon: Box },
  { id: 'AI & Data', label: 'AI & Data', categoryMatch: 'AI & Data', icon: Sparkles },
  { id: 'Languages', label: 'Languages', categoryMatch: 'Languages & Core', icon: Code2 },
];

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategoryMatch = filterCategories.find((c) => c.id === activeFilter)?.categoryMatch;

  const filteredSkills = skills.filter((s) => {
    const matchesCategory = currentCategoryMatch === null || s.category === currentCategoryMatch;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="min-h-screen min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative w-full overflow-hidden snap-start">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-5 sm:pb-6 border-b border-black/8 dark:border-white/10">
        <div className="space-y-2 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-black/4 dark:bg-white/6 border border-black/8 dark:border-white/10 text-neutral-600 dark:text-neutral-400"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] pb-0.5 flex items-baseline gap-2.5 sm:gap-3.5"
          >
            <span className="text-xl sm:text-2xl text-neutral-400 dark:text-neutral-600 font-mono font-medium">05</span>
            <ShinyText text="Tech Stack" speed={3} />
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase pb-1"
        >
          Modern. Dynamic. Premium.
        </motion.div>
      </div>

      {/* ══ COMPACT FLUID MORPHING FILTER POD ══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 sm:mt-8 flex flex-col items-center justify-center w-full"
      >
        {/* Connected Organic Pod */}
        <div className="inline-flex items-center justify-center gap-1.5 sm:gap-3.5 md:gap-5 p-1.5 sm:p-2 rounded-full bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-2xl border border-black/8 dark:border-white/10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.02)] max-w-full overflow-x-auto no-scrollbar">
          {filterCategories.map((cat, catIdx) => {
            const Icon = cat.icon;
            const isSelected = activeFilter === cat.id;

            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: -12, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.1 + catIdx * 0.05 }}
                onClick={() => setActiveFilter(cat.id)}
                className="group relative flex flex-col items-center gap-1 px-1.5 py-1 sm:px-2 sm:py-1 outline-none cursor-pointer select-none transition-transform active:scale-95"
              >
                {/* Circular Button */}
                <div
                  className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 ${isSelected
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-[0_8px_18px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_18px_rgba(255,255,255,0.2)] border border-black/20 dark:border-white/30 scale-105 z-10'
                    : 'bg-white/80 dark:bg-[#16161a]/80 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-black/6 dark:border-white/8 shadow-sm group-hover:scale-105'
                    }`}
                >
                  <Icon className="w-4 h-4 stroke-[1.9] transition-transform duration-200 group-hover:scale-110" />

                  {/* Sleek Grey/Black Ambient Glow */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterGlow"
                      className="absolute -inset-1 rounded-full bg-black/15 dark:bg-white/15 blur-sm -z-10 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 450, damping: 28 }}
                    />
                  )}
                </div>

                {/* Category Text Label Below */}
                <span
                  className={`text-[10px] sm:text-[11px] font-mono tracking-tight transition-colors duration-150 ${isSelected
                    ? 'text-black dark:text-white font-bold'
                    : 'text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300'
                    }`}
                >
                  {cat.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Quick Search Pill */}
        <div className="mt-4 sm:mt-5 flex items-center justify-center w-full">
          <div className="relative flex items-center px-3 py-1.5 rounded-full bg-white/70 dark:bg-[#141418]/70 backdrop-blur-xl border border-black/8 dark:border-white/10 text-xs w-full max-w-xs shadow-sm">
            <Search className="w-3.5 h-3.5 text-neutral-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-black dark:text-white placeholder:text-neutral-400 w-full text-[11px] font-mono"
            />
          </div>
        </div>
      </motion.div>

      {/* ══ MONOCHROMATIC BLACK & WHITE COMPACT PILLS GRID ══ */}
      <div
        className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-2.5 items-start content-start justify-center max-w-3xl mx-auto w-full min-h-[220px] sm:min-h-[260px]"
        style={{ perspective: '1000px' }}
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = getSkillIcon(skill.name);
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.65, y: 30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.65, y: -15, filter: 'blur(6px)' }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 18,
                  mass: 0.75,
                  delay: (idx % 12) * 0.035,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.08,
                  rotateZ: idx % 2 === 0 ? 1.5 : -1.5,
                  transition: { type: 'spring', stiffness: 400, damping: 18 },
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-white/95 dark:bg-[#141418]/95 backdrop-blur-2xl border border-black/8 dark:border-white/12 shadow-[0_3px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] flex items-center gap-2 cursor-pointer select-none transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.8)] hover:border-black/25 dark:hover:border-white/30"
              >
                {/* Monochromatic Black & White SVG Logo */}
                <div className="w-4 h-4 flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0">
                  <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Skill Name */}
                <span className="text-xs sm:text-[12px] font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white tracking-tight pr-0.5">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};
