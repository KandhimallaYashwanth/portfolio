import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data';

const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-gray-800/70 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-gray-800/90 glow-card max-w-xs mx-auto ring-0 hover:ring-4 hover:ring-primary-400/60"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-36 object-cover transition-transform duration-700 group-hover:scale-110 rounded-t-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-2">
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-primary-500/20 text-primary-300 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-2 line-clamp-2">{project.description}</p>
        <div className="flex gap-2 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-primary-500 hover:bg-primary-600 text-white rounded-full text-xs font-semibold transition-colors duration-300 glow-btn"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-gray-700 hover:bg-gray-900 text-white rounded-full text-xs font-semibold transition-colors duration-300 glow-btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Here are some of my latest projects showcasing my skills and experience.
            Each project reflects my commitment to creating clean, efficient, and user-friendly applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection