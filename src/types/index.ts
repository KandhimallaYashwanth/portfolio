export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}