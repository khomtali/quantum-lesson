export type VisualType =
  | "classical-world"
  | "warning-signals"
  | "photoelectric"
  | "spectra"
  | "double-slit"
  | "home-vs-lab"
  | "quantum-framework"
  | "core-ideas"
  | "everyday-quantum";

export interface HomeDemo {
  title: string;
  materials: string[];
  shows: string;
  limits: string;
}

export interface LessonStep {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  keyPoint: string;
  visualType: VisualType;
  warningNote?: string;
  homeDemo?: HomeDemo;
}

export interface Lesson {
  id: string;
  route: string;
  title: string;
  subtitle: string;
  summary: string;
  steps: LessonStep[];
  takeaways?: string[];
  nextLesson?: {
    title: string;
    href: string;
  };
}

export interface GlossaryTerm {
  term: string;
  description: string;
  lessonRoute?: string;
}

export interface QuickQuestion {
  question: string;
  answer: string;
  lessonRoute?: string;
}
