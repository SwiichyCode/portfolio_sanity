export type SanityStack = {
  language: string;
  years: number;
  order: number;
  icon: any;
};

export type SanityProject = {
  title: string;
  description: string;
  stack: SanityStack[];
  images: any[];
  liveUrl: string;
  githubUrl: string;
  date: string;
};
