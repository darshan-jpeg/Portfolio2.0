import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { certifications } from '../data/portfolioData';
import type { CertificationItem } from '../types';
import { ShinyText } from './ShinyText';
import { BorderGlow } from './BorderGlow';

interface CertCardItem extends CertificationItem {
  provider: string;
  providerSubtitle?: string;
  badgeType: 'nptel' | 'ibm';
}

const coverflowCertifications: CertCardItem[] = [
  {
    ...certifications[0],
    provider: "NPTEL",
    providerSubtitle: "IIT Kharagpur / Swayam",
    badgeType: "nptel",
  },
  {
    ...certifications[1],
    provider: "NPTEL",
    providerSubtitle: "IIT Madras / Swayam",
    badgeType: "nptel",
  },
  {
    ...certifications[2],
    provider: "IBM",
    providerSubtitle: "IBM Professional Certification",
    badgeType: "ibm",
  },
  {
    ...certifications[3],
    provider: "IBM",
    providerSubtitle: "IBM Cloud Center of Excellence",
    badgeType: "ibm",
  },
  {
    ...certifications[4],
    provider: "IBM",
    providerSubtitle: "IBM Back-End Development Series",
    badgeType: "ibm",
  },
];

export const Certifications: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % coverflowCertifications.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + coverflowCertifications.length) % coverflowCertifications.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + coverflowCertifications.length) % coverflowCertifications.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % coverflowCertifications.length);
  };

  // Provider SVG Logo Renderer with Official Brand Assets
  const renderProviderLogo = (badgeType: CertCardItem['badgeType']) => {
    switch (badgeType) {
      case 'nptel':
        return (
          <div className="flex items-center justify-center gap-2.5">
            {/* Official NPTEL Logo */}
            <img
              src="https://www.kindpng.com/picc/m/152-1520962_nptel-logo-hd-png-download.png"
              alt="NPTEL"
              className="h-8 sm:h-9 w-auto object-contain rounded-md bg-white/95 px-1.5 py-0.5 shadow-sm dark:bg-white"
              loading="lazy"
            />
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 pl-1 border-l border-neutral-300 dark:border-neutral-700">
              SWAYAM • IIT
            </span>
          </div>
        );
      case 'ibm':
        return (
          <div className="flex items-center justify-center gap-2.5">
            {/* Official IBM 8-bar Logo directly from Wikimedia */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
              alt="IBM"
              className="h-6 sm:h-7 w-auto object-contain dark:brightness-125"
              loading="lazy"
            />
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 pl-1 border-l border-neutral-300 dark:border-neutral-700">
              Certified
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="certifications" className="min-h-screen min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative w-full overflow-hidden snap-start">
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
            <ShieldCheck className="w-3.5 h-3.5 text-black dark:text-white" />
            <span>Industry Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] pb-0.5 flex items-baseline gap-2.5 sm:gap-3.5"
          >
            <span className="text-xl sm:text-2xl text-neutral-400 dark:text-neutral-600 font-mono font-medium">07</span>
            <ShinyText text="Certifications & Standards" speed={3} />
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase pb-1"
        >
          Verified Technical Accreditations.
        </motion.div>
      </div>

      {/* ══ 3D CYLINDRICAL COVERFLOW CAROUSEL ══ */}
      <div className="mt-12 sm:mt-16 relative w-full flex flex-col items-center justify-center min-h-[460px] sm:min-h-[500px]">
        {/* Carousel Viewport Container */}
        <motion.div
          initial={{ opacity: 0, y: 45, rotateX: 10, scale: 0.94, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="relative w-full max-w-5xl h-[420px] sm:h-[460px] flex items-center justify-center select-none"
          style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
        >
          {coverflowCertifications.map((cert, idx) => {
            // Distance relative to active index with wrapping
            const n = coverflowCertifications.length;
            let offset = idx - activeIndex;
            // Wrap offset to [-n/2, n/2]
            if (offset > n / 2) offset -= n;
            if (offset < -n / 2) offset += n;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Compute dynamic 3D transforms based on horizontal offset
            let xOffset = offset * 260; // desktop translation
            let zOffset = -Math.abs(offset) * 110;
            let rotateY = -offset * 32; // angle toward center
            let scale = 1 - Math.abs(offset) * 0.12;
            let opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.72 : 0.35;
            let zIndex = 50 - Math.abs(offset) * 10;

            // Responsive tweak on small screens
            if (typeof window !== 'undefined' && window.innerWidth < 640) {
              xOffset = offset * 175;
              scale = 1 - Math.abs(offset) * 0.15;
            }

            return (
              <motion.div
                key={cert.id}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  rotateY: rotateY,
                  scale: isCenter ? 1.06 : scale,
                  opacity: opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                  mass: 0.85,
                }}
                style={{
                  zIndex: zIndex,
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => {
                  if (!isCenter) {
                    setActiveIndex(idx);
                  }
                }}
                className={`absolute w-[260px] h-[370px] sm:w-[310px] sm:h-[420px] cursor-pointer rounded-3xl transition-shadow ${isCenter ? 'cursor-default' : 'hover:opacity-90'
                  }`}
              >
                {/* When Center: Wrap with BorderGlow for active cursor lighting */}
                {isCenter ? (
                  <BorderGlow
                    borderRadius={28}
                    edgeSensitivity={30}
                    glowRadius={36}
                    className="w-full h-full shadow-[0_25px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
                  >
                    <div className="w-full h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white/95 dark:bg-[#121216]/95 backdrop-blur-2xl text-left relative overflow-hidden">
                      {/* Top: Provider Logo */}
                      <div className="flex items-center justify-center pt-2 pb-1 min-h-[55px]">
                        {renderProviderLogo(cert.badgeType)}
                      </div>

                      {/* Middle: Title & Subtitle */}
                      <div className="space-y-1.5 text-center py-2">
                        <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight leading-snug">
                          {cert.title.split('—')[0]}
                        </h3>
                        {cert.title.includes('—') && (
                          <div className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                            {cert.title.split('—')[1]}
                          </div>
                        )}
                      </div>

                      {/* Bottom Footer: Issued By + Year */}
                      <div className="pt-4 border-t border-black/8 dark:border-white/10 flex items-center justify-between">
                        <div className="space-y-1 text-[11px] sm:text-xs">
                          <span className="text-neutral-400 text-[10px] uppercase font-mono block">Issued by</span>
                          <span className="font-semibold text-black dark:text-white font-sans">{cert.organization.split('(')[0]}</span>
                        </div>
                        <div className="text-right space-y-1 text-[11px] sm:text-xs">
                          <span className="text-neutral-400 text-[10px] uppercase font-mono block">Issued</span>
                          <span className="font-semibold text-black dark:text-white font-mono">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                ) : (
                  /* Flanking Cards in 3D perspective */
                  <div className="w-full h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white/80 dark:bg-[#121216]/80 backdrop-blur-xl border border-black/10 dark:border-white/12 shadow-[0_15px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-left relative overflow-hidden">
                    {/* Top: Provider Logo */}
                    <div className="flex items-center justify-center pt-2 pb-1 min-h-[55px]">
                      {renderProviderLogo(cert.badgeType)}
                    </div>

                    {/* Middle: Title & Subtitle */}
                    <div className="space-y-1.5 text-center py-2">
                      <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight leading-snug">
                        {cert.title.split('—')[0]}
                      </h3>
                      {cert.title.includes('—') && (
                        <div className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                          {cert.title.split('—')[1]}
                        </div>
                      )}
                    </div>

                    {/* Bottom Footer */}
                    <div className="pt-4 border-t border-black/8 dark:border-white/10 flex items-center justify-between">
                      <div className="space-y-1 text-[11px] sm:text-xs">
                        <span className="text-neutral-400 text-[10px] uppercase font-mono block">Issued by</span>
                        <span className="font-semibold text-black dark:text-white font-sans">{cert.organization.split('(')[0]}</span>
                      </div>
                      <div className="text-right space-y-1 text-[11px] sm:text-xs">
                        <span className="text-neutral-400 text-[10px] uppercase font-mono block">Issued</span>
                        <span className="font-semibold text-black dark:text-white font-mono">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* ══ CAROUSEL NAVIGATION CONTROLS ══ */}
        <div className="mt-8 flex items-center justify-center gap-4 z-50">
          <button
            onClick={handlePrev}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/80 dark:bg-[#16161c]/80 backdrop-blur-xl border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center text-black dark:text-white shadow-md transition-all active:scale-90 cursor-pointer"
            title="Previous Certificate"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Quick Indicator Dots */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/6 border border-black/5 dark:border-white/8">
            {coverflowCertifications.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${activeIndex === idx
                  ? 'w-6 h-2 bg-black dark:bg-white'
                  : 'w-2 h-2 bg-neutral-400/40 hover:bg-neutral-500'
                  }`}
                title={`Go to item ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/80 dark:bg-[#16161c]/80 backdrop-blur-xl border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center text-black dark:text-white shadow-md transition-all active:scale-90 cursor-pointer"
            title="Next Certificate"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

