"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import Layout from '../components/Layout';
import { FiAward, FiUsers, FiTarget, FiTruck, FiMapPin, FiClock, FiCheck, FiArrowRight, FiStar, FiShield, FiTrendingUp, FiPackage, FiDollarSign, FiHeadphones, FiTruck as FiLogistics, FiBookOpen, FiCheckCircle, FiChevronDown, FiChevronUp, FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function AboutUs() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const timelineData = [
    { year: '1974', title: 'Taleb Group Founded', description: 'The Taleb Group established with successful ventures in various industries' },
    { year: '2006', title: 'Golden Extreme Journey Begins', description: 'Specializing in high-quality tires to meet diverse customer needs' },
    { year: '2014', title: 'Operations Expansion', description: 'Expanded operations reinforcing commitment to excellence and customer satisfaction' },
    { year: '2023', title: 'Industry Leadership', description: 'Leading the market with over 150,000 sq ft of warehouse space and 120+ sales points' }
  ];

  const features = [
    {
      icon: <FiPackage className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Vast Inventory",
      description: "Extensive selection of tires for passenger cars, trucks, agricultural machinery, and industrial equipment"
    },
    {
      icon: <FiDollarSign className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Competitive Pricing",
      description: "Competitive wholesale pricing with bulk purchase discounts and flexible pricing models"
    },
    {
      icon: <FiUsers className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Dedicated Support",
      description: "Experienced account managers committed to understanding your business needs"
    },
    {
      icon: <FiLogistics className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Efficient Logistics",
      description: "Robust supply chain and dependable logistics for timely delivery"
    },
    {
      icon: <FiBookOpen className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Industry Expertise",
      description: "Exclusive access to industry insights and professional training seminars"
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Quality Assurance",
      description: "Premium tire solutions backed by expert technical support"
    }
  ];

  const commitments = [
    {
      icon: <FiDollarSign className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Flexible Payment Solutions",
      description: "Business-friendly payment options that align with your financial plans"
    },
    {
      icon: <FiStar className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Exclusive Offers for Partners",
      description: "Exclusive deals and previews of new product lines available only to our wholesale partners"
    },
    {
      icon: <FiHeadphones className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Post-Purchase Support",
      description: "Dedicated support team always ready to assist with any queries or issues"
    }
  ];

  const stats = [
    { value: "150,000+", label: "Sq Ft Warehouse", icon: <FiPackage className="w-6 h-6" /> },
    { value: "120+", label: "Sales Points", icon: <FiMapPin className="w-6 h-6" /> },
    { value: "1974", label: "Established", icon: <FiStar className="w-6 h-6" /> },
    { value: "100%", label: "Customer Satisfaction", icon: <FiCheckCircle className="w-6 h-6" /> }
  ];

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
          className="relative h-[60vh] md:h-[80vh] overflow-hidden"
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
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
          </motion.div>
          <div className="relative h-full flex items-center justify-center text-center px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl w-full"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6"
              >
                Welcome to <span className="text-amber-500 relative">
                  Golden Extreme
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  />
                </span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-300 px-4 md:px-0"
              >
                A distinguished division of the Taleb Group, shaping the future of the tire industry
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 md:mt-12"
              >
                <a 
                  href="#about-section" 
                  className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-xl font-medium shadow-lg hover:bg-amber-600 transition-all duration-300 group"
                >
                  Discover Our Story 
                  <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiChevronDown className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <div className="relative z-10 -mt-16 md:-mt-24 mb-12 md:mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-2 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto hide-scrollbar">
              {['about', 'mission', 'features', 'showroom'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm md:text-base font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                    activeTab === tab 
                      ? 'border-amber-500 text-amber-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about-section" className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Our <span className="text-amber-600 relative">
                  Story
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-700"
              >
                <p className="text-sm md:text-base leading-relaxed">
                  Welcome to Golden Extreme Auto Spare Parts, a distinguished division of the Taleb Group, established with a vision to provide top-tier auto spare parts across the Middle East and Africa. The Taleb Group, founded in 1974, has built a reputable legacy through successful ventures in various industries, and we are proud to be part of this esteemed lineage.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  In 2006, we embarked on a new journey, specializing in high-quality tires, aimed at meeting the diverse needs of our customers. Recognizing the growing demand and the ever-evolving landscape of the automotive industry, we expanded our operations in 2014, reinforcing our commitment to excellence and customer satisfaction.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  At Golden Extreme, we are more than just a tire distributor—we are shaping the future of the tire industry in the UAE and beyond. With over 150,000 sq ft of warehouse space and a robust network of 120+ sales points, we ensure that our customers across the region have access to premium tire solutions. Our dedicated team of experienced salespeople and an in-house engineer for claims handling ensures the highest level of service and technical support.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  We take pride in our premium tire solutions designed for the demanding needs of fleets, tire shops, and dealers. Built on the enduring values of our family-owned enterprise, Golden Extreme continues to follow a path of innovation and service, maintaining a reputation for reliability, performance, and exceptional customer care.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl group">
                  <Image
                    src="/new/DSC00923.jpg"
                    alt="Premium Tires Collection"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Premium Tire Solutions</h3>
                    <p className="text-sm md:text-base">Designed for the demanding needs of fleets, tire shops, and dealers</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">Our Journey</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200" />
                <div className="space-y-12">
                  {timelineData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                        <h4 className="text-lg md:text-xl font-bold text-amber-600 mb-1">{item.title}</h4>
                        <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                      </div>
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full shadow-lg">
                        <span className="text-white font-bold">{item.year}</span>
                      </div>
                      <div className="w-1/2"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Our <span className="text-amber-600 relative">
                  Mission
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <FiTarget className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                  To meet today's needs while anticipating the challenges of tomorrow. With a foundation of trust, customer focus, and industry expertise, Golden Extreme is committed to leading the market and creating long-lasting partnerships. We are the future of this market—and we invite you to join us on this journey.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <FiCheck className="w-5 h-5 text-amber-500 mr-2" />
                    <span className="text-sm md:text-base text-gray-700">Trust</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheck className="w-5 h-5 text-amber-500 mr-2" />
                    <span className="text-sm md:text-base text-gray-700">Customer Focus</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheck className="w-5 h-5 text-amber-500 mr-2" />
                    <span className="text-sm md:text-base text-gray-700">Industry Expertise</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Our Commitment to Your Business</h3>
                <p className="text-sm md:text-base text-gray-700 mb-8">
                  Our goal is to partner with you for long-term growth and success. At our showroom, you'll find:
                </p>
                <div className="space-y-6">
                  {commitments.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start group"
                    >
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-200 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors duration-300">{item.title}</h4>
                        <p className="text-sm md:text-base text-gray-700">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Why Choose <span className="text-amber-600 relative">
                  Our Wholesale Showroom
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4 group-hover:text-amber-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Showroom Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Our <span className="text-amber-600 relative">
                  Showroom
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Come and explore our showroom!</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Explore a world of Tire solutions designed for your business. Whether you are looking to expand your product range or seeking reliable suppliers, our showroom is your go-to destination.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FiMapPin className="w-6 h-6 text-amber-500 mr-3" />
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">Location</h4>
                      <p className="text-sm md:text-base text-gray-700">DUBAI DEIRA</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="w-6 h-6 text-amber-500 mr-3" />
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">Opening Hours</h4>
                      <p className="text-sm md:text-base text-gray-700">EVERYDAY, 9 AM - 7 PM</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700">
                  Partner with us for quality, reliability, and exceptional service. Visit us today and experience the unparalleled benefits of our Tire wholesale showroom. We look forward to building a productive and prosperous partnership with you.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-xl font-medium shadow-lg hover:bg-amber-600 transition-all duration-300 group"
                >
                  Contact Us <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl group"
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/new/ADM_4501.JPG"
                >
                  <source src="/new/WhatsApp Video 2025-04-08 at 16.58.23_653a0816.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center">
                  <div className="text-white">
                    <h3 className="text-lg md:text-xl font-bold">Golden Extreme Showroom</h3>
                    <p className="text-sm md:text-base text-gray-300">Experience our premium tire collection</p>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={toggleVideoPlayback}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                    >
                      {isVideoPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5" />}
                    </button>
                    <button 
                      onClick={toggleVideoMute}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                    >
                      {isVideoMuted ? <FiVolumeX className="w-5 h-5" /> : <FiVolume2 className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Explore Our <span className="text-amber-600">Showroom</span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
                  className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl group"
                >
                  <Image
                    src={src}
                    alt="Showroom"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-white">Showroom View {index + 1}</h3>
                      <p className="text-sm md:text-base text-gray-300">Explore our premium tire collection</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Visit Our <span className="text-amber-600 relative">
                  Showroom
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl max-w-2xl mx-auto border border-gray-100"
              >
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center justify-center space-x-4">
                    <FiMapPin className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                    <p className="text-base md:text-xl text-gray-700">
                      Location: DUBAI DEIRA
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <FiClock className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                    <p className="text-base md:text-xl text-gray-700">
                      Opening Hours: EVERYDAY, 9 AM - 7 PM
                    </p>
                  </div>
                </div>
                <p className="mt-6 md:mt-8 text-sm md:text-base text-gray-600">
                  Partner with us for quality, reliability, and exceptional service. Visit us today and experience the unparalleled benefits of our Tire wholesale showroom.
                </p>
                <div className="mt-8 flex justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-xl font-medium shadow-lg hover:bg-amber-600 transition-all duration-300 group"
                  >
                    Get in Touch <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-amber-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
            >
              <FiChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}