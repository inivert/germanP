export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
} 