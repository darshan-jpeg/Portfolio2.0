import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Moon,
  ArrowUp,
  User,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Code2,
  Trophy,
  ShieldCheck,
  Mail,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navigation.css';

interface NavigationProps {
  onContactClick: () => void;
}

interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'about', name: 'About', href: '#about', icon: User },
  { id: 'experience', name: 'Experience', href: '#experience', icon: Briefcase },
  { id: 'education', name: 'Education', href: '#education', icon: GraduationCap },
  { id: 'projects', name: 'Projects', href: '#projects', icon: FolderGit2 },
  { id: 'skills', name: 'Skills', href: '#skills', icon: Code2 },
  { id: 'achievements', name: 'Achievements', href: '#achievements', icon: Trophy },
  { id: 'certifications', name: 'Certifications', href: '#certifications', icon: ShieldCheck },
  { id: 'contact', name: 'Contact', href: '#contact', icon: Mail },
];

/** Dynamic Animated Curved Pointer Arrow */
const DynamicCurvedArrow: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
        scale: 0.5,
        x: -4,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: [0, 3.5, 0],
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.12 },
      }}
      transition={{
        opacity: { duration: 0.16 },
        scale: { type: 'spring', stiffness: 480, damping: 22 },
        x: {
          repeat: Infinity,
          duration: 1.3,
          ease: 'easeInOut',
          delay: 0.2,
        },
      }}
    >
      {/* Clean curved swoosh trail */}
      <motion.path
        d="M3 17.5C4.5 12 8 8.5 14 8.5H18.5"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Crisp dynamic arrowhead */}
      <motion.path
        d="M14.5 4.5L19.5 8.5L14.5 12.5"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, x: -2 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.08, duration: 0.16 }}
      />
    </motion.svg>
  );
};

export const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Screen size detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = ['about', 'experience', 'education', 'projects', 'skills', 'achievements', 'certifications', 'contact'];
      const scrollPosition = scrollY + 300;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler (Simple click navigation for mobile & desktop)
  const handleSelect = useCallback((item: NavItem) => {
    setIsOpen(false);
    setHoveredItemId(null);

    if (item.id === 'contact') {
      onContactClick();
      return;
    }

    const id = item.href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 50;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [onContactClick]);

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Desktop hover opening with grace delay
  const handleMouseEnterContainer = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeaveContainer = () => {
    setHoveredItemId(null);
    if (!isMobile) {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 350);
    }
  };

  // Harmonic Concentric Geometry
  const outerRadius = isMobile ? 136 : 190;
  const innerRadius = isMobile ? 70 : 96;
  const arcStartDeg = 92; // Top
  const arcEndDeg = 178;  // Left

  // Unified Spring Transitions
  const springTransition = {
    type: 'spring' as const,
    stiffness: 400,
    damping: 26,
    mass: 0.7,
  };

  const exitSpringTransition = {
    type: 'spring' as const,
    stiffness: 460,
    damping: 32,
    mass: 0.6,
  };

  return (
    <>
      {/* Tap outside backdrop when open on mobile */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Floating Monochromatic Glass Navigation Anchor (Bottom-Right) */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnterContainer}
        onMouseLeave={handleMouseLeaveContainer}
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center select-none"
      >
        {/* Invisible Hover Boundary Shield when open on desktop */}
        {isOpen && !isMobile && (
          <div
            className="absolute -top-[240px] -left-[240px] w-[310px] h-[310px] rounded-tl-full pointer-events-auto bg-transparent z-10"
            onMouseEnter={handleMouseEnterContainer}
          />
        )}

        {/* ══ FROSTED GLASS RADIAL ITEMS (Outer Arc) ══ */}
        <AnimatePresence>
          {isOpen && (
            <>
              {navItems.map((item, idx) => {
                const angleDeg = arcStartDeg + idx * ((arcEndDeg - arcStartDeg) / (navItems.length - 1));
                const rad = (angleDeg * Math.PI) / 180;
                const targetX = Math.cos(rad) * outerRadius;
                const targetY = -Math.sin(rad) * outerRadius;

                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const isHovered = hoveredItemId === item.id;

                // Radially outward offset to place tooltip completely outside the arc of buttons
                const tooltipOffset = isMobile ? 26 : 34;
                const tooltipX = Math.cos(rad) * tooltipOffset;
                const tooltipY = -Math.sin(rad) * tooltipOffset;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
                    animate={{
                      x: targetX,
                      y: targetY,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                      scale: 0.2,
                      transition: {
                        ...exitSpringTransition,
                        delay: (navItems.length - 1 - idx) * 0.015,
                      },
                    }}
                    transition={{
                      ...springTransition,
                      delay: idx * 0.022,
                    }}
                    className={`absolute ${isHovered ? 'z-50' : 'z-30'} flex items-center justify-center`}
                    onMouseEnter={() => setHoveredItemId(item.id)}
                    onMouseLeave={() => setHoveredItemId(null)}
                  >
                    {/* Hover Pointer: Word on Left, Dynamic Animated Arrow on Right */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.88, x: tooltipX - 6, y: tooltipY }}
                          animate={{ opacity: 1, scale: 1, x: tooltipX, y: tooltipY }}
                          exit={{ opacity: 0, scale: 0.88, x: tooltipX - 6, y: tooltipY }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className="pointer-events-none absolute right-[calc(50%+22px)] top-1/2 -translate-y-1/2 flex items-center gap-1.5 whitespace-nowrap text-black dark:text-white z-[100] select-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
                        >
                          {/* Word on Left with synchronized glide-in */}
                          <motion.span
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -4 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase"
                          >
                            {item.name}
                          </motion.span>
                          {/* Dynamic Animated Curved Pointer Arrow */}
                          <DynamicCurvedArrow className="w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => handleSelect(item)}
                      type="button"
                      className={`glass-nav-item ${isActive ? 'is-active' : ''}`}
                      aria-label={`Navigate to ${item.name}`}
                    >
                      {/* Single Monochromatic Frosted Glass Front Surface */}
                      <span className="glass-nav-front">
                        <span className="glass-nav-icon" aria-hidden="true">
                          <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0 stroke-[2.2]" />
                        </span>
                      </span>

                      {/* Active Indicator Pip */}
                      {isActive && <span className="glass-nav-pip" />}
                    </button>
                  </motion.div>
                );
              })}

              {/* ══ UTILITY BUTTONS (Inner Concentric Arc: 112° & 158° - No Hover Wordings) ══ */}
              {/* 1. Scroll to Top (Positioned at 112°) */}
              <motion.div
                key="scroll-top"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
                animate={{
                  x: Math.cos((112 * Math.PI) / 180) * innerRadius,
                  y: -Math.sin((112 * Math.PI) / 180) * innerRadius,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                  scale: 0.2,
                  transition: { ...exitSpringTransition, duration: 0.18 },
                }}
                transition={{ ...springTransition, delay: 0.06 }}
                className="absolute z-25 flex items-center justify-center"
              >
                <button
                  onClick={scrollToTop}
                  type="button"
                  className="glass-nav-item glass-nav-item--util"
                  aria-label="Scroll to Top"
                >
                  <span className="glass-nav-front">
                    <span className="glass-nav-icon">
                      <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.4]" />
                    </span>
                  </span>
                </button>
              </motion.div>

              {/* 2. Theme Toggle (Positioned at 158°) */}
              <motion.div
                key="theme-toggle"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
                animate={{
                  x: Math.cos((158 * Math.PI) / 180) * innerRadius,
                  y: -Math.sin((158 * Math.PI) / 180) * innerRadius,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                  scale: 0.2,
                  transition: { ...exitSpringTransition, duration: 0.18 },
                }}
                transition={{ ...springTransition, delay: 0.08 }}
                className="absolute z-25 flex items-center justify-center"
              >
                <button
                  onClick={toggleTheme}
                  type="button"
                  className="glass-nav-item glass-nav-item--util"
                  aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                >
                  <span className="glass-nav-front">
                    <span className="glass-nav-icon">
                      {theme === 'dark' ? (
                        <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                      ) : (
                        <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                      )}
                    </span>
                  </span>
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ══ CENTRAL FROSTED GLASS HUB BUTTON ══ */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`glass-nav-item glass-nav-item--hub ${isOpen ? 'is-active' : ''}`}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation menu'}
        >
          {/* Single Frosted Glass Front Surface */}
          <span className="glass-nav-front">
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ type: 'spring', stiffness: 420, damping: 24 }}
              className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"
            >
              {/* 4 Geometric Diamond Dots (Black in dark mode, White in light mode) */}
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white dark:bg-black transition-colors duration-200" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white dark:bg-black transition-colors duration-200" />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white dark:bg-black transition-colors duration-200" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white dark:bg-black transition-colors duration-200" />
              </div>
            </motion.div>
          </span>

          {/* Ambient Pulse Ring when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-2xl border border-black/15 dark:border-white/20 animate-ping opacity-25 pointer-events-none" />
          )}
        </button>
      </div>
    </>
  );
};

export default Navigation;

