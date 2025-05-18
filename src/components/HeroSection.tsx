import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import * as THREE from 'three';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    camera.position.z = 3;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      
      renderer.render(scene, camera);
    };
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.remove(particles);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary-400 text-xl md:text-2xl font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
                Kandhimalla <br className="hidden md:block" /> Yashwanth
              </h1>
              <div className="text-2xl md:text-4xl font-bold mb-4 h-14">
                <span className="text-primary-400">
                  <TypeAnimation
                    sequence={[
                      'Frontend Developer',
                      1000,
                      'UI/UX Enthusiast',
                      1000,
                      'Problem Solver',
                      1000,
                      'BTech Student',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                Crafting seamless and engaging web experiences that solve real-world problems.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300 transform hover:scale-105 glow-btn"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border border-primary-500 text-primary-400 hover:bg-primary-500/10 rounded-full transition-colors duration-300 transform hover:scale-105 glow-btn"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center items-center mb-8 lg:mb-0 relative"
          >
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Kandhimalla Yashwanth"
                className="w-96 h-96 rounded-full object-cover border-4 border-primary-400 shadow-lg glow-img"
              />
              <span className="absolute bottom-4 right-4 bg-green-500 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full shadow-lg ring-2 ring-green-300 animate-pulse z-20">
                Available for work
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;