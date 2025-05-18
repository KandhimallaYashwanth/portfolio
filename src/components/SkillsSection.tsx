import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase } from 'react-icons/fa';

const skillIcons: Record<string, JSX.Element> = {
  HTML: <FaHtml5 className="text-3xl text-orange-500" />,
  CSS: <FaCss3Alt className="text-3xl text-blue-500" />,
  JavaScript: <FaJs className="text-3xl text-yellow-400" />,
  React: <FaReact className="text-3xl text-cyan-400" />,
  Java: <FaJava className="text-3xl text-red-500" />,
  SQL: <FaDatabase className="text-3xl text-green-500" />,
};

const SkillCard: React.FC<{ skill: typeof skills[0]; delay: number }> = ({ skill, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const colorVariant = skill.color === 'primary' 
    ? 'bg-primary-500' 
    : skill.color === 'secondary' 
      ? 'bg-secondary-500' 
      : 'bg-accent-500';
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className={`rounded-xl shadow-lg hover:shadow-primary-500/30 transition-shadow duration-300 p-6 bg-gray-800/80 border border-primary-500/10 flex flex-col items-center gap-2 glow-card`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-2">{skillIcons[skill.name]}</div>
      <span className="text-gray-200 font-semibold text-lg">{skill.name}</span>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">My Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I've developed a diverse range of technical skills throughout my education and projects. Here's an overview of my technical proficiency:
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;