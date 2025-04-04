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

  const storyContent = [
    {
      title: "Wings of Innovation: The Falcon Legacy",
      content: "In the vast, ever-evolving landscape of the Middle East and North Africa, where the scorching sun meets endless highways and the urban sprawls transition into vast deserts, a brand soared high, leaving a trail of innovation and expertise behind. This is the story of Falcon, a beacon of superior quality and specialized engineering, crafted meticulously to cater to the distinct needs of its domain.",
    },
    {
      title: "The Spirit of the Falcon",
      content: "Founded on the ideals of precision and resilience, Falcon was named in homage to the national bird of the UAE. The falcon, with its sharp vision, swiftness, and majestic flight, symbolized what the brand aspired to be: powerful, agile, and ahead of its competitors.",
    },
    {
      title: "The Tyre Trail: Precision and Perception",
      content: "Falcon's journey began with a singular goal: to design and manufacture tyres that could withstand the diverse terrains and climate of the region. The company ventured into crafting PCR (Passenger Car Radial), TBR (Truck and Bus Radial), and LTR (Light Truck Radial) tyres. Each variant was a masterpiece of advanced technology and understanding of the regional demands.",
    },
    {
      title: "Wheels of Steel: A Revolution in Motion",
      content: "As roads interlinked distant lands and connected people, Falcon expanded its horizons to encompass specialized wheels, including both PCR and TBR. These wheels, crafted with the same precision and passion, became synonymous with strength and stability. Falcon wheels were not just components; they became the backbone of vehicles, offering the steadfastness needed in both urban environments and across desert voyages.",
    },
    {
      title: "Power Unleashed: The Battery Breakthrough",
      content: "Not content with conquering roads, Falcon took a groundbreaking leap into the energy sector, innovating UPS batteries and Bike Batteries. Here, Falcon's ingenuity shined yet again, offering unmatched energy solutions that powered everything from emergency backup systems in towering skyscrapers to motorbike adventures under the open sky.",
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

      {/* Story Section */}
      <div className="relative py-24 z-10">
        <div className="container mx-auto px-4">
          {/* Story Header */}
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

          {/* Story Content */}
          <div className="max-w-4xl mx-auto space-y-20">
            {storyContent.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute left-0 top-0 w-12 h-12 -translate-x-6 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    {story.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {story.content}
                  </p>
                </motion.div>
              </motion.div>
            ))}

            {/* Legacy Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mt-32"
            >
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-12 backdrop-blur-sm border border-amber-200/20">
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
    </Layout>
  );
} 