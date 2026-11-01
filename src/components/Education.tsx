import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, Check } from 'lucide-react';
import { educations } from '../data/portfolioData';
import { ShinyText } from './ShinyText';
import { BorderGlow } from './BorderGlow';

export const Education: React.FC = () => {
  return (
    <section id="education" className="min-h-screen min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative w-full overflow-hidden snap-start">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Foundation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] pb-0.5 flex items-baseline gap-2.5 sm:gap-3.5"
          >
            <span className="text-xl sm:text-2xl text-neutral-400 dark:text-neutral-600 font-mono font-medium">03</span>
            <ShinyText text="Education & Training" speed={3} />
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase pb-1"
        >
          Knowledge & Rigor.
        </motion.div>
      </div>

      {/* Education Cards Grid with Clean 3D Entrance */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-14 w-full relative"
        style={{ perspective: '1400px' }}
      >
        {educations.map((edu, idx) => {
          const isFirst = idx === 0;
          return (
            <motion.div
              key={edu.id}
              initial={{
                opacity: 0,
                x: isFirst ? -60 : 60,
                y: 65,
                rotateY: isFirst ? -14 : 14,
                rotateX: 10,
                scale: 0.9,
                filter: 'blur(10px)'
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                rotateY: 0,
                rotateX: 0,
                scale: 1,
                filter: 'blur(0px)'
              }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 16,
                mass: 0.85,
                delay: idx * 0.16
              }}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: { duration: 0.2 }
              }}
              className="w-full flex"
            >
              <BorderGlow
                borderRadius={26}
                edgeSensitivity={26}
                glowRadius={32}
                fillOpacity={0}
                className="w-full transition-shadow duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                <div className="p-6 sm:p-9 flex flex-col justify-between space-y-6 h-full w-full bg-white dark:bg-[#121216] rounded-[26px]">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="space-y-1">
                        <span className="text-[11px] sm:text-xs font-mono text-neutral-500 font-semibold tracking-wider uppercase">
                          {edu.specialization}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white pt-0.5 tracking-tight">
                          {edu.degree}
                        </h3>
                        <div className="text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-300">
                          {edu.institution}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-neutral-600 dark:text-neutral-400 bg-black/4 dark:bg-white/6 border border-black/6 dark:border-white/8 shadow-sm">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.year}</span>
                      </div>
                    </div>

                    {/* Distinction / Grade pill with sexy pulse pop */}
                    {edu.grade && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.35 + idx * 0.1 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-black dark:text-white bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 shadow-sm"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>{edu.grade}</span>
                      </motion.div>
                    )}

                    {/* Highlights */}
                    <div className="space-y-2.5 pt-1">
                      <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Highlights & Achievements
                      </h4>
                      <div className="space-y-2">
                        {edu.highlights.map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                            className="flex items-start gap-2.5"
                          >
                            <div className="w-5 h-5 rounded-full bg-black/4 dark:bg-white/8 flex items-center justify-center shrink-0 mt-0.5 border border-black/6 dark:border-white/8">
                              <Check className="w-3 h-3 text-black dark:text-white" />
                            </div>
                            <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                              {h}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Core Coursework Pills */}
                  <div className="pt-4 border-t border-black/6 dark:border-white/8 space-y-2">
                    <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3" />
                      <span>Relevant Coursework</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <motion.span
                          key={course}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 + cIdx * 0.04 }}
                          whileHover={{ scale: 1.05, y: -1 }}
                          className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono bg-black/4 dark:bg-white/6 text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/8 cursor-default transition-colors hover:border-black/20 dark:hover:border-white/20"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
