"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { FiAward, FiUsers, FiTarget, FiTruck, FiMapPin, FiClock } from 'react-icons/fi';

export default function AboutUs() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#f0f0f0_2px,transparent_0)] bg-[size:40px_40px]" />
        </div>

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-screen overflow-hidden"
        >
          <motion.div
            style={{ y }}
            className="absolute inset-0"
          >
            <Image
              src="/new/ADM_4501.JPG"
              alt="Golden Extreme Showroom"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
          </motion.div>
          <div className="relative h-full flex items-center justify-center text-center px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Welcome to <span className="text-amber-500">Golden Extreme</span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl text-gray-300"
              >
                A distinguished division of the Taleb Group, shaping the future of the tire industry
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Company History Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/new/DSC00923.jpg"
                alt="Premium Tires Collection"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="text-amber-600">Legacy</span>
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to Golden Extreme Auto Spare Parts, a distinguished division of the Taleb Group, established with a vision to provide top-tier auto spare parts across the Middle East and Africa. The Taleb Group, founded in 1974, has built a reputable legacy through successful ventures in various industries.
                </p>
                <p>
                  In 2006, we embarked on a new journey, specializing in high-quality tires, aimed at meeting the diverse needs of our customers. Recognizing the growing demand and the ever-evolving landscape of the automotive industry, we expanded our operations in 2014, reinforcing our commitment to excellence and customer satisfaction.
                </p>
                <p>
                  At Golden Extreme, we are more than just a tire distributor—we are shaping the future of the tire industry in the UAE and beyond. With over 150,000 sq ft of warehouse space and a robust network of 120+ sales points, we ensure that our customers across the region have access to premium tire solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Gallery Section */}
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-amber-600">Showroom</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                '/new/ADM_4501.JPG',
                '/new/ADM_4502.JPG',
                '/new/ADM_4508.JPG',
                '/new/ADM_4614.JPG',
                '/new/ADM_4616.JPG',
                '/new/ADM_4724.JPG'
              ].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="relative aspect-square rounded-3xl overflow-hidden shadow-xl group"
                >
                  <Image
                    src={src}
                    alt="Showroom"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white">Showroom View {index + 1}</h3>
                      <p className="text-gray-300">Explore our premium tire collection</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience Our <span className="text-amber-600">Showroom</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="/new/ADM_4501.JPG"
            >
              <source src="/new/WhatsApp Video 2025-04-08 at 16.58.23_653a0816.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-20">
              <h3 className="text-2xl font-bold text-white mb-2">Golden Extreme Tire Showroom</h3>
              <p className="text-gray-300">Your trusted partner for premium tire wholesale in Dubai</p>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-amber-600">Our Showroom</span>?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Vast Inventory",
                  description: "Extensive selection of tires for passenger cars, trucks, agricultural machinery, and industrial equipment.",
                  icon: "📦",
                  color: "from-blue-50 to-blue-100"
                },
                {
                  title: "Competitive Pricing",
                  description: "Competitive wholesale pricing with bulk purchase discounts and flexible pricing models.",
                  icon: "💰",
                  color: "from-green-50 to-green-100"
                },
                {
                  title: "Dedicated Support",
                  description: "Experienced account managers committed to understanding your business needs.",
                  icon: "👥",
                  color: "from-purple-50 to-purple-100"
                },
                {
                  title: "Efficient Logistics",
                  description: "Robust supply chain and dependable logistics for timely delivery.",
                  icon: "🚚",
                  color: "from-red-50 to-red-100"
                },
                {
                  title: "Industry Expertise",
                  description: "Exclusive access to industry insights and professional training seminars.",
                  icon: "📚",
                  color: "from-yellow-50 to-yellow-100"
                },
                {
                  title: "Quality Assurance",
                  description: "Premium tire solutions backed by expert technical support.",
                  icon: "✅",
                  color: "from-indigo-50 to-indigo-100"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${feature.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl mb-6 text-amber-600"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">
                    {feature.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-1 w-20 bg-amber-500 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Visit Our <span className="text-amber-600">Showroom</span>
            </h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto border border-gray-100"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-center space-x-4">
                  <FiMapPin className="w-8 h-8 text-amber-600" />
                  <p className="text-xl text-gray-700">
                    Location: DUBAI DEIRA
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <FiClock className="w-8 h-8 text-amber-600" />
                  <p className="text-xl text-gray-700">
                    Opening Hours: EVERYDAY, 9 AM - 7 PM
                  </p>
                </div>
              </div>
              <p className="mt-8 text-gray-600">
                Partner with us for quality, reliability, and exceptional service. Visit us today and experience the unparalleled benefits of our Tire wholesale showroom.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}