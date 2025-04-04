"use client"

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDown, FiArrowRight, FiPlus, FiExternalLink } from 'react-icons/fi';



export default function BrandsPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { scrollY } = useScroll();
  const y = useSpring(useTransform(scrollY, [0, 300], [0, -50]), { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Background Pattern */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#f0f0f0_2px,transparent_0)] bg-[size:40px_40px]" />
        </div>

        {/* Floating Elements */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,200,0,0.03) 0%, rgba(255,140,0,0.02) 100%)',
              top: '10%',
              left: '20%',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,140,0,0.03) 0%, rgba(255,100,0,0.02) 100%)',
              bottom: '10%',
              right: '20%',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200/20 text-amber-700 text-sm font-medium mb-8"
                >
                  Discover Our Legacy
                </motion.div>
                <h1 className="text-7xl md:text-9xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500">
                  Our Brands
                </h1>

                {/* Brand Logos Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col items-center justify-center mb-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-5xl mx-auto">
                    {[
                      { src: '/brands/falcon-tyre.png', alt: 'Falcon Tyre' },
                      { src: '/brands/falcon-wheels.png', alt: 'Falcon Wheels' },
                      { src: '/brands/falcon-battery.png', alt: 'Falcon Battery' }
                    ].map((logo, index) => (
                      <motion.div
                        key={index}
                        className="relative h-32 w-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                          priority
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Experience excellence through our diverse portfolio of premium automotive solutions
                </p>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                style={{ opacity }}
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <FiArrowDown className="w-6 h-6 text-amber-500" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Screenshot Image */}
        <div className="relative w-full max-w-7xl mx-auto px-4 mb-32">
          <Image
            src="/new/Screenshot 2025-04-04 222331.png"
            alt="Falcon Brands"
            width={1920}
            height={1080}
         
            priority
          />
        </div>
        
      </div>
    </Layout>
  );
} 