"use client"

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FiArrowDown } from 'react-icons/fi';
import BrandSlider from '../components/BrandSlider';

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get('category') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route changed - refreshing products");
      setRefreshKey(prevKey => prevKey + 1);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    setActiveCategory(categoryParam);
    console.log("Category param updated:", categoryParam);
    
    if (categoryParam !== 'all') {
      setTimeout(() => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  }, [categoryParam]);

  const handleCategoryClick = (category) => {
    // Redirect to dedicated category pages instead of filtering on the same page
    switch(category) {
      case 'TYRES':
        router.push('/products/tyres');
        break;
      case 'WHEELS':
        router.push('/products/wheels');
        break;
      case 'BATTERIES':
        router.push('/products/batteries');
        break;
      default:
        router.push('/products');
    }
  };

  const isCategoryActive = (displayCategory) => {
    const categoryMapping = {
      'TYRES': 'tyres',
      'WHEELS': 'wheels', 
      'BATTERIES': 'batteries'
    };
    
    return activeCategory === categoryMapping[displayCategory];
  };

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
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
          
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-8 md:px-16 rounded-3xl mx-auto max-w-7xl z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xl w-full"
            >
              <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-3xl border border-white/10">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">
                    Golden Extreme
                  </span>
                </motion.h1>
                <motion.p 
                  className="text-xl sm:text-2xl md:text-3xl max-w-3xl text-white/90"
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

        <motion.div 
          className="relative z-20 container mx-auto px-4 mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-4 sm:p-8 shadow-xl border border-amber-100/50 overflow-x-auto">
            <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-12">
              {['TYRES', 'WHEELS', 'BATTERIES'].map((category) => (
                <motion.div
                  key={category}
                  className="cursor-pointer w-full sm:w-auto"
                  onClick={() => handleCategoryClick(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: category === 'TYRES' ? 0.1 : category === 'WHEELS' ? 0.2 : 0.3 }}
                >
                  <div className="rounded-xl px-4 sm:px-8 py-3 sm:py-5 w-full sm:w-40 text-center font-bold shadow-lg transition-all duration-300 bg-white text-gray-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white hover:shadow-xl">
                    {category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative z-20 container mx-auto px-4 mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl p-6 sm:p-10 shadow-xl max-w-5xl mx-auto border border-amber-100">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="w-full md:w-1/3 relative">
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
              <div className="w-full md:w-2/3">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">About Golden Extreme</h3>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  Golden Extreme Trading offers a wide range of high-quality automotive products, including premium
                  tyres, durable wheels, and reliable batteries. Our tires are designed for optimal performance, safety,
                  and efficiency, suitable for various vehicle types and driving conditions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="py-24 px-4 mb-20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-amber-50 to-amber-50/50 z-0" />
          
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

        <motion.div 
          className="py-24 px-4 mb-24 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0" />
          
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

        {/* Product Categories Overview */}
        <div className="relative z-10 py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Wheels Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 sm:mb-32"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <img
                        src="/new iamges/DSC00941.JPG"
                        alt="Premium Wheels"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Premium Wheels</h3>
                        <p className="text-sm sm:text-base text-gray-200">Engineered for excellence, designed for performance</p>
                      </div>
                    </motion.div>
                  </div>
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="p-4 sm:p-0"
                    >
                      <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#FF6B00]">Premium Wheels for Superior Performance</h2>
                      <div className="w-20 h-1 bg-[#FF6B00] mb-6 sm:mb-8" />
                      <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-6 sm:mb-8">
                        At Golden Extreme Trading, we offer a wide selection of high-performance wheels designed to enhance the safety, durability, and style of your vehicle.
                      </p>
                      <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                        {[
                          "Premium Materials",
                          "Enhanced Safety",
                          "Superior Durability",
                          "Optimal Performance"
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 sm:gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                            <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Falcon Wheels Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-32"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-4xl font-bold mb-6 text-[#FF6B00]">FALCON WHEELS</h2>
                      <div className="w-20 h-1 bg-[#FF6B00] mb-8" />
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Golden Extreme Trading proudly offers Falcon Wheels, renowned for their exceptional quality and performance in both Passenger Car Radial (PCR) and Truck and Bus Radial (TBR) categories.
                      </p>
                      <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                          <h3 className="text-xl font-bold text-[#FF6B00] mb-4">PCR Wheels</h3>
                          <p className="text-gray-600">
                            Deliver a smooth, fuel-efficient, and reliable driving experience for everyday vehicles
                          </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                          <h3 className="text-xl font-bold text-[#FF6B00] mb-4">TBR Wheels</h3>
                          <p className="text-gray-600">
                            Built for heavy-duty trucks and buses, offering maximum strength, durability, and load-bearing capacity
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <img
                        src="/new iamges/golden-3.jpg"
                        alt="Falcon Wheels"
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">Falcon Wheels</h3>
                        <p className="text-gray-200">High-Performance PCR and TBR Solutions</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Batteries Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-32"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <img
                        src="/new/DSC00923.jpg"
                        alt="Falcon Batteries"
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">Falcon Batteries</h3>
                        <p className="text-gray-200">Reliable Power Solutions</p>
                      </div>
                    </motion.div>
                  </div>
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-4xl font-bold mb-6 text-[#FF6B00]">FALCON BATTERIES</h2>
                      <div className="w-20 h-1 bg-[#FF6B00] mb-8" />
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Falcon Batteries are known for their superior performance and reliability. Our range includes high-quality bike batteries and UPS batteries designed to meet your power needs with durability and efficiency.
                      </p>
                      <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                          <h3 className="text-xl font-bold text-[#FF6B00] mb-4">Bike Batteries</h3>
                          <p className="text-gray-600">
                            Deliver consistent starting power and long-lasting performance, ensuring a smooth ride in all conditions
                          </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                          <h3 className="text-xl font-bold text-[#FF6B00] mb-4">UPS Batteries</h3>
                          <p className="text-gray-600">
                            Designed to offer uninterrupted power supply for critical systems, providing dependable backup during outages
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div id="products" className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our collection of premium {activeCategory !== 'all' ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) : 'products'} 
              designed to provide optimal performance and reliability.
            </p>
          </motion.div>

          <div className="mb-8">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <ProductGrid 
            key={refreshKey}
            activeCategory={activeCategory} 
            searchQuery={searchQuery} 
          />
        </div>

        {/* Add BrandSlider component */}
        <BrandSlider />

      </div>

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