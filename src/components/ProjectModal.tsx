import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Check, Layers, Cpu } from 'lucide-react';
import type { ProjectItem } from '../types';
import { GithubIcon, getSkillIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 dark:bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[86vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#121215] border border-black/10 dark:border-white/15 shadow-2xl z-10 p-5 sm:p-8 text-left space-y-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center text-black dark:text-white transition-colors z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-10">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white">
                Project {project.number}
              </span>
              <span className="text-xs font-mono text-neutral-500">{project.category}</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight leading-snug pb-0.5">
              {project.title}
            </h3>

            <p className="text-xs sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 aspect-video bg-neutral-900 w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] sm:text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                Live Prototype Ready
              </span>
              <div className="flex gap-1.5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-md hover:bg-white/20 border border-white/20 flex items-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Deep Overview */}
          <div className="space-y-2">
            <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Full System Architecture</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
              {project.fullOverview || project.description}
            </p>
          </div>

          {/* Core Feature Highlights */}
          <div className="space-y-2.5">
            <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400">
              Key Capabilities & Engineering Innovations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-xl bg-black/3 dark:bg-white/3 border border-black/5 dark:border-white/5 text-xs text-neutral-700 dark:text-neutral-300"
                >
                  <Check className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                  <span className="leading-snug font-normal text-[11px] sm:text-xs">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="p-3.5 rounded-2xl bg-black/3 dark:bg-white/4 border border-black/8 dark:border-white/8 space-y-1">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-black dark:text-white font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Architectural Design Pattern</span>
              </span>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Tech Stack Pills with OG Logos */}
          <div className="space-y-1.5 pt-2 border-t border-black/6 dark:border-white/8">
            <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => {
                const TechIcon = getSkillIcon(tech);
                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/4 dark:bg-white/6 border border-black/6 dark:border-white/8 text-black dark:text-white font-medium"
                  >
                    <TechIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{tech}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
