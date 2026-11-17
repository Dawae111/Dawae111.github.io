import type { ImageMetadata } from 'astro';
import turbo from '../assets/turbovggt.png';
import dlwm from '../assets/dlwm.png';
import movie from '../assets/moviedrive.png';
import lang from '../assets/langsvr.png';

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
    description: 'Exploring diverse latent hypotheses while adaptively allocating reasoning compute.',
    image: dlwm,
    imageAlt: 'DLWM comparison of explicit reasoning, single latent trajectories, and diverse latent world hypotheses.',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2606.15160' }],
  },
  {
    id: 'moviedrive',
    title: 'MoVieDrive: Urban Scene Synthesis with Multi-Modal Multi-View Video Diffusion Transformer',
    authors: [{ name: 'Guile Wu' }, { name: 'David Huang' }, { name: 'Dongfeng Bai' }, { name: 'Bingbing Liu' }],
    venue: 'CVPR 2026 · Findings Track', accepted: true,
    description: 'Generating consistent RGB, depth, and semantic videos across multiple driving views.',
    image: movie,
    imageAlt: 'MoVieDrive generates RGB, depth, and semantic driving scenes from multiple cameras.',
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
