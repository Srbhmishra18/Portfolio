
export type Language = 'en' | 'de';

export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    de: string;
  };
  tech: string[];
  link: string;
  github: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string; // Lucide icon name or image url
  category: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: {
    en: string[];
    de: string[];
  };
  recommendationLink?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  description: {
    en: string;
    de: string;
  };
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  tags: string[];
}

export interface Translation {
  nav: {
    about: string;
    experience: string;
    education: string;
    certifications: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    quote: string;
    cta: string;
    resume: string;
  };
  about: {
    title: string;
    content: string;
    stats: {
      experience: string;
      clients: string;
      projects: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
  };
  education: {
    title: string;
    subtitle: string;
  };
  certifications: {
    title: string;
    subtitle: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewCode: string;
    liveDemo: string;
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    sent: string;
  };
}