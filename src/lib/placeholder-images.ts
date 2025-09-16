
export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const placeholderImages: ImagePlaceholder[] = [
  {
    id: 'vizagent',
    description: 'A screenshot of the VizAgent data analytics dashboard.',
    imageUrl: 'https://picsum.photos/seed/vizagent/600/400',
    imageHint: 'data analytics dashboard'
  },
  {
    id: 'todo-summary',
    description: 'A screenshot of the Todo Summary Agent app interface.',
    imageUrl: 'https://picsum.photos/seed/todosummary/600/400',
    imageHint: 'productivity app interface'
  },
  {
    id: 'eduelite',
    description: 'A screenshot of the EduElite education platform.',
    imageUrl: 'https://picsum.photos/seed/eduelite/600/400',
    imageHint: 'education platform'
  }
];
