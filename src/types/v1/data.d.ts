// one video

export type Video = {
  id: number;
  // lessonId: number;
  title: string;

  url: string;

  videoUrl: string;

  image?: string;

  content?: string;

  description: string;

  seoActive?: boolean;

  seoTitle?: string;

  seoDesc?: string;

  active?: boolean;

  createdAt?: Date;

  updatedAt?: Date;
};
