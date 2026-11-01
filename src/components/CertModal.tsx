import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import type { CertificationItem } from '../types';

interface CertModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertModal: React.FC<CertModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

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
          className="relative w-full max-w-xl max-h-[86vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#121215] border border-black/10 dark:border-white/15 shadow-2xl z-10 p-5 sm:p-7 text-left space-y-5"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center text-black dark:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Certificate Image Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 aspect-[16/9] bg-neutral-900 shadow-md w-full">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover grayscale contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-white text-[11px] font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Credential</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2 pr-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono font-medium text-black dark:text-white uppercase tracking-wider">
                {cert.organization}
              </span>
              <span className="text-[11px] font-mono text-neutral-500">{cert.year}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white leading-snug pb-0.5">
              {cert.title}
            </h3>

            <div className="p-2.5 rounded-xl bg-black/3 dark:bg-white/4 border border-black/5 dark:border-white/6 font-mono text-[11px] text-neutral-600 dark:text-neutral-400 flex flex-wrap items-center justify-between gap-1">
              <span>Credential ID:</span>
              <span className="font-semibold text-black dark:text-white">{cert.credentialId}</span>
            </div>
          </div>

          {/* Skills Covered */}
          <div className="space-y-1.5 pt-2 border-t border-black/6 dark:border-white/8">
            <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400">
              Competencies Evaluated
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {cert.skillsCovered.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-black/4 dark:bg-white/6 border border-black/5 dark:border-white/8 text-black dark:text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
