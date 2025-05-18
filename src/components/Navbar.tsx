import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Services', href: '#services' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white">
            <span className="text-primary-400">Y</span>ashwanth
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`transition-all duration-300 relative ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary-400 font-semibold'
                    : 'text-gray-300 hover:text-primary-400'
                } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary-400 after:transform after:scale-x-0 after:transition-transform after:duration-300 ${
                  activeSection === link.href.substring(1) ? 'after:scale-x-100' : ''
                } hover:after:scale-x-100`}
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-900/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className={`text-lg transition-colors duration-300 py-2 ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary-400 font-semibold'
                      : 'text-gray-300 hover:text-primary-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar