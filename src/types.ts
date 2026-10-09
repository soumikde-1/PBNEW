export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: 'ongoing' | 'completed';
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: string;
  period: string;
  description: string;
  responsibilities: string[];
  skillsApplied: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  duration: string;
  description: string;
  keyLearnings: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'vocal' | 'stage' | 'professional';
  level: number; // 0 to 100
  summary: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  proficiencyScore: number;
  script: string;
  sampleGreeting: string;
  notes: string;
}

export interface BroadcastItem {
  id: string;
  title: string;
  caption?: string;
  bengaliTitle?: string;
  channel: string;
  role: string;
  category: 'aarohi' | 'reporting' | 'voiceover' | 'events';
  date: string;
  duration?: string;
  description: string;
  videoUrl?: string; // YouTube / external embed URL
  canonicalWatchUrl?: string;
  reelUrl?: string;
  pageVideoUrl?: string;
  videoId?: string;
  thumbnailGradient?: string;
  tags: string[];
  isCurrentChannel?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}
