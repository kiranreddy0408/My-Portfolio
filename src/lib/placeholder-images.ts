
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
    imageUrl: '/vizagent.png',
    imageHint: 'data analytics dashboard'
  },
  {
    id: 'todo-summary',
    description: 'A screenshot of the Todo Summary Agent app interface.',
    imageUrl: '/todo-summary.png',
    imageHint: 'productivity app interface'
  },
  {
    id: 'eduelite',
    description: 'A screenshot of the EduElite education platform.',
    imageUrl: '/eduelite.png',
    imageHint: 'education platform'
  }
];
