import { EducationItem, ExperienceItem, CertificationItem, SkillItem, LanguageItem, BroadcastItem } from '../types';

export const PERSONAL_INFO = {
  name: 'PURBASHA BASU',
  shortName: 'Purbasha',
  role: 'Anchor & Voice Over Artist',
  photoUrl: './purbasha_picsart.png',
  photoFallbackUrl: 'https://raw.githubusercontent.com/dsubarna149-stack/purbashabio/main/Picsart_26-10-09_11-42-10-364.png',
  currentWork: {
    role: 'Television News Anchor',
    channel: 'Aarohi News Bangla',
    tagline: 'Currently presenting daily prime time and breaking news bulletins.',
    websiteUrl:
      'https://l.facebook.com/l.php?u=http%3A%2F%2Faarohinewsbangla.com%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAcGRvZgVicmlkETF2UExnR3JrZFNtZHRtVEpxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlrFL5GHGVfoM83ffPF5O2deDWvGOF1upDBnPwaA2UpVEbApsJZwGriX4vio_aem_krm8J9sJA2RJ0ZkKis7cZQ&h=AUBI-Iu0M0-C8b-qn7QbQxCThyLC84CYcBuDkX7gFb0NPsQOo323X-XfchfB2a-4AllNqE5q6gNw3hVjemKTwnjO3YtiI73jRyGvcsyLnQPp-mpjSVr9ph2rsmle-b629wZd',
    facebookPageUrl: 'https://www.facebook.com/profile.php?id=61558057511883',
    directWebsite: 'http://aarohinewsbangla.com/',
  },
  tagline:
    'To begin my career as an Anchor in a professional environment where I can utilize my communication, presentation, and public speaking skills. I aim to create engaging experiences for audiences while continuously developing my confidence, creativity, and hosting abilities.',
  contact: {
    phone: '8250789938',
    phoneFormatted: '+91 82507 89938',
    email: 'purbashabasu006@gmail.com',
    location: 'Siliguri',
    currentCity: 'Kolkata, West Bengal',
    availability: 'Currently Anchoring at Aarohi News Bangla | Open for Media Projects',
  },
  socials: {
    whatsapp: 'https://wa.me/918250789938',
    emailMailto: 'mailto:purbashabasu006@gmail.com',
  },
};

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'aarohi-news-bangla',
    role: 'Television News Anchor (Currently Working)',
    organization: 'Aarohi News Bangla',
    type: 'Regional Broadcast & Digital News Network',
    period: 'Current / Ongoing Position',
    description:
      'Currently working as a Television Anchor at Aarohi News Bangla. Hosting studio news bulletins, presenting breaking news updates, and engaging viewers with articulate Bengali and English presentation.',
    responsibilities: [
      'Anchoring live and recorded Bengali daily news bulletins with confident screen presence and clear diction.',
      'Delivering fast-paced breaking news bulletins with composure, steady pacing, and teleprompter fluidity.',
      'Engaging viewers through structured news intros, headlines reading, and transitions between field correspondents.',
      'Collaborating with the editorial and production desk on script revisions and rundown timings.',
    ],
    skillsApplied: [
      'Live Studio Anchoring',
      'Breaking News Handling',
      'Teleprompter Reading',
      'Bengali Diction',
      'Newsroom Coordination',
    ],
  },
  {
    id: 'durgapur-24x7',
    role: 'Voice Over Artist',
    organization: 'Durgapur 24 X 7',
    type: 'Digital News & Media Broadcast',
    period: 'Professional Experience',
    description:
      'Delivered professional and engaging voice-overs, ensuring clear pronunciation and appropriate tone for various media content and broadcast requirements.',
    responsibilities: [
      'Recorded voice-overs for regional news bulletins, community stories, and feature segments with crisp acoustic clarity.',
      'Adapted vocal inflection, pace, and dramatic pitch to match breaking news, solemn reporting, and celebratory features.',
      'Collaborated closely with video editors and producers to synchronize voice tracks with on-screen visual b-roll footage.',
      'Maintained consistent microphone discipline, neutral breathing technique, and sharp phonetic pronunciation.',
    ],
    skillsApplied: [
      'Voice Modulation',
      'News Script Narration',
      'Acoustic Pacing',
      'Bengali & English Articulation',
      'Deadline Discipline',
    ],
  },
];

export const CERTIFICATION_LIST: CertificationItem[] = [
  {
    id: 'bishal-da-anchoring',
    title: 'Anchoring & Reporting (6 Months)',
    institution: 'Institute: Bishal dar class',
    duration: '6 Months Intensive Training',
    description:
      'Intensive hands-on professional certificate program focused on broadcast television anchoring, newsroom reporting, teleprompter mastery, and dynamic stage hosting.',
    keyLearnings: [
      'Camera-facing body language, posture, eye engagement, and natural expression.',
      'Piece-To-Camera (P2C) live standup techniques and on-the-spot ad-lib reporting.',
      'Voice projection, diaphragm breath support, and resonance for high-pressure broadcasts.',
      'Techniques for handling breaking news feeds, teleprompter glitches, and spontaneous interviews.',
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'ba-masscomm',
    degree: 'BA Honours (Journalism & Mass Communication)',
    institution: 'University Of North Bengal (1y) & Calcutta University (Currently Running)',
    period: 'Currently Running',
    status: 'ongoing',
    description:
      'Pursuing comprehensive academic grounding in news media, broadcast journalism, communication theories, public relations, and audio-visual production across North Bengal University and Calcutta University.',
    highlights: [
      'Broadcast Journalism & Studio Newsroom Workflows',
      'Media Ethics, Press Laws & Public Communication',
      'Electronic Media Production & Audio-Visual Scripting',
      'Feature Writing, Public Speaking & News Presentation',
    ],
  },
  {
    id: 'hs-12th',
    degree: 'Higher Secondary (12th Grade)',
    institution: 'Siliguri Girls High School',
    period: 'Passed: 2025',
    status: 'completed',
    description:
      'Completed Higher Secondary education in humanities and language studies, actively participating in debate, elocution, and stage recitation competitions.',
    highlights: [
      'Specialization in Humanities, Literature & Communication',
      'Active participant in school elocution and public debate forums',
      'Strengthened foundational rhetoric and bilingual elocution skills',
    ],
  },
  {
    id: 'madhyamik-10th',
    degree: 'Madhyamik (10th Grade)',
    institution: 'Siliguri Girls High School',
    period: 'Passed: 2023',
    status: 'completed',
    description:
      'Secondary school matriculation emphasizing linguistic literacy, cultural arts, and competitive public recitation.',
    highlights: [
      'Foundational studies in languages, sciences and cultural arts',
      'Consistently recognized for clear Bengali and English recitation',
      'Built early stage presence through inter-school cultural programs',
    ],
  },
];

export const SKILLS_LIST: SkillItem[] = [
  {
    id: 'comm',
    name: 'Excellent Communication',
    category: 'vocal',
    level: 95,
    summary: 'Articulate expression across conversational, editorial, and broadcast formats.',
  },
  {
    id: 'public-speaking',
    name: 'Public Speaking',
    category: 'stage',
    level: 92,
    summary: 'Commanding stage presence, clear voice projection, and natural oratorical cadence.',
  },
  {
    id: 'audience-engagement',
    name: 'Audience Engagement',
    category: 'stage',
    level: 90,
    summary: 'Connecting with live event crowds, television viewers, and digital media audiences.',
  },
  {
    id: 'voice-pronunciation',
    name: 'Clear Voice & Pronunciation',
    category: 'vocal',
    level: 94,
    summary: 'Flawless phonetic diction, crisp consonant delivery, and natural acoustic tone.',
  },
  {
    id: 'script-reading',
    name: 'Script Reading & Presentation',
    category: 'vocal',
    level: 92,
    summary: 'Fluid sight-reading, teleprompter delivery, and expressive narrative inflection.',
  },
  {
    id: 'confidence-pressure',
    name: 'Confidence Under Pressure',
    category: 'stage',
    level: 88,
    summary: 'Composed on-camera temperament during live broadcasts, breaking news, and stage shifts.',
  },
  {
    id: 'time-mgmt',
    name: 'Time Management',
    category: 'professional',
    level: 90,
    summary: 'Adherence to strict broadcast segment rundowns, cue timings, and turnaround deadlines.',
  },
  {
    id: 'teamwork',
    name: 'Teamwork & Coordination',
    category: 'professional',
    level: 92,
    summary: 'Seamless synchronization with camera crews, audio engineers, floor managers, and editors.',
  },
  {
    id: 'quick-learning',
    name: 'Quick Learning Ability',
    category: 'professional',
    level: 95,
    summary: 'Swift assimilation of complex subject briefs, regional dialects, and studio workflows.',
  },
];

export const LANGUAGES_LIST: LanguageItem[] = [
  {
    name: 'Bengali',
    level: 'Fluent (Native)',
    proficiencyScore: 98,
    script: 'বাংলা',
    sampleGreeting: 'নমস্কার, আমি পূর্বাশা বসু। আজকের প্রধান সংবাদে আপনাদের স্বাগত।',
    notes: 'Native fluency in formal Sadhu/Cholit diction, literary recitation, and regional broadcast delivery.',
  },
  {
    name: 'English',
    level: 'Fluent (Professional)',
    proficiencyScore: 92,
    script: 'English',
    sampleGreeting: 'Good evening and welcome. I am Purbasha Basu, presenting live from the studio.',
    notes: 'Crisp articulation, neutral Indian English accent, professional corporate and broadcast delivery.',
  },
  {
    name: 'Hindi',
    level: 'Fluent (Conversational & Media)',
    proficiencyScore: 88,
    script: 'हिन्दी',
    sampleGreeting: 'नमस्कार, मैं पूर्वाशा बसु। आज के इस खास कार्यक्रम में आप सभी का हार्दिक स्वागत है।',
    notes: 'Fluent conversational and public announcement delivery with clear pronunciation and emotive cadence.',
  },
];

export const INTERESTS_LIST = [
  {
    id: 'anchoring-events',
    title: 'Anchoring & Event Hosting',
    iconName: 'Mic',
    description:
      'Energizing corporate symposiums, cultural galas, youth festivals, and television panel discussions with charismatic hosting and stage authority.',
    keyPoints: [
      'Live stage compering & award ceremonies',
      'Corporate conferences & product debuts',
      'Cultural celebrations & literary meets',
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting',
    iconName: 'Tv',
    description:
      'Field investigations, spot interviews, piece-to-camera reporting, and civic journalism with objective inquiry and empathetic storytelling.',
    keyPoints: [
      'Piece-To-Camera (P2C) live standups',
      'Public interest & civic news stories',
      'Interviews with guests & cultural figures',
    ],
  },
  {
    id: 'voice-over',
    title: 'Voice Over',
    iconName: 'Radio',
    description:
      'Lending voice and soul to documentaries, commercial ads, podcast intros, digital news reels, and e-learning narrations.',
    keyPoints: [
      'Digital news bulletin voice tracks',
      'Documentary & educational narration',
      'Commercial advertisements & promos',
    ],
  },
];

export const BROADCAST_WORKS_LIST: BroadcastItem[] = [
  {
    id: 'podcast-video-01',
    title: 'Video 1',
    caption: 'ভবানীপুর নির্বাচন মামলা: সময় পেলেন শুভেন্দু অধিকারী',
    bengaliTitle: 'ভবানীপুর নির্বাচন মামলা: সময় পেলেন শুভেন্দু অধিকারী',
    channel: 'Aarohi News Bangla',
    role: 'Anchor & Studio Presenter',
    category: 'aarohi',
    date: 'Aarohi News Bangla Broadcast',
    duration: 'Special Studio Broadcast',
    isCurrentChannel: true,
    description: 'ভবানীপুর নির্বাচন মামলা: সময় পেলেন শুভেন্দু অধিকারী',
    videoUrl: 'https://www.facebook.com/share/v/19sp7AR5Yb/',
    canonicalWatchUrl: 'https://www.facebook.com/watch/?v=28355245837450668',
    reelUrl: 'https://www.facebook.com/reel/28355245837450668/',
    pageVideoUrl: 'https://www.facebook.com/61558057511883/videos/28355245837450668/',
    videoId: '28355245837450668',
    thumbnailGradient: 'from-orange-600/40 via-blue-950/70 to-black',
    tags: ['Aarohi News Bangla', 'Studio Anchor', 'Video 1', 'Bengali Broadcast'],
  },
  {
    id: 'podcast-video-02',
    title: 'Video 2',
    caption: 'Live Super 7: নানা পাটেকরের প্রয়াণ, পুজোয় ৫১ স্পেশাল ট্রেন, SIR-এ রাহুল সরব',
    bengaliTitle: 'Live Super 7: নানা পাটেকরের প্রয়াণ, পুজোয় ৫১ স্পেশাল ট্রেন, SIR-এ রাহুল সরব',
    channel: 'Aarohi News Bangla',
    role: 'Anchor & News Presenter',
    category: 'aarohi',
    date: 'Aarohi News Bangla Broadcast',
    duration: 'Prime Studio Headlines',
    isCurrentChannel: true,
    description: 'Live Super 7: নানা পাটেকরের প্রয়াণ, পুজোয় ৫১ স্পেশাল ট্রেন, SIR-এ রাহুল সরব',
    videoUrl: 'https://www.facebook.com/share/v/19sp3p4dKs/',
    canonicalWatchUrl: 'https://www.facebook.com/watch/?v=1576930303646326',
    reelUrl: 'https://www.facebook.com/reel/1576930303646326/',
    pageVideoUrl: 'https://www.facebook.com/61558057511883/videos/1576930303646326/',
    videoId: '1576930303646326',
    thumbnailGradient: 'from-blue-600/40 via-slate-900 to-black',
    tags: ['Aarohi News Bangla', 'Super 7 Bulletin', 'Video 2', 'Bengali News'],
  },
];
