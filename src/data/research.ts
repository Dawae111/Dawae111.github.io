import type { ImageMetadata } from 'astro';
import turbo from '../assets/turbovggt.webp';
import dlwm from '../assets/dlwm.webp';
import movie from '../assets/moviedrive.webp';
import lang from '../assets/langsvr.webp';

export interface Paper {
  id: string;
  title: string;
  authors: { name: string; equal?: boolean }[];
  venue: string;
  accepted: boolean;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  // Optional local MP4 preview; a still image remains the accessible fallback.
  video?: string;
  links: { label: string; href: string }[];
}

export const papers: Paper[] = [
  {
    id: 'turbovggt',
    title: 'TurboVGGT: Fast Visual Geometry Reconstruction with Adaptive Alternating Attention',
    authors: [
      { name: 'David Huang', equal: true }, { name: 'Guile Wu', equal: true },
      { name: 'Chengjie Huang' }, { name: 'Bingbing Liu' }, { name: 'Dongfeng Bai' },
    ],
    venue: 'NeurIPS 2026', accepted: true,
    description: 'Adaptive sparse attention for faster multi-view 3D reconstruction.',
    image: turbo,
    imageAlt: 'TurboVGGT overview comparing efficient multi-view reconstruction with dense attention.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2605.14315' },
      { label: 'Project', href: 'https://turbovggt.github.io/' },
    ],
  },
  {
    id: 'dlwm',
    title: 'DLWM: Diverse Latent World Models for Efficient Multimodal Reasoning',
    authors: [{ name: 'David Huang' }, { name: 'Lianlei Shan' }],
    venue: 'Preprint · 2026', accepted: false,
    description: 'Exploring multiple latent hypotheses with an RL controller that allocates reasoning compute.',
    image: dlwm,
    imageAlt: 'DLWM pipeline: multimodal inputs produce diverse latent hypotheses; an RL controller expands, stops, or merges their reasoning paths before aggregating an answer.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2606.15160' },
      { label: 'Project', href: 'https://dawae111.github.io/DLWM/' },
      { label: 'Code', href: 'https://github.com/Dawae111/DLWM' },
    ],
  },
  {
    id: 'moviedrive',
    title: 'MoVieDrive: Urban Scene Synthesis with Multi-Modal Multi-View Video Diffusion Transformer',
    authors: [{ name: 'Guile Wu' }, { name: 'David Huang' }, { name: 'Dongfeng Bai' }, { name: 'Bingbing Liu' }],
    venue: 'CVPR 2026 Findings', accepted: true,
    description: 'Generating consistent RGB, depth, and semantic videos across multiple driving views.',
    image: movie,
    imageAlt: 'MoVieDrive static result from appendix Figure 19: three driving views with RGB images, depth maps, and semantic maps arranged in rows.',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2508.14327' }],
  },
  {
    id: 'langsvr',
    title: 'Language and Geometry Grounded Sparse Voxel Representations for Holistic Scene Understanding',
    authors: [{ name: 'Guile Wu' }, { name: 'David Huang' }, { name: 'Bingbing Liu' }, { name: 'Dongfeng Bai' }],
    venue: 'Preprint · 2026', accepted: false,
    description: 'LangSVR unifies scene appearance, semantics, and geometry in sparse voxel representations.',
    image: lang,
    imageAlt: 'LangSVR combines language and geometry to reconstruct and understand a 3D scene.',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2602.15734' }],
  },
];
