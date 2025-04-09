"use client"

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDown, FiArrowRight, FiPlus, FiExternalLink, FiChevronRight, FiStar, FiAward, FiShield, FiTrendingUp } from 'react-icons/fi';

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

  const storyContent = [
    {
      title: "Wings of Innovation: The Falcon Legacy",
      content: "In the vast, ever-evolving landscape of the Middle East and North Africa, where the scorching sun meets endless highways and the urban sprawls transition into vast deserts, a brand soared high, leaving a trail of innovation and expertise behind. This is the story of Falcon, a beacon of superior quality and specialized engineering, crafted meticulously to cater to the distinct needs of its domain.",
      image: "/new iamges/golden-2.jpg",
      icon: <FiAward className="w-8 h-8 text-amber-500" />,
      stats: [
        { label: "Years of Excellence", value: "25+", icon: <FiStar /> },
        { label: "Global Presence", value: "50+", icon: <FiShield /> },
        { label: "Products", value: "1000+", icon: <FiTrendingUp /> }
      ]
    },
    {
      title: "The Spirit of the Falcon",
      content: "Founded on the ideals of precision and resilience, Falcon was named in homage to the national bird of the UAE. The falcon, with its sharp vision, swiftness, and majestic flight, symbolized what the brand aspired to be: powerful, agile, and ahead of its competitors.",
      image: "/new iamges/golden-3.jpg",
      icon: <FiShield className="w-8 h-8 text-amber-500" />,
      stats: [
        { label: "Innovation Rate", value: "95%", icon: <FiTrendingUp /> },
        { label: "Customer Satisfaction", value: "98%", icon: <FiStar /> },
        { label: "Market Share", value: "30%", icon: <FiShield /> }
      ]
    },
    {
      title: "The Tyre Trail: Precision and Perception",
      content: "Falcon's journey began with a singular goal: to design and manufacture tyres that could withstand the diverse terrains and climate of the region. The company ventured into crafting PCR (Passenger Car Radial), TBR (Truck and Bus Radial), and LTR (Light Truck Radial) tyres. Each variant was a masterpiece of advanced technology and understanding of the regional demands.",
      image: "/new iamges/golden-4.jpg",
      icon: <FiTrendingUp className="w-8 h-8 text-amber-500" />,
      stats: [
        { label: "Tyre Types", value: "15+", icon: <FiStar /> },
        { label: "Production Capacity", value: "1M+", icon: <FiTrendingUp /> },
        { label: "Quality Tests", value: "50+", icon: <FiShield /> }
      ]
    }
  ];

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Enhanced Background Pattern */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#f0f0f0_2px,transparent_0)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,200,0,0.05)_50%,transparent_75%)] bg-[size:20px_20px]" />
        </div>

        {/* Enhanced Floating Elements */}
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

        {/* Enhanced Hero Section */}
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
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200/20 text-amber-700 text-sm font-medium mb-8 backdrop-blur-sm"
                >
                  Discover Our Legacy
                </motion.div>
                <motion.h1 
                  className="text-7xl md:text-9xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Our Brands
                </motion.h1>

                {/* Enhanced Brand Logos Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col items-center justify-center mb-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-5xl mx-auto">
                    {[
                      { src: '/new iamges/golden-2.jpg', alt: 'Falcon Tyre', title: 'Falcon Tyre', description: 'Premium Quality Tires' },
                      { src: '/new iamges/golden-3.jpg', alt: 'Falcon Wheels', title: 'Falcon Wheels', description: 'Innovative Designs' },
                      { src: '/new iamges/golden-4.jpg', alt: 'Falcon Battery', title: 'Falcon Battery', description: 'Advanced Power Solutions' }
                    ].map((logo, index) => (
                      <motion.div
                        key={index}
                        className="relative h-64 w-full group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-2xl" />
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                          priority
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{logo.title}</h3>
                          <p className="text-white/90">{logo.description}</p>
                        </div>
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl" />
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-full bg-amber-500 text-white font-medium flex items-center gap-2 shadow-lg shadow-amber-500/30"
                          >
                            Explore <FiChevronRight />
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.p 
                  className="text-xl text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Experience excellence through our diverse portfolio of premium automotive solutions
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Story Section */}
        <div className="relative py-24 z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500">
                Our Legacy
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8" />
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-20">
              {storyContent.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 -translate-x-6 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="relative h-64 rounded-xl overflow-hidden group">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div>
                        <div className="grid grid-cols-3 gap-6 mb-8">
                          {story.stats.map((stat, statIndex) => (
                            <motion.div
                              key={statIndex}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 + statIndex * 0.1 }}
                              className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl text-center group hover:shadow-lg transition-all duration-300"
                            >
                              <div className="text-amber-500 mb-2">{stat.icon}</div>
                              <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
                              <div className="text-sm text-gray-600">{stat.label}</div>
                            </motion.div>
                          ))}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                          {story.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {story.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Enhanced Legacy Statement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mt-32"
              >
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-12 backdrop-blur-sm border border-amber-200/20 shadow-xl">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                    Flight of the Falcon: A Unified Legacy
                  </h3>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Today, Falcon stands not just as a brand but as a legacy, embodying the United Arab Emirates' values — blending tradition with cutting-edge technology. Like the falcon that inspired its name, the brand continues to glide effortlessly across the landscape, a symbol of what's possible when vision meets expertise.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed italic text-center">
                      Thus, Falcon's story continues to unfurl, crafting pathways, energizing engines, and connecting worlds, one revolutionary product at a time.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Product Gallery Section */}
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
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
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
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-4 py-2 rounded-full bg-amber-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-amber-500/30"
                      >
                        Learn More <FiChevronRight />
                      </motion.button>
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