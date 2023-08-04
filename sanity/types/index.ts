export type SanityStack = {
  language: string;
  years: string;
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
