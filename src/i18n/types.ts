// ─── Shared translation types ────────────────────────────────────────────────

export interface UIStrings {
  navProfile: string;
  navSkills: string;
  navExperience: string;
  navEducation: string;
  navCertifications: string;
  downloadPdf: string;
  sectionProfile: string;
  sectionSkills: string;
  sectionExperience: string;
  sectionEducation: string;
  sectionCertifications: string;
  clientEngagements: string;
  gradeAverage: string;
}

export interface EngagementLocale {
  title: string;
  bullets: string[];
}

export interface ExperienceLocale {
  role: string;
  /** Must follow the same order as engagements[] in cv.ts */
  engagements?: EngagementLocale[];
  bullets?: string[];
}

export interface EducationLocale {
  subjects: string[];
}

export interface Locale {
  code: 'no' | 'en' | 'es';
  htmlLang: string;
  ui: UIStrings;
  heroTitle: string;
  heroSubtitle: string;
  /** Array of paragraphs */
  summary: string[];
  /** Same order as experiences[] in cv.ts */
  experiences: ExperienceLocale[];
  /** Same order as education[] in cv.ts */
  education: EducationLocale[];
  skillCategories: Array<{ name: string; skills: string[] }>;
}
