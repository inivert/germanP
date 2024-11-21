'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import Typed from 'typed.js';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Adjusted scroll values for smoother transitions
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  
  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        'Quality Wood Framing',
        'Custom Home Building',
        'Expert Renovations',
        'Professional Results'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      smartBackspace: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        scale
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <FaHome className="mx-auto text-7xl text-blue-400 mb-8 drop-shadow-lg" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
        >
          OCHOA HOME IMPROVEMENTS
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-2xl md:text-4xl text-blue-200 font-light mb-12 drop-shadow-md"
        >
          <span ref={typedRef}></span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link href="/contact" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold 
                       transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
          </Link>
          <Link href="/projects" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg text-lg 
                       font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Projects
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
