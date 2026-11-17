export const profile = {
  name: 'David Huang',
  email: 'dawae.huang@mail.utoronto.ca',
  university: 'University of Toronto',
  universityUrl: 'https://www.utoronto.ca/',
  description: 'David Huang is a Computer Engineering undergraduate at the University of Toronto working on video generation, 3D vision, and multimodal reasoning, with papers at NeurIPS 2026 and CVPR 2026 Findings.',
};

// Missing optional profiles stay absent from the page. Add verified URLs here.
// This order is intentional: Email, LinkedIn, Google Scholar, GitHub, X.
export const socials = [
  { name: 'Email', icon: 'email', href: `mailto:${profile.email}` },
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/davidhuang-/' },
  { name: 'Google Scholar', icon: 'scholar', href: 'https://scholar.google.ca/citations?user=JPDKdjIAAAAJ&hl=en' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com/Dawae111' },
  { name: 'X', icon: 'x', href: 'https://x.com/dawae_h' },
] as const;

// Verified research profiles listed only in search metadata (not shown as icons).
export const academicProfiles = [
  { name: 'OpenReview', href: 'https://openreview.net/profile?id=~David_Huang5' },
] as const;

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short', year: 'numeric', timeZone: 'UTC',
});

export const formatMonth = (month: string) =>
  monthFormatter.format(new Date(`${month}-01T00:00:00Z`));

export const experiences = [
  {
    organization: 'Qualcomm',
    url: 'https://www.qualcomm.com/research',
    role: 'Deep Learning Research Intern',
    start: '2026-06', end: '2026-08',
    description: 'Video diffusion models for image editing and facial reenactment.',
    logo: '/logos/qualcomm.svg', logoClass: 'qualcomm',
  },
  {
    organization: 'Huawei Noah’s Ark Lab',
    url: 'https://www.noahlab.com.hk/',
    role: 'Research Intern',
    start: '2025-05', end: '2026-05',
    description: 'Efficient 3D reconstruction, video generation, and open-vocabulary scene understanding.',
    logo: '/logos/huawei.svg', logoClass: 'huawei',
  },
  {
    organization: 'Tsinghua University',
    url: 'https://www.tsinghua.edu.cn/en/',
    role: 'Student Researcher',
    start: '2025-09', end: '2026-07',
    description: 'Efficient multimodal LLM reasoning with reinforcement learning.',
    logo: '/logos/tsinghua.jpg', logoClass: 'tsinghua',
  },
  {
    organization: 'SenseTime',
    url: 'https://www.sensetime.com/en',
    role: 'Research Engineer Intern',
    start: '2024-05', end: '2024-08',
    description: '3D perception for autonomous driving.',
    logo: '/logos/sensetime.png', logoClass: 'sensetime',
  },
];
