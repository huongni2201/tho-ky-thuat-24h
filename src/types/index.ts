export interface ServiceItem {
  id: string;
  title: string;
  slug?: string;
  image: string;
  imageAlt: string;
  shortDesc: string;
  description: string;
  iconName: string;
  popularItems: string[];
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  district: string;
  image: string;
  description: string;
  completionTime: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface DistrictCoverage {
  name: string;
  subAreas: string[];
  popular: boolean;
}

export interface TrustPoint {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
