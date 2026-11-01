import type { ExperienceItem, EducationItem, ProjectItem, SkillItem, AchievementItem, CertificationItem } from '../types';

export const personalInfo = {
  name: "DARSAN P.",
  title: "FULL STACK ENGINEER",
  headline: "I understand the code. I leverage the intelligence.",
  subtext: "Building at the intersection of software engineering and AI.",
  bio: "Darsan is a Full Stack Engineer focused on building scalable web applications and practical AI solutions. A Computer Science Honours graduate from RSET with an 8.7 CGPA, he currently engineers full-stack features and AI-assisted workflows at careMP. He specializes in TypeScript, React, Node.js, NestJS, and PostgreSQL.",
  email: "darshanprasadjpeg@gmail.com",
  github: "https://github.com/darshan-jpeg",
  linkedin: "https://www.linkedin.com/in/d4rp",
  location: "Kochi / Palakkad, India",
  availability: "Open to High-Impact Engineering Roles & Collaborations",
};

export const experiences: ExperienceItem[] = [
  {
    id: "exp-01",
    number: "01",
    company: "careMP",
    role: "Full Stack Engineer",
    duration: "Present",
    location: "Remote",
    type: "Full-Time",
    logo: "/caremp-logo.png",
    description: "Currently working as a Full Stack Engineer on the careMP product. Working on full-stack development and AI/ML-based solutions.",
    responsibilities: [
      "Working on full-stack engineering and feature architecture for the careMP product.",
      "Developing and integrating AI/ML-based solutions and intelligent workflow pipelines.",
      "Engineering scalable backend services with NestJS, PostgreSQL, and TypeScript."
    ],
    techStack: ["MERN Stack", "Python", "TypeScript", "PostgreSQL", "NestJS", "AI/ML", "Git"],
    isCurrent: true
  },
  {
    id: "exp-02",
    number: "02",
    company: "Nicolette IT Services",
    role: "Software Development Intern",
    duration: "December 2025",
    location: "Remote",
    type: "Internship",
    logo: "/nicolette-logo.png",
    description: "Worked on redesigning and improving the company's professional website. Developed and worked with MERN Stack technologies.",
    responsibilities: [
      "Redesigned and optimized the company's professional website for enhanced user experience and responsiveness.",
      "Engineered clean, reusable components utilizing modern MERN Stack technologies.",
      "Maintained version control workflows and code quality using Git."
    ],
    techStack: ["MERN Stack", "React", "Node.js", "Express.js", "MongoDB", "Git"]
  },
  {
    id: "exp-03",
    number: "03",
    company: "Orion Innovation",
    role: "Software Engineer Intern",
    duration: "May 2025 – June 2025",
    location: "Kochi, Kerala",
    type: "On-site",
    logo: "/orion-logo.png",
    description: "Learned and worked extensively with the MERN Stack and Python. Developed multiple projects using MERN technologies. Gained professional experience working in a software development environment. Assisted in the development of a chatbot for a company product.",
    responsibilities: [
      "Learned and worked extensively with the MERN Stack and Python in a collaborative software development environment.",
      "Developed multiple full-stack projects applying MERN technologies and engineering best practices.",
      "Assisted in the development and architectural integration of an intelligent chatbot for a company product.",
      "Gained professional experience collaborating across cross-functional engineering teams with Git."
    ],
    techStack: ["MERN Stack", "Python", "React", "Node.js", "Express.js", "MongoDB", "Git"]
  }
];

export const educations: EducationItem[] = [
  {
    id: "edu-01",
    institution: "Rajagiri School of Engineering and Technology",
    degree: "B.Tech in Computer Science Engineering with Honours",
    specialization: "Computer Science Engineering (Honours)",
    year: "2022 – 2026",
    grade: "CGPA: 8.7",
    highlights: [
      "First Class with Distinction (8.7 CGPA).",
      "Merit award recipient during B.Tech studies.",
      "Honours student in Computer Science Engineering."
    ],
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "RDBMS (Relational Database Management Systems)",
      "Computer Networks and Protocols",
      "Operating Systems"
    ]
  },
  {
    id: "edu-02",
    institution: "Palghat Lions School",
    degree: "Higher Secondary Education – Computer Science",
    specialization: "Physics, Chemistry, Mathematics & Computer Science",
    year: "2021 – 2022",
    grade: "Score: 81%",
    highlights: [
      "Rigorous pre-university background in Computer Science and Physical Sciences.",
      "Academic focus on foundational algorithms and programming principles."
    ],
    coursework: [
      "C & C++ Programming",
      "Mathematics & Algebra",
      "Physics",
      "Computer Science"
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "proj-01",
    number: "01",
    title: "Silent Speech Recognition for the Voiceless",
    tagline: "Final Year Research & Engineering Project with Computer Vision & Deep Learning",
    description: "An AI-driven system enabling voiceless communication by processing facial muscle signals and lip articulatory dynamics into real-time speech and text synthesis.",
    fullOverview: "A funded research and engineering project designed for the voiceless. Leverages computer vision landmarks, FaceMesh muscle articulation tracking, and PyTorch deep neural networks to decode silent speech intentions into synthesized text and voice in real-time.",
    techStack: ["MediaPipe", "OpenCV", "FaceMesh", "PyTorch", "FastAPI", "Python"],
    features: [
      "Real-time facial landmark tracking and muscle articulation extraction via MediaPipe & FaceMesh",
      "High-accuracy silent speech recognition pipeline built with PyTorch neural networks",
      "Low-latency streaming inference backend engineered with Python FastAPI and OpenCV",
      "Published patent & recipient of national research funding from IndiaAI"
    ],
    architectureNotes: "End-to-end computer vision and deep learning inference pipeline connected via FastAPI streaming endpoints with real-time frame buffering.",
    githubUrl: "https://github.com/RSET-CSE-DEPARTMENT/RSET2022-26-S8-Beta/tree/main/Group%2010%20Silent%20Speech%20Recognition",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&w=1200&q=80",
    category: "Final Year Project // AI & CV",
    hasCaseStudy: false
  },
  {
    id: "proj-02",
    number: "02",
    title: "Barcelona Fan Website",
    tagline: "Full-Stack MERN Application for Player Statistics & News Delivery",
    description: "Developed a MERN stack application for player statistics and news delivery. Used MongoDB for efficient data storage and management of dynamic content.",
    fullOverview: "A dynamic web platform built for FC Barcelona supporters. Features comprehensive player stat dashboards, match fixtures, interactive news feeds, and responsive UI components powered by MongoDB dynamic content management.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "MERN Stack", "Git"],
    features: [
      "Comprehensive player statistics and performance metrics tracker",
      "Dynamic news delivery system with real-time editorial content updates",
      "Optimized MongoDB database schema for rapid query and content retrieval",
      "Modern responsive UI with fluid transitions and mobile-first layout"
    ],
    architectureNotes: "Full-stack MERN architecture with Express.js RESTful API endpoints and MongoDB Atlas document clustering.",
    githubUrl: "https://github.com/darshan-jpeg/barcelona.git",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    category: "MERN Stack App",
    hasCaseStudy: false
  }
];

export const skills: SkillItem[] = [
  // Frontend & UI
  { name: "React", category: "Frontend & UI", featured: true },
  { name: "Next.js", category: "Frontend & UI", featured: true },
  { name: "TypeScript", category: "Frontend & UI", featured: true },
  { name: "JavaScript", category: "Frontend & UI", featured: true },
  { name: "MERN Stack", category: "Frontend & UI", featured: true },

  // Backend & Cloud
  { name: "Node.js", category: "Backend & Cloud", featured: true },
  { name: "NestJS", category: "Backend & Cloud", featured: true },
  { name: "Express.js", category: "Backend & Cloud", featured: true },
  { name: "PostgreSQL", category: "Backend & Cloud", featured: true },
  { name: "MongoDB", category: "Backend & Cloud", featured: true },
  { name: "RDBMS / SQL", category: "Backend & Cloud", featured: true },

  // AI & Data
  { name: "AI / Machine Learning", category: "AI & Data", featured: true },
  { name: "Python", category: "AI & Data", featured: true },

  // Languages & Core
  { name: "Git", category: "Languages & Core", featured: true },
  { name: "C", category: "Languages & Core", featured: true },
  { name: "C++", category: "Languages & Core", featured: true },
  { name: "Data Structures & Algorithms", category: "Languages & Core", featured: true }
];

export const achievements: AchievementItem[] = [
  {
    id: "ach-01",
    number: "01",
    title: "Google Developers Group Hackathon Winner",
    organization: "TECH FOR GOOD – Build with AI",
    year: "2026",
    description: "Won Best Problem Framing under the Good Health and Well-Being category at the GDG TECH FOR GOOD – Build with AI hackathon.",
    highlight: "Best Problem Framing Winner",
    link: "https://www.linkedin.com/posts/caremp_caremp-techforgood-buildwithai-activity-7492898435055067136-EUUr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE4DLuoBm3W-BmxfVsXCKw_qgDR1VO4zBGc",
    linkLabel: "View GDG Post"
  },
  {
    id: "ach-02",
    number: "02",
    title: "IndiaAI Funding Awardee",
    organization: "IndiaAI Government Initiative",
    year: "2026",
    description: "Received prestigious IndiaAI funding for the final-year research and engineering project: \"Silent Speech Recognition for the Voiceless\".",
    highlight: "National AI Grant Recipient",
    link: "https://www.linkedin.com/posts/d4rp_activity-7421236807083794432-nOHR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE4DLuoBm3W-BmxfVsXCKw_qgDR1VO4zBGc",
    linkLabel: "View Funding Post"
  },
  {
    id: "ach-03",
    number: "03",
    title: "Patent Published — Silent Speech Recognition",
    organization: "Patent Office of India",
    year: "2026",
    description: "Published patent for \"Wearable Jaw and Cheek Muscle Signal Detection Device for Silent Speech Recognition\".",
    highlight: "Published Hardware & AI Patent",
    link: "https://www.linkedin.com/posts/rajagiriengg_activity-7500758603255996417-iP0S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE4DLuoBm3W-BmxfVsXCKw_qgDR1VO4zBGc",
    linkLabel: "View Patent Post"
  },
  {
    id: "ach-04",
    number: "04",
    title: "Smart India Hackathon (SIH) — 2x College Level Qualifier",
    organization: "Smart India Hackathon",
    year: "2024 — 2025",
    description: "Qualified twice at the college level in the nationwide Smart India Hackathon for innovative problem-solving and rapid prototyping.",
    highlight: "2x College Level Qualifier"
  },
  {
    id: "ach-05",
    number: "05",
    title: "Best Poster Award — SDG Category",
    organization: "Academic Research & Innovation Symposium",
    year: "2026",
    description: "Won the Best Poster Award in the Sustainable Development Goals (SDG) category for the final-year project.",
    highlight: "SDG Category Best Poster Award",
    link: "https://www.linkedin.com/posts/giribala-arun-a9444626a_isacds26-turinger-mitbengaluru-ugcPost-7424377433153232896-GDqt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE4DLuoBm3W-BmxfVsXCKw_qgDR1VO4zBGc",
    linkLabel: "View Poster Post"
  },
  {
    id: "ach-06",
    number: "06",
    title: "Best Storyteller — careMP (Ascend Event)",
    organization: "careMP / Ascend Event",
    year: "2026",
    description: "Won the Best Storyteller recognition at the Ascend event for impactful storytelling, technical communication, and product presentation.",
    highlight: "Best Storyteller Recognition",
    link: "https://www.linkedin.com/posts/d4rp_caremp-activity-7495176053057810432-v95P?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE4DLuoBm3W-BmxfVsXCKw_qgDR1VO4zBGc",
    linkLabel: "View Recognition Post"
  },
  {
    id: "ach-07",
    number: "07",
    title: "Academic Merit Award & Honours Degree",
    organization: "Rajagiri School of Engineering and Technology",
    year: "2022 — 2026",
    description: "Received a merit award during B.Tech studies and graduated as an Honours student in Computer Science Engineering (8.7 CGPA).",
    highlight: "B.Tech Honours & Merit Award Recipient"
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "cert-01",
    title: "Introduction to Machine Learning",
    organization: "NPTEL (IIT Kharagpur / Swayam)",
    year: "Apr 2025",
    credentialId: "NPTEL-ML-2025-0482",
    skillsCovered: ["Supervised Learning", "Regression & Classification", "Neural Networks", "Ensemble Models"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cert-02",
    title: "Deep Learning",
    organization: "NPTEL (IIT Madras / Swayam)",
    year: "Nov 2025",
    credentialId: "NPTEL-DL-2025-1194",
    skillsCovered: ["Convolutional Neural Networks", "RNNs & LSTMs", "Backpropagation", "Deep Architectures"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cert-03",
    title: "Introduction to Software Engineering",
    organization: "IBM",
    year: "2025",
    credentialId: "IBM-SE-2025-78391",
    skillsCovered: ["SDLC & Agile / Scrum", "Architecture & Design Patterns", "OOP Principles", "CI/CD & Git"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cert-04",
    title: "Cloud Computing",
    organization: "IBM",
    year: "Sept 2026",
    credentialId: "IBM-CC-2026-90412",
    skillsCovered: ["IaaS, PaaS & SaaS Architecture", "Hybrid Cloud & Containers", "Cloud Security", "Microservices"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cert-05",
    title: "Developing Back-End Apps with Node.js and Express",
    organization: "IBM",
    year: "Sept 2026",
    credentialId: "IBM-NODE-2026-66291",
    skillsCovered: ["Node.js Runtime", "Express.js REST APIs", "Middleware & Routing", "Asynchronous JavaScript & Promises"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  }
];

