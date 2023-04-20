import { ReactNode } from "react";

export type MainProjectDetails = {
  title: string;
  description: string;
  github: string | null;
  link: string;
  technologies: string[];
  thumbnail?: string;
  videoLink?: string;
  contributions?: string[];
};
