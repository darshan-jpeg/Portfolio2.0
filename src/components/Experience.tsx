import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Check } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { ShinyText } from './ShinyText';
import { BorderGlow } from './BorderGlow';

export const Experience: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(experiences[0].id);

  return (
    <section id="experience" className="min-h-screen min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative w-full overflow-hidden snap-start">
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] pb-0.5 flex items-baseline gap-2.5 sm:gap-3.5"
          >
            <span className="text-xl sm:text-2xl text-neutral-400 dark:text-neutral-600 font-mono font-medium">02</span>
            <ShinyText text="Experience & Impact" speed={3} />
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase pb-1"
        >
          Impact & Architecture.
        </motion.div>
      </div>

      {/* Interactive Storytelling Timeline */}
      <div className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start relative w-full">
        {/* Left Column: Timeline Navigation Items */}
        <div className="lg:col-span-5 space-y-3 relative w-full">
          {experiences.map((exp, idx) => {
            const isSelected = selectedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -35, scale: 0.95, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  type: "spring",
                  stiffness: 130,
                  damping: 18,
                  delay: idx * 0.12
                }}
                whileHover={{ x: 4, scale: 1.015, transition: { duration: 0.2 } }}
                onClick={() => setSelectedId(exp.id)}
                className="w-full"
              >
                <BorderGlow
                  borderRadius={24}
                  edgeSensitivity={26}
                  glowRadius={30}
                  className={`w-full cursor-pointer transition-all ${isSelected ? 'scale-[1.01]' : 'opacity-85 hover:opacity-100'}`}
                >
                  <div className="p-4 sm:p-6 w-full">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5">
                        {exp.logo && (
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-white/95 p-1.5 flex items-center justify-center shrink-0 shadow-sm border border-black/5 dark:border-white/10 mt-0.5">
                            <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                          </div>
                        )}
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/8 text-black dark:text-white">
                              {exp.number}
                            </span>
                            {exp.isCurrent && (
                              <span className="text-[10px] sm:text-[11px] font-mono font-medium text-black dark:text-white bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full border border-black/10 dark:border-white/10">
                                Current
                              </span>
                            )}
                          </div>

                          <h3 className="text-base sm:text-lg font-bold text-black dark:text-white pt-0.5">
                            {exp.company}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[11px] sm:text-xs font-mono text-neutral-500 block">
                          {exp.duration}
                        </span>
                        <ChevronRight className={`w-4 h-4 ml-auto mt-2 transition-transform duration-300 ${isSelected ? 'rotate-90 text-black dark:text-white' : 'text-neutral-400'}`} />
                      </div>
                    </div>

                    <div className="lg:hidden mt-3 pt-3 border-t border-black/5 dark:border-white/5 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {exp.description}
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Detailed Glass Panel for Active Experience with BorderGlow */}
        <motion.div
          initial={{ opacity: 0, y: 35, x: 25, scale: 0.95, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
          className="lg:col-span-7 sticky top-20 w-full"
        >
          <AnimatePresence mode="wait">
            {experiences.map((exp) => {
              if (exp.id !== selectedId) return null;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <BorderGlow
                    borderRadius={28}
                    edgeSensitivity={30}
                    glowRadius={38}
                    className="w-full"
                  >
                    <div className="p-5 sm:p-9 space-y-5 sm:space-y-6 w-full">
                      {/* Top Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/6 dark:border-white/8 pb-4 sm:pb-5">
                        <div className="flex items-center gap-3.5">
                          {exp.logo && (
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white dark:bg-white/95 p-2 flex items-center justify-center shrink-0 shadow-md border border-black/5 dark:border-white/10">
                              <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                            </div>
                          )}
                          <div>
                            <span className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                              Experience {exp.number}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mt-0.5">
                              {exp.role}
                            </h3>
                            <div className="text-sm sm:text-base font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
                              {exp.company}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-0.5 text-left sm:text-right text-[11px] sm:text-xs font-mono text-neutral-500">
                          <div className="flex items-center gap-1.5 sm:justify-end">
                            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5 sm:justify-end">
                            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Overview */}
                      <div className="space-y-1.5">
                        <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400">
                          Overview
                        </h4>
                        <p className="text-xs sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                          {exp.description}
                        </p>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="space-y-2.5">
                        <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400">
                          Key Deliverables & Engineering
                        </h4>
                        <div className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <Check className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                {resp}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-2 border-t border-black/6 dark:border-white/8 space-y-1.5">
                        <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400">
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-black/4 dark:bg-white/6 border border-black/6 dark:border-white/8 text-black dark:text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
