import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { socialLinks } from '../data';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      setFormStatus({ type: 'loading', message: 'Sending your message...' });
      
      // Replace with your EmailJS service ID, template ID, and Public Key
      const serviceId = 'service_n4iwwt7';
      const templateId = 'template_w1vhlwv';
      const publicKey = 'e9vEqQ0oArVcTrFiL';
      
      // When you have your EmailJS credentials, uncomment the following line
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      
      // For demo purposes, simulate successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setFormStatus({
        type: 'success',
        message: 'Your message has been sent! I\'ll get back to you soon.',
      });
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3000);
      
      // Reset the form
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setFormStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/80 rounded-xl shadow-lg hover:shadow-primary-500/30 transition-shadow duration-300 p-8 border border-primary-500/10"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaEnvelope className="w-6 h-6 text-primary-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <span className="text-gray-300">yashwanth04kandhimalla@gmail.com</span>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhoneAlt className="w-6 h-6 text-primary-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <span className="text-gray-300">+91 9390412949</span>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="w-6 h-6 text-primary-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <span className="text-gray-300">Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4 text-white">Connect With Me</h4>
              <div className="flex gap-8">
                <a href="https://www.linkedin.com/in/kandhimalla-yashwanth-99b064329/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-300 hover:text-primary-400 transition-colors">
                  <FaLinkedin className="text-2xl" />
                  <span className="text-xs mt-1">LinkedIn</span>
                </a>
                <a href="https://github.com/KandhimallaYashwanth" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-300 hover:text-primary-400 transition-colors">
                  <FaGithub className="text-2xl" />
                  <span className="text-xs mt-1">GitHub</span>
                </a>
                <a href="mailto:yashwanth04kandhimalla@gmail.com" className="flex flex-col items-center text-gray-300 hover:text-primary-400 transition-colors">
                  <FaEnvelope className="text-2xl" />
                  <span className="text-xs mt-1">Email</span>
                </a>
                <a href="tel:+919390412949" className="flex flex-col items-center text-gray-300 hover:text-primary-400 transition-colors">
                  <FaPhoneAlt className="text-2xl" />
                  <span className="text-xs mt-1">Phone</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/80 rounded-xl shadow-lg hover:shadow-primary-500/30 transition-shadow duration-300 p-8 border border-primary-500/10"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white resize-none"
                ></textarea>
              </div>
              <input type="hidden" name="date" value={new Date().toLocaleString()} />
              {showThankYou ? (
                <div className="px-6 py-3 bg-green-500 text-white rounded-lg text-center font-semibold">Thank you!</div>
              ) : (
                <button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
                >
                  {formStatus.type === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              )}
              
              {formStatus.type !== 'idle' && (
                <div
                  className={`p-3 rounded-lg ${
                    formStatus.type === 'success'
                      ? 'bg-green-500/20 text-green-400'
                      : formStatus.type === 'error'
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-primary-500/20 text-primary-400'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;