"use client"

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDown, FiArrowRight, FiPlus, FiExternalLink, FiChevronRight, FiStar } from 'react-icons/fi';

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

  const brandShowcase = [
    {
      name: "Falcon Tyre",
      description: "Premium quality tires for all terrains",
      image: "/new iamges/golden-2.jpg",
      features: ["All-Weather Performance", "Durability", "Fuel Efficiency"],
      stats: [
        { label: "Years of Excellence", value: "25+" },
        { label: "Global Presence", value: "50+" },
        { label: "Products", value: "1000+" }
      ]
    },
    {
      name: "Falcon Wheels",
      description: "Innovative wheel designs for modern vehicles",
      image: "/new iamges/golden-3.jpg",
      features: ["Lightweight Design", "Enhanced Performance", "Custom Options"],
      stats: [
        { label: "Innovation Rate", value: "95%" },
        { label: "Customer Satisfaction", value: "98%" },
        { label: "Market Share", value: "30%" }
      ]
    },
    {
      name: "Falcon Battery",
      description: "Advanced power solutions for all needs",
      image: "/new iamges/golden-4.jpg",
      features: ["Long Life", "Quick Charge", "Environment Friendly"],
      stats: [
        { label: "Tyre Types", value: "15+" },
        { label: "Production Capacity", value: "1M+" },
        { label: "Quality Tests", value: "50+" }
      ]
    }
  ];

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

                {/* Brand Showcase Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                  {brandShowcase.map((brand, index) => (
                    <motion.div
                      key={index}
                      className="relative group overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                      whileHover={{ y: -10 }}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={brand.image}
                          alt={brand.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">{brand.name}</h3>
                          <p className="text-white/90">{brand.description}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {brand.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {brand.stats.map((stat, statIndex) => (
                            <div
                              key={statIndex}
                              className="text-center"
                            >
                              <div className="text-2xl font-bold text-amber-600">{stat.value}</div>
                              <div className="text-xs text-gray-500">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-12">
                  Experience excellence through our diverse portfolio of premium automotive solutions
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Product Gallery Section */}
        <div className="relative py-24 z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500">
                Our Products
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                "/new iamges/golden-2.jpg",
                "/new iamges/golden-3.jpg",
                "/new iamges/golden-4.jpg",
                "/new iamges/golden-6.jpg",
                "/new iamges/5Y8A1218.JPG",
                "/new iamges/5Y8A1223.JPG"
              ].map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={image}
                    alt={`Product ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Premium Product {index + 1}</h3>
                      <p className="text-white/90 text-sm">Discover our latest innovation in automotive excellence</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 