import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, experience } from '../data';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start justify-between">
          {/* Left: About Text */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-white">About Me</h2>
            <div className="w-24 h-1 bg-primary-500 mb-8 rounded-full"></div>
            <h3 className="text-2xl font-bold mb-4 text-white">Get to know me</h3>
            <p className="text-lg text-gray-300 mb-4">
              I'm a frontend developer currently pursuing Computer Science (Data Science) at BVRIT. I'm passionate about turning ideas into seamless and engaging web experiences.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              What drives me is the ability to solve real-world problems through design, code, and creativity. I believe in building applications that not only look great but provide intuitive experiences that make a difference.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and continuously expanding my skills.
            </p>
          </div>
          {/* Right: Education Timeline */}
          <div className="flex-1 max-w-xl">
            <h3 className="text-3xl font-bold mb-8 text-white">Education</h3>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-1 h-full bg-primary-500 rounded-full"></div>
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-4 top-1 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-900"></div>
                  <h4 className="text-xl font-bold text-primary-400 mb-1">{edu.degree}</h4>
                  <div className="text-white font-semibold mb-1">{edu.institution}</div>
                  <div className="text-gray-300 text-sm mb-1">{edu.duration}</div>
                  <div className="text-gray-400 text-sm">{edu.gpa}</div>
                </motion.div>
              ))}
            </div>
            {/* Work Experience Section */}
            <h3 className="text-3xl font-bold mb-8 text-white mt-16">Work Experience</h3>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-1 h-full bg-accent-500 rounded-full"></div>
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-4 top-1 w-4 h-4 bg-accent-500 rounded-full border-4 border-gray-900"></div>
                  <h4 className="text-xl font-bold text-accent-400 mb-1">{exp.role}</h4>
                  <div className="text-white font-semibold mb-1">{exp.company}</div>
                  <div className="text-gray-300 text-sm mb-1">{exp.duration}</div>
                  <ul className="mt-2 text-gray-300 ml-4">
                    {exp.description.map((point, idx2) => (
                      <li key={idx2} className="list-disc list-outside mb-1">{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;