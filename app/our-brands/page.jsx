"use client"

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDown, FiArrowRight, FiPlus, FiExternalLink } from 'react-icons/fi';

const brands = [
  {
    id: 'falcon-tyre',
    name: 'FALCON TYRE',
    logo: '/brands/falcon-tyre.png',
    description: 'Premium quality tires engineered for ultimate performance and durability',
    bgImage: '/images/tyre-bg.jpg',
    categories: ['PCR Tires', 'OTR Tires', 'TBR Tires', 'LTR Tires']
  },
  {
    id: 'falcon-wheels',
    name: 'FALCON WHEELS',
    logo: '/brands/falcon-wheels.png',
    description: 'Precision-engineered wheels designed for style and performance',
    bgImage: '/images/wheels-bg.jpg',
    categories: ['PCR Wheels', 'TBR Wheels']
  },
  {
    id: 'falcon-battery',
    name: 'FALCON BATTERY',
    logo: '/brands/falcon-battery.png',
    description: 'High-performance batteries built for reliability and longevity',
    bgImage: '/images/battery-bg.jpg',
    categories: ['Bike Batteries', 'UPS Batteries']
  }
];

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
      <div className="relative min-h-screen bg-[#fafafa] overflow-hidden">
        {/* Decorative Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5" />
          
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-8">
                  Discover Our Legacy
                </span>
                <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500">
                  Our Brands
                </h1>
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
                <FiArrowDown className="w-6 h-6 text-yellow-600" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="relative py-32 bg-gradient-to-b from-transparent via-white to-transparent">
          <div className="container mx-auto px-4">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-32 last:mb-0"
              >
                <div className="relative">
                  {/* Brand Card */}
                  <motion.div
                    className="relative rounded-[2rem] overflow-hidden bg-white/80 backdrop-blur-lg border border-white/20 shadow-2xl"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent" />
                    
                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-12">
                      {/* Brand Info */}
                      <div className="lg:col-span-5 space-y-8">
                        <motion.div
                          className="relative h-24"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Image
                            src={brand.logo}
                            alt={brand.name}
                            fill
                            className="object-contain object-left"
                          />
                        </motion.div>
                        
                        <div>
                          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500">
                            {brand.name}
                          </h2>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {brand.description}
                          </p>
                        </div>

                        <motion.button
                          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Explore Products
                          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>

                      {/* Categories Grid */}
                      <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {brand.categories.map((category, idx) => (
                            <motion.div
                              key={idx}
                              className="group relative"
                              onHoverStart={() => setHoveredCategory(category)}
                              onHoverEnd={() => setHoveredCategory(null)}
                            >
                              <motion.div
                                className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="p-6">
                                  <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                                      {category}
                                    </h3>
                                    <span className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center">
                                      <FiExternalLink className="w-4 h-4 text-yellow-600 group-hover:rotate-45 transition-transform" />
                                    </span>
                                  </div>
                                  
                                  <div className="h-1 w-full bg-gradient-to-r from-yellow-500 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </div>
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </Layout>
  );
} 