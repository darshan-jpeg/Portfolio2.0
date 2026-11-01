export interface ExperienceItem {
  id: string;
  number: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  isCurrent?: boolean;
  logo?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  specialization: string;
  year: string;
  grade?: string;
  highlights: string[];
  coursework: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  fullOverview: string;
  techStack: string[];
  features: string[];
  architectureNotes?: string;
  githubUrl?: string;
  liveUrl?: string;
  hasCaseStudy?: boolean;
  image: string;
  category: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend & UI' | 'Backend & Cloud' | 'AI & Data' | 'Languages & Core';
  icon?: string;
  featured?: boolean;
}

export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  highlight?: string;
  link?: string;
  linkLabel?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  credentialId: string;
  skillsCovered: string[];
  image: string;
}
