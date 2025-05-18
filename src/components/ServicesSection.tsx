import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Laptop, Gauge, Server, CheckCircle } from 'lucide-react';
import { services } from '../data';

const ServiceCard: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code size={40} className="text-primary-400" />;
      case 'palette':
        return <Palette size={40} className="text-secondary-400" />;
      case 'laptop-code':
        return <Server size={40} className="text-accent-400" />;
      case 'gauge':
        return <CheckCircle size={40} className="text-green-400" />;
      default:
        return <Code size={40} className="text-primary-400" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 glow-card scale-100 hover:scale-105 ring-2 ring-primary-500/30 hover:ring-4 hover:ring-primary-400/60"
      whileHover={{ scale: 1.07 }}
    >
      <div className="mb-4">{getIcon(service.icon)}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
      <p className="text-gray-300">{service.description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-primary-400">I Do</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I offer a range of services focused on creating exceptional digital experiences.
            Here's how I can help bring your ideas to life:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;