import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight, ExternalLink, ArrowDown } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { CardSwap, Card } from './CardSwap';
import { GithubIcon, getSkillIcon } from './Icons';
import { ShinyText } from './ShinyText';
import { BorderGlow } from './BorderGlow';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  const currentProj = projects[activeProjectIndex] || projects[0];

  return (
    <section id="projects" className="min-h-screen min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative w-full overflow-visible snap-start">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] pb-0.5 flex items-baseline gap-2.5 sm:gap-3.5"
          >
            <span className="text-xl sm:text-2xl text-neutral-400 dark:text-neutral-600 font-mono font-medium">04</span>
            <ShinyText text="Projects Showcase" speed={3} />
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase pb-1"
        >
          Architecture & AI Systems.
        </motion.div>
      </div>

      {/* Hero Spatial CardSwap Experience for Projects */}
      <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full overflow-visible">
        {/* Left Column: Active Project Details & Selector */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.95, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 110, damping: 20, delay: 0.15 }}
          className="lg:col-span-6 space-y-6 w-full pt-4 sm:pt-6 lg:pt-10"
        >
          {/* Active project card info box with BorderGlow */}
          <BorderGlow
            borderRadius={24}
            edgeSensitivity={30}
            glowRadius={36}
            animated={false}
            className="w-full"
          >
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-black dark:text-white">
                    {currentProj.number}
                  </span>
                  <div className="h-4 w-[1px] bg-neutral-300 dark:bg-neutral-800" />
                  <span className="text-[11px] sm:text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
                    {currentProj.category}
                  </span>
                </div>

                {/* Quick Project Switcher Tabs */}
                <div className="flex p-0.5 rounded-full bg-black/4 dark:bg-white/6 border border-black/6 dark:border-white/8 text-xs font-mono">
                  {projects.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveProjectIndex(idx)}
                      className={`px-2.5 py-1 rounded-full transition-all ${activeProjectIndex === idx
                          ? 'bg-black text-white dark:bg-white dark:text-black font-semibold'
                          : 'text-neutral-500 hover:text-black dark:hover:text-white'
                        }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight leading-snug pb-0.5">
                  {currentProj.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {currentProj.description}
                </p>
              </div>

              {/* Tech stack with OG Logos */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentProj.techStack.map((tech) => {
                  const TechIcon = getSkillIcon(tech);
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/4 dark:bg-white/6 border border-black/6 dark:border-white/8 text-black dark:text-white font-medium shadow-2xs"
                    >
                      <TechIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>{tech}</span>
                    </span>
                  );
                })}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-black/6 dark:border-white/8">
                {currentProj.hasCaseStudy && (
                  <button
                    onClick={() => setSelectedProject(currentProj)}
                    className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}

                {currentProj.githubUrl && (
                  <a
                    href={currentProj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all flex items-center gap-2 shadow-sm active:scale-95"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Code</span>
                    <span>→</span>
                  </a>
                )}

                {currentProj.liveUrl && (
                  <a
                    href={currentProj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/12 border border-black/6 dark:border-white/10 text-black dark:text-white transition-all flex items-center gap-1.5 active:scale-95"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </BorderGlow>
        </motion.div>

        {/* Right Column: React Bits <CardSwap /> */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.92, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }}
          className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[480px] sm:min-h-[520px] w-full overflow-visible py-2"
        >
          {/* Subtle Click Hint (matching the scroll sentence in Hero) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-10 flex flex-col items-center justify-center gap-1 text-neutral-400 dark:text-neutral-500 select-none -mt-4 sm:-mt-6"
          >
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase">Click to view more</span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-3 h-3 stroke-[1.8]" />
            </motion.div>
          </motion.div>

          <CardSwap
            width={306}
            height={380}
            cardDistance={26}
            verticalDistance={30}
            delay={4500}
            pauseOnHover={true}
            onSwap={(topIdx) => setActiveProjectIndex(topIdx % projects.length)}
            onCardClick={(idx) => {
              const clickedProj = projects[idx % projects.length];
              if (clickedProj.hasCaseStudy) {
                setSelectedProject(clickedProj);
              } else if (clickedProj.githubUrl) {
                window.open(clickedProj.githubUrl, '_blank');
              }
            }}
          >
            {projects.map((proj) => (
              <Card
                key={proj.id}
                className="p-4 sm:p-5 flex flex-col justify-between overflow-hidden group select-none shadow-[0_16px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_22px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Image frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-900 border border-black/10 dark:border-white/10 shadow-inner w-full">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-white border border-white/15">
                    {proj.number} // {proj.category}
                  </div>
                </div>

                {/* Card body */}
                <div className="space-y-1 py-1.5">
                  <h4 className="text-sm sm:text-base font-bold text-black dark:text-white leading-snug truncate">
                    {proj.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>

                {/* Card footer CTA */}
                <div className="pt-2 border-t border-black/8 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  <span className="text-neutral-400">Click to view more</span>
                  <span className="text-black dark:text-white font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    {proj.hasCaseStudy ? "Case Study →" : "GitHub Code →"}
                  </span>
                </div>
              </Card>
            ))}
          </CardSwap>
        </motion.div>
      </div>

      {/* Detailed Modal Drawer */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
