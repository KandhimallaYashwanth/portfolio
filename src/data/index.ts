import { Project, Service, Skill, Education, Experience } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Threadly',
    description: 'Platform for handloom artisans to showcase and sell their products directly to customers.',
    image: '/threadly.avif',
    liveUrl: 'https://threadly-market.netlify.app/',
    githubUrl: 'https://github.com/KandhimallaYashwanth/threadly-market',
    tags: ['React', 'Supabase'],
  },
  {
    id: 2,
    title: 'Farm Link',
    description: 'A modern marketplace connecting farmers directly with buyers, streamlining agricultural commerce.',
    image: '/farm.jpg',
    liveUrl: 'https://farmlinkk.netlify.app/',
    githubUrl: 'https://github.com/KandhimallaYashwanth/threadly-market',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'RuralConnect',
    description: 'Web application aimed at improving digital governance in rural areas.',
    image: '/rural.png',
    githubUrl: 'https://github.com/KandhimallaYashwanth/RuralConnect',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB'],
    liveUrl: '',
  },
  {
    id: 4,
    title: 'Bank Management System',
    description: 'Core banking simulation project with comprehensive account management features.',
    image: '/bank.png',
    githubUrl: 'https://github.com/KandhimallaYashwanth',
    tags: ['Java', 'Swings', 'SQL'],
    liveUrl: '',
  },
];

export const services: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive user interfaces with modern frameworks and libraries like React.',
    icon: 'code',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive, user-friendly interfaces with a focus on accessibility and usability.',
    icon: 'palette',
  },
  {
    title: 'Backend Integration',
    description: 'Connecting frontend applications to robust backend services and APIs.',
    icon: 'laptop-code',
  },
  {
    title: 'Clean Code',
    description: 'Writing maintainable, readable, and efficient code following best practices.',
    icon: 'gauge',
  },
];

export const skills: Skill[] = [
  { name: 'HTML', level: 95, color: 'primary' },
  { name: 'CSS', level: 90, color: 'primary' },
  { name: 'JavaScript', level: 85, color: 'primary' },
  { name: 'React', level: 40, color: 'secondary' },
  { name: 'Java', level: 70, color: 'accent' },
  { name: 'SQL', level: 80, color: 'accent' },
];

export const education: Education[] = [
  {
    institution: 'B.V. Raju Institute of Technology',
    degree: 'BTech in CSE (Data Science)',
    duration: '2024–2027',
    gpa: 'CGPA: 8.70',
  },
  {
    institution: 'St. Mary\'s Group Of Institutions',
    degree: 'Diploma in CSE',
    duration: '2021–2024',
    gpa: 'CGPA: 9.33',
  },
  {
    institution: 'NSSR High School',
    degree: 'School Education',
    duration: '2021',
    gpa: 'CGPA: 10',
  },
];

export const experience: Experience[] = [
  {
    company: 'New Vision Technologies',
    role: 'Industrial Training',
    duration: '6 months',
    description: [
      'Developed a Helmet Detection system using Computer Vision & ML',
      'Implemented real-time image processing and model optimization',
      'Collaborated in a team for deployment and performance tuning',
    ],
  },
];

export const socialLinks = {
  email: 'yashwanth04kandhimalla@gmail.com',
  phone: '9390412949',
  linkedin: 'https://www.linkedin.com/in/kandhimalla-yashwanth-99b064329/',
  github: 'https://github.com/KandhimallaYashwanth',
};