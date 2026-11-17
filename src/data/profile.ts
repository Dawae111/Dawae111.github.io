export const profile = {
  name: 'David Huang',
  email: 'dawae.huang@mail.utoronto.ca',
  university: 'University of Toronto',
  universityUrl: 'https://www.utoronto.ca/',
  description: 'David Huang is a Computer Engineering undergraduate at the University of Toronto working on video generation, 3D vision, and multimodal reasoning.',
};

// Missing optional profiles stay absent from the page. Add verified URLs here.
// This order is intentional: Email, LinkedIn, Google Scholar, GitHub, X.
export const socials = [
  { name: 'Email', icon: 'email', href: `mailto:${profile.email}` },
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/davidhuang-/' },
  { name: 'Google Scholar', icon: 'scholar', href: '' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com/Dawae111' },
  { name: 'X', icon: 'x', href: '' },
] as const;

export const experiences = [
  {
    organization: 'Qualcomm',
    url: 'https://www.qualcomm.com/research',
    role: 'Deep Learning Research Intern',
    start: '2026-06', end: '2026-08', dates: 'Jun – Aug 2026',
    description: 'Video diffusion models for image editing and facial reenactment.',
    logo: '/logos/qualcomm.svg', logoClass: 'qualcomm',
  },
  {
    organization: 'Tsinghua University',
    url: 'https://www.tsinghua.edu.cn/en/',
    role: 'Student Researcher',
    start: '2025-09', end: '2026-07', dates: 'Sep 2025 – Jul 2026',
    description: 'Efficient multimodal reasoning with latent world models and reinforcement learning.',
    logo: '/logos/tsinghua.jpg', logoClass: 'tsinghua',
  },
  {
    organization: 'Huawei Noah’s Ark Lab',
    url: 'https://www.noahlab.com.hk/',
    role: 'Assistant Researcher',
    start: '2025-05', end: '2026-04', dates: 'May 2025 – Apr 2026',
    duration: '12 months',
    description: 'Video generation, open-vocabulary scene understanding, and efficient 3D reconstruction.',
    logo: '/logos/huawei.svg', logoClass: 'huawei',
  },
  {
    organization: 'SenseTime',
    url: 'https://www.sensetime.com/en',
    role: 'Perception Algorithm Intern',
    start: '2024-05', end: '2024-08', dates: 'May – Aug 2024',
    description: '3D perception for autonomous driving.',
    logo: '/logos/sensetime.png', logoClass: 'sensetime',
  },
];
