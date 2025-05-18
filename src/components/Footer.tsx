import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Mail, Linkedin, Github, Code, ArrowUp } from 'lucide-react';
import { socialLinks } from '../data';

const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show arrow if scrolled past 400px (adjust as needed for your layout)
      setShowArrow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 pt-12 pb-6 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-primary-400">Y</span>ashwanth
            </h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>

          <div className="flex space-x-6 mb-8">
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          <div className="w-full h-px bg-gray-800 mb-6"></div>

          <div className="text-center text-gray-500 text-sm">
            <p className="flex items-center justify-center">
              <span>© 2025 Kandhimalla Yashwanth. All rights reserved.</span>
            </p>
            <p className="mt-2 flex items-center justify-center">
              <span>Made with</span>
              <Heart size={14} className="mx-1 text-red-500" />
              <span>and</span>
              <Code size={14} className="ml-1 text-primary-400" />
            </p>
          </div>
        </motion.div>
      </div>
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp size={28} />
        </button>
      )}
    </footer>
  );
};

export default Footer;