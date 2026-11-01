import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Award,
  GraduationCap,
  Users,
  Calendar,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { ShinyText } from './ShinyText';
import { BorderGlow } from './BorderGlow';

interface OrbitAchievement {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  organization: string;
  year: string;
  description: string;
  highlight: string;
  metric: string;
  location: string;
  dateLabel: string;
  icon: 'trophy' | 'research' | 'github' | 'medal' | 'grad' | 'users';
  orbitRadius: number; // px at desktop
  orbitAngle: number; // degrees
  link?: string;
  linkLabel?: string;
}

const orbitItems: OrbitAchievement[] = [
  // ── INNER ORBIT (Radius: 125px) ──
  {
    id: "ach-01",
    number: "01",
    title: "Google Developers Group Hackathon Winner",
    shortTitle: "GDG Hackathon Winner",
    organization: "TECH FOR GOOD – Build with AI",
    year: "2026",
    description: "Won Best Problem Framing under the Good Health and Well-Being category at the GDG TECH FOR GOOD – Build with AI hackathon.",
    highlight: "Best Problem Framing Winner",
    metric: "Good Health and Well-Being Category",
    location: "Dr. G.R. Damodaran College of Science, Coimbatore",
    dateLabel: "August 8–9, 2026",
    icon: "trophy",
    orbitRadius: 125,
    orbitAngle: -90, // Inner: Top
    link: "https://www.linkedin.com/posts/caremp_caremp-techforgood-buildwithai-activity-7492898435055067136-EUUr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE4DLuoBm3W-BmxfVsXCKw_qgDR1VO4zBGc",
    linkLabel: "View GDG Post"
  },
  {
    id: "ach-04",
    number: "04",
    title: "Smart India Hackathon (SIH) — 2x College Level Qualifier",
    shortTitle: "SIH 2x Qualifier",
    organization: "Smart India Hackathon",
    year: "2024 — 2025",
    description: "Qualified twice at the college level in the nationwide Smart India Hackathon for algorithmic problem-solving and rapid software prototyping.",
    highlight: "2x College Qualifier",
    metric: "Top Qualified College Teams",
    location: "National SIH",
    dateLabel: "2024 — 2025",
    icon: "medal",
    orbitRadius: 125,
    orbitAngle: 30, // Inner: Bottom-Right
  },
  {
    id: "ach-06",
    number: "06",
    title: "Best Storyteller — careMP (Ascend Event)",
    shortTitle: "Best Storyteller",
    organization: "careMP / Ascend Event",
    year: "2026",
    description: "Won the Best Storyteller recognition at the Ascend event for outstanding technical storytelling, presentation, and communication.",
    highlight: "Ascend Storyteller Award",
    metric: "Excellence in Presentation & Pitch",
    location: "careMP Ascend",
    dateLabel: "2026",
    icon: "users",
    orbitRadius: 125,
    orbitAngle: 150, // Inner: Bottom-Left
    link: "https://www.linkedin.com/posts/d4rp_caremp-activity-7495176053057810432-v95P?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE4DLuoBm3W-BmxfVsXCKw_qgDR1VO4zBGc",
    linkLabel: "View Recognition Post"
  },

  // ── OUTER ORBIT (Radius: 200px) ──
  {
    id: "ach-02",
    number: "02",
    title: "IndiaAI Funding Awardee",
    shortTitle: "IndiaAI Funding",
    organization: "IndiaAI / Govt. of India",
    year: "2026",
    description: "Received IndiaAI funding for the final-year research and engineering project: \"Silent Speech Recognition for the Voiceless\".",
    highlight: "National AI Grant",
    metric: "Funded Final-Year Research Project",
    location: "National Grant / IndiaAI",
    dateLabel: "2026",
    icon: "research",
    orbitRadius: 200,
    orbitAngle: -45, // Outer: Top-Right
    link: "https://www.linkedin.com/posts/d4rp_activity-7421236807083794432-nOHR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE4DLuoBm3W-BmxfVsXCKw_qgDR1VO4zBGc",
    linkLabel: "View Funding Post"
  },
  {
    id: "ach-03",
    number: "03",
    title: "Patent Published — Silent Speech Recognition",
    shortTitle: "Patent Published",
    organization: "Indian Patent Office",
    year: "2026",
    description: "Published patent for \"Wearable Jaw and Cheek Muscle Signal Detection Device for Silent Speech Recognition\".",
    highlight: "Published Hardware & AI Patent",
    metric: "Wearable Muscle Signal Detection Device",
    location: "Patent Office of India",
    dateLabel: "Published 2026",
    icon: "research",
    orbitRadius: 200,
    orbitAngle: 45, // Outer: Bottom-Right
    link: "https://www.linkedin.com/posts/rajagiriengg_activity-7500758603255996417-iP0S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE4DLuoBm3W-BmxfVsXCKw_qgDR1VO4zBGc",
    linkLabel: "View Patent Post"
  },
  {
    id: "ach-05",
    number: "05",
    title: "Best Poster Award — SDG Category",
    shortTitle: "Best Poster Award",
    organization: "Research & Innovation Symposium",
    year: "2026",
    description: "Won the Best Poster Award in the Sustainable Development Goals (SDG) category for the final-year engineering innovation project.",
    highlight: "SDG Category Winner",
    metric: "Best Poster in SDG Category",
    location: "Academic Symposium",
    dateLabel: "2026",
    icon: "trophy",
    orbitRadius: 200,
    orbitAngle: 135, // Outer: Bottom-Left
    link: "https://www.linkedin.com/posts/giribala-arun-a9444626a_isacds26-turinger-mitbengaluru-ugcPost-7424377433153232896-GDqt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE4DLuoBm3W-BmxfVsXCKw_qgDR1VO4zBGc",
    linkLabel: "View Poster Post"
  },
  {
    id: "ach-07",
    number: "07",
    title: "Academic Merit Award (S2) & Honours Degree",
    shortTitle: "S2 Merit Award",
    organization: "Rajagiri School of Engineering and Technology",
    year: "2022 — 2026",
    description: "Received the Academic Merit Award specifically in Semester 2 (S2) during B.Tech studies and graduated as an Honours student in Computer Science Engineering (8.7 CGPA).",
    highlight: "S2 Academic Merit Award",
    metric: "8.7 CGPA — First Class with Distinction",
    location: "RSET, Kochi",
    dateLabel: "2022 — 2026",
    icon: "grad",
    orbitRadius: 200,
    orbitAngle: 225, // Outer: Top-Left
  }
];

export const Achievements: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeItem = orbitItems[activeIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % orbitItems.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + orbitItems.length) % orbitItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + orbitItems.length) % orbitItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % orbitItems.length);
  };

  // Monochromatic Black and White Icon Renderer
  const renderIcon = (type: OrbitAchievement['icon'], className = "w-4 h-4") => {
    switch (type) {
      case 'trophy':
        return <Trophy className={`${className} stroke-[1.8]`} />;
      case 'medal':
        return <Award className={`${className} stroke-[1.8]`} />;
      case 'users':
        return <Users className={`${className} stroke-[1.8]`} />;
      case 'grad':
        return <GraduationCap className={`${className} stroke-[1.8]`} />;
      case 'github':
        return <GithubIcon className={className} />;
      case 'research':
        return <BookOpen className={`${className} stroke-[1.8]`} />;
      default:
        return <Sparkles className={`${className} stroke-[1.8]`} />;
    }
  };

  return (
    <section id="achievements" className="min-h-screen min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative w-full overflow-visible snap-start">
      {/* Scoped CSS for Non-Stop Butter-Smooth GPU Orbit Rotation */}
      <style>{`
        @keyframes cosmicOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cosmicCounterOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-spin-layer {
          animation: cosmicOrbit 55s linear infinite;
          transform-origin: center center;
          will-change: transform;
        }
        .orbit-counter-node {
          animation: cosmicCounterOrbit 55s linear infinite;
          transform-origin: center center;
          will-change: transform;
        }
      `}</style>

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
            <Trophy className="w-3.5 h-3.5 text-black dark:text-white" />
            <span>Milestones & Recognition</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] pb-0.5 flex items-baseline gap-2.5 sm:gap-3.5"
          >
            <span className="text-xl sm:text-2xl text-neutral-400 dark:text-neutral-600 font-mono font-medium">06</span>
            <ShinyText text="Achievements & Honors" speed={3} />
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase pb-1"
        >
          Competitive & Academic Honors.
        </motion.div>
      </div>

      {/* ══ DUAL COLUMN COSMIC ORBITAL LAYOUT ══ */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        {/* ══ LEFT COLUMN: CONTINUOUSLY ROTATING MONOCHROME CELESTIAL ORBIT ══ */}
        <div className="lg:col-span-7 flex items-center justify-center relative min-h-[440px] sm:min-h-[520px] w-full select-none overflow-visible">
          {/* Orbital Container (Center Point) */}
          <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">
            {/* Background Ambient Space Glow */}
            <div className="absolute inset-0 rounded-full bg-black/[0.03] dark:bg-white/[0.03] blur-3xl -z-10 pointer-events-none" />

            {/* Concentric Clean Orbit Track Rings - All 3 Lines Visible & Aligned */}
            {/* Inner Ring (Track for Inner Balls - Radius: 130px desktop / 95px mobile) */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[190px] h-[190px] sm:w-[260px] sm:h-[260px] rounded-full border border-black/15 dark:border-white/15 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.02)]"
            />

            {/* Middle Harmonic Ring (Radius: 165px desktop / 120px mobile) */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="absolute w-[240px] h-[240px] sm:w-[330px] sm:h-[330px] rounded-full border border-black/10 dark:border-white/10 pointer-events-none"
            />

            {/* Outer Ring (Track for Outer Balls - Radius: 200px desktop / 145px mobile) */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="absolute w-[290px] h-[290px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-black/20 dark:border-white/20 pointer-events-none"
            />

            {/* ══ CENTRAL PLANET CORE ("My Journey") with Adaptive Light & Dark Styling ══ */}
            <motion.div
              initial={{ scale: 0.2, opacity: 0, y: -60 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-22 h-22 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center text-center cursor-default p-2 bg-gradient-to-br from-white via-neutral-100 to-neutral-200 dark:from-neutral-900 dark:via-[#141418] dark:to-[#08080a] border border-black/15 dark:border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_0_50px_rgba(0,0,0,0.9),inset_0_2px_6px_rgba(255,255,255,0.15)]"
            >
              {/* Crescent Rim Highlight */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none border border-black/5 dark:border-white/25"
                style={{
                  boxShadow: 'inset 0 2px 6px rgba(255, 255, 255, 0.4), 0 0 16px rgba(0, 0, 0, 0.04)',
                }}
              />

              <span className="text-xs sm:text-sm font-extrabold text-black dark:text-white font-sans tracking-tight leading-tight z-10">
                My<br />Journey
              </span>
              <span className="text-[7px] sm:text-[8px] font-mono uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 mt-1 z-10 font-semibold">
                Achievements
              </span>
              <div className="w-4 h-[1.5px] bg-black/40 dark:bg-white/60 rounded-full mt-1 z-10" />
            </motion.div>

            {/* ══ CONTINUOUSLY REVOLVING ORBIT ROTATOR (NON-STOP PURE GPU CSS) ══ */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none orbit-spin-layer">
              {orbitItems.map((item, idx) => {
                const isSelected = activeIndex === idx;
                // Angle to radians
                const rad = (item.orbitAngle * Math.PI) / 180;
                // Responsive radius calculation - exactly 1.0 desktop / 0.725 mobile matching rings
                const rFactor = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.725 : 1;
                const targetX = Math.cos(rad) * (item.orbitRadius * rFactor);
                const targetY = Math.sin(rad) * (item.orbitRadius * rFactor);

                return (
                  /* Staggered Scroll Entrance Animation: Each orb shoots outward from heading/center to its orbit position */
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      scale: 0.1,
                      x: 0,
                      y: -80
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      x: targetX,
                      y: targetY
                    }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      type: "spring",
                      stiffness: 70,
                      damping: 15,
                      mass: 0.8,
                      delay: 0.2 + idx * 0.1,
                    }}
                    className="absolute w-0 h-0 flex items-center justify-center pointer-events-auto"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                  >
                    {/* Counter-Rotating Child Wrapper (keeps orb & labels permanently upright and horizontally locked) */}
                    <div className="relative flex items-center justify-center cursor-pointer group select-none orbit-counter-node">
                      {/* Monochromatic Glass Orb Shell - Adaptive Light & Dark Themes */}
                      <button
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`relative rounded-full flex items-center justify-center cursor-pointer outline-none transition-all duration-200 active:scale-95 group-hover:scale-110 ${isSelected
                          ? 'w-8 h-8 sm:w-10 sm:h-10 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white shadow-[0_6px_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_25px_rgba(255,255,255,0.6)] ring-4 ring-black/10 dark:ring-white/25 scale-105'
                          : 'w-7 h-7 sm:w-8.5 sm:h-8.5 bg-gradient-to-br from-white to-neutral-100 dark:from-[#202026] dark:to-[#0e0e12] text-neutral-800 dark:text-neutral-200 border border-black/15 dark:border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_14px_rgba(0,0,0,0.6)] hover:border-black/35 dark:hover:border-white/40'
                          }`}
                      >
                        {/* Glass Specular Highlight Refraction */}
                        <div className={`absolute top-0.5 left-1.5 w-2.5 h-1 rounded-full blur-[0.3px] pointer-events-none transform -rotate-12 ${isSelected ? 'bg-white/30 dark:bg-black/20' : 'bg-white/60 dark:bg-white/30'}`} />

                        {/* Monochromatic Inside Icon */}
                        <div className="transition-transform duration-200">
                          {renderIcon(item.icon, isSelected ? 'w-3.5 h-3.5 sm:w-4 sm:h-4 text-white dark:text-black' : 'w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-800 dark:text-neutral-200')}
                        </div>
                      </button>

                      {/* Horizontally Fixed Clean Label & Subheading directly below the orb */}
                      <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 text-center pointer-events-none whitespace-nowrap z-20 transition-opacity duration-200">
                        <div className={`text-[9px] sm:text-[10.5px] font-semibold leading-tight transition-colors ${isSelected ? 'text-black dark:text-white font-bold' : 'text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white'
                          }`}>
                          {item.shortTitle}
                        </div>
                        <div className="text-[7px] sm:text-[8px] font-mono text-neutral-500 dark:text-neutral-400 leading-tight mt-0.5">
                          {item.year}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══ RIGHT COLUMN: DETAILED MONOCHROME GLASS INSPECTION CARD WITH BORDERGLOW ══ */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.94, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 110, damping: 20, delay: 0.25 }}
          className="lg:col-span-5 w-full"
        >
          <BorderGlow
            borderRadius={28}
            edgeSensitivity={28}
            glowRadius={36}
            className="w-full"
          >
            <div className="p-5 sm:p-8 space-y-5 w-full relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  {/* Top Bar: Numbering + Refined Monochromatic Glass Orb Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <span className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400">
                        <span className="text-black dark:text-white font-bold text-sm sm:text-base">{activeItem.number}</span> / 0{orbitItems.length}
                      </span>
                      <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        {activeItem.year} Milestone
                      </div>
                    </div>

                    {/* Refined Monochromatic Glass Orb Badge */}
                    <div
                      className="w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center relative shrink-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-[#22222a] dark:to-[#0f0f13] text-black dark:text-white border border-black/15 dark:border-white/20 shadow-[0_4px_14px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
                    >
                      <div className="absolute top-1 left-2 w-4 h-1.5 rounded-full bg-white/60 dark:bg-white/30 blur-[0.3px] pointer-events-none transform -rotate-15" />
                      {renderIcon(activeItem.icon, "w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white")}
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight leading-snug">
                      {activeItem.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {activeItem.organization}
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                    {activeItem.description}
                  </p>

                  {/* Key Metadata Pill List with Monochromatic Round Glass Icons */}
                  <div className="space-y-2 pt-2 border-t border-black/6 dark:border-white/8">
                    {/* Metric Item */}
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                      <div className="w-7 h-7 rounded-full bg-black/4 dark:bg-white/6 border border-black/6 dark:border-white/8 flex items-center justify-center shrink-0 text-black dark:text-white">
                        <Users className="w-3.5 h-3.5 text-black dark:text-white" />
                      </div>
                      <span className="truncate">{activeItem.metric}</span>
                    </div>

                    {/* Highlight Badge */}
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                      <div className="w-7 h-7 rounded-full bg-black/4 dark:bg-white/6 border border-black/6 dark:border-white/8 flex items-center justify-center shrink-0 text-black dark:text-white">
                        <Star className="w-3.5 h-3.5 text-black dark:text-white" />
                      </div>
                      <span className="truncate">{activeItem.highlight}</span>
                    </div>

                    {/* Date Item */}
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                      <div className="w-7 h-7 rounded-full bg-black/4 dark:bg-white/6 border border-black/6 dark:border-white/8 flex items-center justify-center shrink-0 text-black dark:text-white">
                        <Calendar className="w-3.5 h-3.5 text-black dark:text-white" />
                      </div>
                      <span>{activeItem.dateLabel}</span>
                    </div>

                    {/* Location Item */}
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                      <div className="w-7 h-7 rounded-full bg-black/4 dark:bg-white/6 border border-black/6 dark:border-white/8 flex items-center justify-center shrink-0 text-black dark:text-white">
                        <MapPin className="w-3.5 h-3.5 text-black dark:text-white" />
                      </div>
                      <span>{activeItem.location}</span>
                    </div>
                  </div>

                  {/* Card Bottom CTA & Navigation Arrows */}
                  <div className="flex items-center justify-between pt-3 border-t border-black/6 dark:border-white/8">
                    {activeItem.link ? (
                      <a
                        href={activeItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                      >
                        <span>{activeItem.linkLabel || "View Post"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                        Verified Milestone
                      </div>
                    )}

                    {/* Left & Right Arrow Cycle Buttons */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handlePrev}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/12 border border-black/8 dark:border-white/10 flex items-center justify-center text-black dark:text-white transition-all active:scale-90 cursor-pointer"
                        title="Previous Achievement"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={handleNext}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/12 border border-black/8 dark:border-white/10 flex items-center justify-center text-black dark:text-white transition-all active:scale-90 cursor-pointer"
                        title="Next Achievement"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
};
