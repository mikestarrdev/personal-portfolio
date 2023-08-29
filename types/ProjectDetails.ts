import { Languages } from "./technologies";

export type MajorProjectDetails = {
  title: string;
  description: string;
  github: string | null;
  link: string;
  technologies: Languages[];
  thumbnail?: string;
  videoLink?: string;
  contributions?: string[];
};
