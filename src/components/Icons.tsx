import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiPytorch,
  SiFastapi,
  SiOpencv,
  SiGit,
  SiC,
  SiCplusplus,
  SiMeta,
  SiGooglecloud,
  SiCoursera,
  SiGithub,
  SiLeetcode,
} from 'react-icons/si';
import { FaAws, FaLinkedin } from 'react-icons/fa6';

interface IconProps {
  className?: string;
  color?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiGithub className={className} />
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <FaLinkedin className={className} />
);

// Monochromatic Black & White Tech Logos (Adaptive to Light/Dark mode)
export const ReactIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiReact className={`${className} text-black dark:text-white`} />
);

export const NextIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiNextdotjs className={`${className} text-black dark:text-white`} />
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiTypescript className={`${className} text-black dark:text-white`} />
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiJavascript className={`${className} text-black dark:text-white`} />
);

export const NodeIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiNodedotjs className={`${className} text-black dark:text-white`} />
);

export const NestIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiNestjs className={`${className} text-black dark:text-white`} />
);

export const ExpressIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiExpress className={`${className} text-black dark:text-white`} />
);

export const PostgresIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiPostgresql className={`${className} text-black dark:text-white`} />
);

export const MongoIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiMongodb className={`${className} text-black dark:text-white`} />
);

export const PythonIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiPython className={`${className} text-black dark:text-white`} />
);

export const PyTorchIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiPytorch className={`${className} text-black dark:text-white`} />
);

export const FastApiIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiFastapi className={`${className} text-black dark:text-white`} />
);

export const OpenCvIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiOpencv className={`${className} text-black dark:text-white`} />
);

export const GitIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiGit className={`${className} text-black dark:text-white`} />
);

export const CIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiC className={`${className} text-black dark:text-white`} />
);

export const CppIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiCplusplus className={`${className} text-black dark:text-white`} />
);

export const AwsIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <FaAws className={`${className} text-black dark:text-white`} />
);

export const MetaIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiMeta className={`${className} text-black dark:text-white`} />
);

export const GoogleCloudIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiGooglecloud className={`${className} text-black dark:text-white`} />
);

export const CourseraIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiCoursera className={`${className} text-black dark:text-white`} />
);

export const AiIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiPytorch className={`${className} text-black dark:text-white`} />
);

export const MernIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiReact className={`${className} text-black dark:text-white`} />
);

export const SqlIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiPostgresql className={`${className} text-black dark:text-white`} />
);

export const DsaIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <SiLeetcode className={`${className} text-black dark:text-white`} />
);

// Smart OG Icon Resolver for Tech Stack items
export const getSkillIcon = (name: string): React.FC<IconProps> => {
  switch (name) {
    case 'React': return ReactIcon;
    case 'Next.js': return NextIcon;
    case 'TypeScript': return TypeScriptIcon;
    case 'JavaScript': return JavaScriptIcon;
    case 'MERN Stack': return MernIcon;
    case 'Node.js': return NodeIcon;
    case 'NestJS': return NestIcon;
    case 'Express.js': return ExpressIcon;
    case 'PostgreSQL': return PostgresIcon;
    case 'MongoDB': return MongoIcon;
    case 'RDBMS / SQL': return SqlIcon;
    case 'SQL': return SqlIcon;
    case 'Python': return PythonIcon;
    case 'PyTorch': return PyTorchIcon;
    case 'FastAPI': return FastApiIcon;
    case 'OpenCV': return OpenCvIcon;
    case 'AI / Machine Learning': return AiIcon;
    case 'Git': return GitIcon;
    case 'C': return CIcon;
    case 'C++': return CppIcon;
    case 'Data Structures & Algorithms': return DsaIcon;
    default: return ReactIcon;
  }
};
