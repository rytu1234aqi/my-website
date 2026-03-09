export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  status: 'Completed' | 'In Progress';
  featured?: boolean;
  year?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern shopping experience built with Next.js and Stripe. Features include real-time inventory, secure checkout, and a responsive design.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    icon: '🛍️',
    status: 'Completed',
    featured: true,
    year: '2024',
    link: '/projects/ecommerce'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization for SaaS products. Provides actionable insights through interactive charts and custom reporting tools.',
    tags: ['React', 'D3.js', 'TypeScript'],
    icon: '📊',
    status: 'Completed',
    featured: true,
    link: '/projects/analytics'
  },
  {
    title: 'AI Content Gen',
    description: 'Generative AI tool for marketing copy. Utilizes advanced NLP models to create high-quality content in seconds.',
    tags: ['OpenAI', 'Python', 'FastAPI'],
    icon: '🤖',
    status: 'In Progress',
    featured: true,
    link: '/projects/ai-content'
  },
  {
    title: 'Unity Game Demo',
    description: 'An interactive game prototype with custom mechanics, physics-based gameplay, and polished visual effects. Built from the ground up in Unity.',
    tags: ['Unity', 'C#', 'Game Design'],
    icon: '🎮',
    status: 'In Progress',
    featured: false
  },
  {
    title: 'AI Dance Recognition',
    description: 'Real-time dance move recognition powered by machine learning. Uses pose estimation to analyze body movements and classify dance styles.',
    tags: ['Python', 'TensorFlow', 'MediaPipe'],
    icon: '💃',
    status: 'Completed',
    featured: false
  },
  {
    title: 'Computer Vision Project',
    description: 'Exploring advanced image processing techniques including object detection, image segmentation, and visual intelligence using deep learning approaches.',
    tags: ['Python', 'OpenCV', 'PyTorch'],
    icon: '👁️',
    status: 'Completed',
    featured: false
  }
];
