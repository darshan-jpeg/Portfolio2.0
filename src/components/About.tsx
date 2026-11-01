import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Database, Brain } from 'lucide-react';
import { ShinyText } from './ShinyText';
import { BorderGlow } from './BorderGlow';

export const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative w-full overflow-hidden snap-start">
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
            <User className="w-3.5 h-3.5" />
            <span>Background & Profile</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] pb-0.5 flex items-baseline gap-2.5 sm:gap-3.5"
          >
            <span className="text-xl sm:text-2xl text-neutral-400 dark:text-neutral-600 font-mono font-medium">01</span>
            <ShinyText text="About Me" speed={3} />
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase pb-1"
        >
          Background & Focus.
        </motion.div>
      </div>

      {/* Editorial Content & Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-10 sm:pt-12 items-start w-full">
        {/* Left Column: Authentic Bio & Summary */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-5 sm:space-y-6 text-sm sm:text-lg text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed"
        >
          <p className="text-lg sm:text-2xl font-light text-black dark:text-white leading-snug">
            Hi, I&apos;m Darshan — a Full Stack Engineer focused on building fast, reliable web applications and practical AI-driven software.
          </p>

          <p>
            I graduated with a B.Tech Honours degree in Computer Science (8.7 CGPA) from Rajagiri School of Engineering &amp; Technology. Currently, I work as a Full Stack Engineer at careMP, where I develop full-stack features and integrate AI/ML solutions into production systems.
          </p>

          <p className="text-neutral-600 dark:text-neutral-400">
            My primary stack includes React, TypeScript, Node.js, NestJS, and PostgreSQL. I enjoy architecting clean APIs, building responsive interfaces, and leveraging modern AI models to solve real-world problems effectively.
          </p>

          {/* Key Stat Badges */}
          <div className="pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-black/8 dark:border-white/8 text-center sm:text-left">
            <div>
              <div className="text-xl sm:text-3xl font-black text-black dark:text-white font-mono">8.7</div>
              <div className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 font-mono">B.Tech CGPA (Honours)</div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-black text-black dark:text-white font-mono">Full Stack</div>
              <div className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 font-mono">React • Node • TS • SQL</div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-black text-black dark:text-white font-mono">careMP</div>
              <div className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 font-mono">Full Stack Engineer</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3 Layered Monochrome Glass Pillars with BorderGlow */}
        <div className="lg:col-span-5 space-y-3.5 sm:space-y-4 w-full">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 12, scale: 0.94, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.15 }}
            whileHover={{ y: -4, scale: 1.015, transition: { duration: 0.2 } }}
            className="w-full perspective-1000"
          >
            <BorderGlow borderRadius={24} edgeSensitivity={28} glowRadius={32} className="w-full">
              <div className="p-5 sm:p-6 w-full">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-xl bg-black/5 dark:bg-white/8 text-black dark:text-white flex items-center justify-center shadow-sm">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-bold text-black dark:text-white text-sm sm:text-base">
                    Full-Stack Web Development
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pl-9">
                  Building responsive web applications using React, TypeScript, modern CSS, and scalable Node.js/NestJS architectures.
                </p>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 12, scale: 0.94, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.28 }}
            whileHover={{ y: -4, scale: 1.015, transition: { duration: 0.2 } }}
            className="w-full perspective-1000"
          >
            <BorderGlow borderRadius={24} edgeSensitivity={28} glowRadius={32} className="w-full">
              <div className="p-5 sm:p-6 w-full">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-xl bg-black/5 dark:bg-white/8 text-black dark:text-white flex items-center justify-center shadow-sm">
                    <Database className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-bold text-black dark:text-white text-sm sm:text-base">
                    Backend & Database Systems
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pl-9">
                  Designing relational database schemas in PostgreSQL, writing efficient queries, and developing secure RESTful APIs.
                </p>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 12, scale: 0.94, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.4 }}
            whileHover={{ y: -4, scale: 1.015, transition: { duration: 0.2 } }}
            className="w-full perspective-1000"
          >
            <BorderGlow borderRadius={24} edgeSensitivity={28} glowRadius={32} className="w-full">
              <div className="p-5 sm:p-6 w-full">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-xl bg-black/5 dark:bg-white/8 text-black dark:text-white flex items-center justify-center shadow-sm">
                    <Brain className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-bold text-black dark:text-white text-sm sm:text-base">
                    Practical AI & ML Integration
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pl-9">
                  Integrating machine learning models, computer vision, and modern AI workflows to create practical, high-value user experiences.
                </p>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
