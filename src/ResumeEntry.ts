import { ReactNode } from "react";

interface Position {
  title: ReactNode;
  startDate?: string;
  endDate?: string;
}

export interface ResumeEntry {
  company: string;
  location: string;
  positions: Position[];
  bullets: ReactNode[];
  internship?: boolean;
}

export interface ResearchExperience extends ResumeEntry{
  pi: string;
}