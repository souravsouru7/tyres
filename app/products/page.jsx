"use client"

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FiArrowDown } from 'react-icons/fi';

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get('category') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryClick = (category) => {
    const categoryValue = category.toLowerCase();
    setActiveCategory(categoryValue);
    router.push(`/products?category=${categoryValue}`, { scroll: false });
  };

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
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

        {/* Hero Image Section */}
        <motion.div 
          className="relative mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-600/20 mix-blend-multiply z-10 rounded-3xl mx-auto max-w-7xl" />
            <img 
              src="https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Tire workshop" 
              className="w-full h-[600px] object-cover rounded-3xl mx-auto max-w-7xl shadow-2xl brightness-[0.85]"
              style={{ objectPosition: '50% 30%' }}
            />
            
            {/* 3D Tire Element */}
            <motion.div 
              className="absolute bottom-[-80px] right-[10%] z-20 hidden md:block"
              initial={{ opacity: 0, y: 100, rotate: -20 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
            >
              <img 
                src="https://pngimg.com/d/car_wheel_PNG23304.png" 
                alt="3D Tire" 
                className="h-[300px] w-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-16 rounded-3xl mx-auto max-w-7xl z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xl"
            >
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <motion.h1 
                  className="text-6xl md:text-8xl font-bold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">
                    Golden Extreme
                  </span>
                </motion.h1>
                <motion.p 
                  className="text-2xl md:text-3xl max-w-3xl text-white/90"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Premium Automotive Solutions for the Ultimate Performance
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-8"
                >
                  <Link href="#products" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg inline-flex items-center group">
                    Explore Products
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
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
              <FiArrowDown className="w-8 h-8 text-white drop-shadow-lg" />
            </motion.div>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="relative z-20 container mx-auto px-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-amber-100/50">
            <div className="flex justify-center items-center space-x-6 md:space-x-12">
              {['TYRES', 'WHEELS', 'BATTERIES'].map((category) => (
                <motion.div
                  key={category}
                  className="cursor-pointer"
                  onClick={() => handleCategoryClick(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: category === 'TYRES' ? 0.1 : category === 'WHEELS' ? 0.2 : 0.3 }}
                >
                  <div className={`rounded-xl px-8 py-5 w-40 text-center font-bold shadow-lg transition-all duration-300 ${
                    activeCategory === category.toLowerCase() 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
                      : 'bg-white text-gray-800 hover:shadow-xl'
                  }`}>
                    {category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Company Description */}
        <motion.div 
          className="container mx-auto px-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl p-10 shadow-xl max-w-5xl mx-auto border border-amber-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full opacity-20 blur-xl"></div>
                <img 
                  src="/logo.png" 
                  alt="Golden Extreme Logo" 
                  className="w-full h-auto relative z-10"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200x200?text=Golden+Extreme';
                  }}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">About Golden Extreme</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Golden Extreme Trading offers a wide range of high-quality automotive products, including premium
                  tyres, durable wheels, and reliable batteries. Our tires are designed for optimal performance, safety,
                  and efficiency, suitable for various vehicle types and driving conditions. We also provide robust
                  wheels that enhance both the look and functionality of your vehicle. Additionally, our long-lasting
                  batteries deliver consistent power and reliability. Whether you're looking for better road performance
                  or dependable power solutions, Golden Extreme Trading has the products you need to keep your
                  vehicle running smoothly.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Falcon Batteries Section */}
        <motion.div 
          className="py-24 px-4 mb-20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-amber-50 to-amber-50/50 z-0" />
          
          {/* Decorative Circles */}
          <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"></div>
          
          <div className="container mx-auto relative z-10">
            <motion.div
              className="absolute right-0 top-0 md:w-1/3 w-full h-full opacity-20 md:opacity-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                src="/new/DSC00923.jpg" 
                alt="Battery 3D" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            <div className="md:max-w-2/3 relative">
              <motion.h2 
                className="text-5xl md:text-7xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                FALCON BATTERIES
              </motion.h2>
              <div className="max-w-4xl">
                <motion.p 
                  className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Falcon Batteries – Powering Bikes and UPS Systems with Reliability Golden Extreme 
                  Trading offers Falcon Batteries, known for their superior performance and reliability. Our 
                  range includes high-quality bike batteries that deliver consistent starting power and long-lasting 
                  performance, ensuring a smooth ride in all conditions. We also provide Falcon UPS 
                  batteries, designed to offer uninterrupted power supply for critical systems, providing 
                  dependable backup during outages. Whether for bikes or UPS systems, Falcon Batteries are 
                  built to meet your power needs with durability and efficiency.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 md:space-x-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href="/products?category=batteries&type=bike"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-xl text-white text-xl font-bold flex items-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <span className="text-blue-200 mr-3 text-2xl group-hover:mr-4 transition-all duration-300">•</span>
                    BIKE BATTERIES
                  </Link>
                  <Link 
                    href="/products?category=batteries&type=ups"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-xl text-white text-xl font-bold flex items-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <span className="text-blue-200 mr-3 text-2xl group-hover:mr-4 transition-all duration-300">•</span>
                    UPS BATTERIES
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div id="products" className="container mx-auto px-4 py-16 mb-24 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500">
              BROWSE OUR PRODUCTS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover high-quality automotive solutions tailored to your vehicle's needs
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProductGrid 
              activeCategory={activeCategory}
              searchQuery={searchQuery}
            />
          </motion.div>
        </div>

        {/* Wheels Section */}
        <motion.div 
          className="py-24 px-4 mb-24 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0" />
          
          {/* 3D Wheel Element */}
          <motion.div
            className="absolute -right-20 top-0 w-full md:w-1/2 h-full z-10"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent blur-3xl"></div>
              <img 
                src="https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg" 
                alt="Premium Wheel" 
                className="w-full h-full object-cover rounded-l-3xl"
              />
            </div>
          </motion.div>
          
          <div className="container mx-auto relative z-20">
            <div className="md:max-w-1/2 md:pr-0 lg:pr-96">
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-700 rounded-full text-sm font-medium mb-4">ADVANCED ENGINEERING</span>
                <h2 
                  className="text-5xl md:text-7xl font-bold text-left text-gray-800"
                >
                  PREMIUM <span className="text-amber-600">WHEELS</span>
                </h2>
              </motion.div>
              
              <motion.div 
                className="max-w-lg bg-white p-10 rounded-3xl shadow-xl border border-amber-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    At Golden Extreme Trading, we offer a curated collection of premium wheels 
                    engineered for exceptional performance, crafted from aerospace-grade alloys 
                    that combine lightweight durability with stunning design aesthetics.
                  </p>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-amber-700 font-bold">Superior Performance</h3>
                        <p className="text-gray-600 text-sm">Enhanced handling and vehicle response</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-amber-700 font-bold">Quality Craftsmanship</h3>
                        <p className="text-gray-600 text-sm">Precision engineered with premium materials</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-amber-700 font-bold">Designer Aesthetics</h3>
                        <p className="text-gray-600 text-sm">Elevate your vehicle's style and presence</p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href="/products?category=wheels"
                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg inline-flex items-center group"
                    >
                      Explore Wheels Collection
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Added Wheel Showcase */}
            <motion.div 
              className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                whileHover={{ translateY: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg" 
                    alt="Luxury Wheel" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">Luxury Series</h3>
                  <p className="text-gray-600 mt-2">Premium alloy wheels designed for luxury vehicles, offering elegant styling with superior performance.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                whileHover={{ translateY: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/9349220/pexels-photo-9349220.jpeg" 
                    alt="Performance Wheel" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">Sport Series</h3>
                  <p className="text-gray-600 mt-2">Racing-inspired wheels built for high-performance vehicles, combining lightweight design with maximum durability.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                whileHover={{ translateY: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/21694/pexels-photo.jpg" 
                    alt="SUV Wheel" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">Off-Road Series</h3>
                  <p className="text-gray-600 mt-2">Rugged wheels engineered for SUVs and trucks, built to withstand tough terrain while enhancing vehicle appearance.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Branded Partners Section */}
      

        {/* Premium Partners Section */}
        <motion.div 
          className="py-24 px-4 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0" />
          
          <div className="container mx-auto relative z-10">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              PREMIUM PARTNERSHIPS
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Tier 1 Card */}
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-xl border border-gray-800 h-full"
                whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
              >
                <div className="h-16 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-white">TIER 1</h3>
                  <p className="text-gray-300 mb-6">
                    We partner with industry leaders known for their superior quality and innovation in the automotive world.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="font-semibold text-amber-400">Michelin</span>
                      <span className="mx-2">·</span>
                      <span>Premium innovation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="font-semibold text-amber-400">Bridgestone</span>
                      <span className="mx-2">·</span>
                      <span>Advanced technology</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="font-semibold text-amber-400">Continental</span>
                      <span className="mx-2">·</span>
                      <span>Safety excellence</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Tier 2 Card */}
              <motion.div 
                className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-full"
                whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
              >
                <div className="h-16 bg-gradient-to-r from-amber-400 to-yellow-500"></div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">TIER 2</h3>
                  <p className="text-gray-600 mb-6">
                    Quality-focused manufacturers that balance performance and value for diverse driving needs.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="font-semibold text-amber-600">Yokohama</span>
                      <span className="mx-2">·</span>
                      <span>Performance comfort</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="font-semibold text-amber-600">Hankook</span>
                      <span className="mx-2">·</span>
                      <span>Advanced durability</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="font-semibold text-amber-600">Falken</span>
                      <span className="mx-2">·</span>
                      <span>Performance grip</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Tier 3 Card */}
              <motion.div 
                className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl overflow-hidden shadow-xl border border-amber-200 h-full"
                whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
              >
                <div className="h-16 bg-gradient-to-r from-yellow-400 to-amber-300"></div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">TIER 3</h3>
                  <p className="text-gray-600 mb-6">
                    Reliable manufacturers offering quality products at accessible price points.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="font-semibold text-amber-600">Apollo</span>
                      <span className="mx-2">·</span>
                      <span>Reliable economy</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="font-semibold text-amber-600">Doublestar</span>
                      <span className="mx-2">·</span>
                      <span>Sustainable innovation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="font-semibold text-amber-600">Roadlone</span>
                      <span className="mx-2">·</span>
                      <span>Dependable performance</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/our-brands"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg inline-flex items-center group"
              >
                Explore All Brand Partnerships
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Premium Performance Banner */}
        <motion.div 
          className="relative py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" 
              alt="Performance Tyres" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            <motion.div 
              className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm p-10 rounded-3xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                UNCOMPROMISING <span className="text-amber-400">PERFORMANCE</span>
              </motion.h2>
              
              <motion.p 
                className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                At Golden Extreme, we recognize that every vehicle has unique requirements. Our extensive range of premium products is tailored for optimal performance and safety across all conditions. Our commitment to quality and service means you can trust us to provide the perfect solutions to meet the demands of your journey.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Link href="/products?category=tyres" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg">
                  Explore Tyres
                </Link>
                <Link href="/products?category=wheels" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300">
                  Discover Wheels
                </Link>
                <Link href="/products?category=batteries" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300">
                  View Batteries
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Add CSS for marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </Layout>
  );
}






