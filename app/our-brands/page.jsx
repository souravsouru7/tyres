"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
export default function OurBrandsPage() {
  return (
    <Layout>
    <div className="bg-white min-h-screen">
      
      
      {/* Hero Section with Yellow Accents */}
      <motion.div 
        className="relative h-[70vh] w-full bg-gradient-to-r from-yellow-400 to-yellow-300 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Decorative Elements */}
        <motion.div 
          className="absolute -right-20 -top-20 w-96 h-96 bg-white opacity-20 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute -left-20 -bottom-20 w-96 h-96 bg-white opacity-20 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <div className="absolute left-1/4 top-1/4 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Falcon Brand Background" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="text-center z-10 text-gray-900 px-4 max-w-5xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            WINGS OF INNOVATION
          </motion.h1>
          <motion.div 
            className="w-32 h-1 bg-white mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="text-xl max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            The Falcon Legacy: Precision, Resilience, and Innovation
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        {/* Brand Introduction with Yellow Accent Border */}
        <motion.div 
          className="mb-20 text-center relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute left-0 top-0 w-1 h-32 bg-yellow-400"></div>
          <div className="absolute right-0 top-0 w-1 h-32 bg-yellow-400"></div>
          
          <h2 className="text-6xl font-bold mb-8 relative inline-block">
            <span className="relative z-10">FALCON</span>
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-200 -z-10 transform -skew-x-12"></div>
          </h2>
          
          <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-12 leading-relaxed">
            Founded on the ideals of precision and resilience, Falcon was named in homage to the national bird of the UAE. 
            The falcon, with its sharp vision, swiftness, and majestic flight, symbolized what the brand aspired to be: 
            powerful, agile, and ahead of its competitors.
          </p>
          
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl border-8 border-white">
            <Image 
              src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Falcon Brand Vision" 
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 to-transparent"></div>
          </div>
        </motion.div>

        {/* Brand Products with Yellow Accents */}
        <div className="mb-20 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-32 bg-yellow-400 rounded-r-lg hidden md:block"></div>
          
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 relative inline-block mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10 border-b-4 border-yellow-400 pb-2">OUR PREMIUM PRODUCT LINES</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Falcon Tyre */}
            <motion.div 
              className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="relative h-64 w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
                  alt="Falcon Tyre Product" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 right-0 bg-yellow-400 text-white px-4 py-2 font-bold">PREMIUM</div>
              </div>
              <div className="p-6">
                <div className="relative h-24 w-full mb-4">
                  <Image 
                    src="/placeholder-yellow.png" 
                    alt="Falcon Tyre" 
                    fill
                    style={{ objectFit: 'contain' }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="w-6 h-1 bg-yellow-400 mr-3"></span>
                  FALCON TYRE
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Engineered for the diverse terrains of the region, our tyres offer unmatched durability and performance 
                  for PCR, TBR, and LTR vehicles.
                </p>
                <Link href="/brands/falcon-tyre" className="inline-block bg-yellow-400 text-gray-900 py-3 px-6 rounded-full font-medium hover:bg-yellow-500 transition shadow-md hover:shadow-lg">
                  Explore Tyres
                </Link>
              </div>
            </motion.div>

            {/* Falcon Wheels */}
            <motion.div 
              className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-64 w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1600706432502-77a0e2e32790?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
                  alt="Falcon Wheels Product" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 right-0 bg-yellow-400 text-white px-4 py-2 font-bold">PREMIUM</div>
              </div>
              <div className="p-6">
                <div className="relative h-24 w-full mb-4">
                  <Image 
                    src="https://placehold.co/400x200/FCD34D/1F2937?text=Falcon+Wheels" 
                    alt="Falcon Wheels" 
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="w-6 h-1 bg-yellow-400 mr-3"></span>
                  FALCON WHEELS
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Crafted with precision and passion, our wheels provide strength and stability for both urban environments 
                  and desert adventures.
                </p>
                <Link href="/brands/falcon-wheels" className="inline-block bg-yellow-400 text-gray-900 py-3 px-6 rounded-full font-medium hover:bg-yellow-500 transition shadow-md hover:shadow-lg">
                  Discover Wheels
                </Link>
              </div>
            </motion.div>

            {/* Falcon Battery */}
            <motion.div 
              className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-64 w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt="Falcon Battery Product" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 right-0 bg-yellow-400 text-white px-4 py-2 font-bold">PREMIUM</div>
              </div>
              <div className="p-6">
                <div className="relative h-24 w-full mb-4">
                  <Image 
                    src="https://placehold.co/400x200/FCD34D/1F2937?text=Falcon+Battery" 
                    alt="Falcon Battery" 
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="w-6 h-1 bg-yellow-400 mr-3"></span>
                  FALCON BATTERY
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Powering everything from emergency backup systems to motorbike adventures, our batteries offer unmatched 
                  energy solutions with safety and longevity.
                </p>
                <Link href="/brands/falcon-battery" className="inline-block bg-yellow-400 text-gray-900 py-3 px-6 rounded-full font-medium hover:bg-yellow-500 transition shadow-md hover:shadow-lg">
                  View Batteries
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brand Legacy Section with Yellow Design Elements */}
        <motion.div 
          className="my-20 py-16 bg-white rounded-xl px-6 shadow-lg border-l-8 border-yellow-400 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-100 rounded-tr-full"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-center mb-10 relative inline-block">
              <span className="relative z-10">THE FALCON LEGACY</span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-200 -z-10"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Today, Falcon stands not just as a brand but as a legacy, embodying the United Arab Emirates' values — 
                  blending tradition with cutting-edge technology. Like the falcon that inspired its name, the brand continues 
                  to glide effortlessly across the landscape, a symbol of what's possible when vision meets expertise.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Thus, Falcon's story continues to unfurl, crafting pathways, energizing engines, and connecting worlds, 
                  one revolutionary product at a time.
                </p>
                <div className="mt-8 inline-block">
                  <span className="inline-block w-12 h-1 bg-yellow-400 mr-2"></span>
                  <span className="inline-block w-8 h-1 bg-yellow-300 mr-2"></span>
                  <span className="inline-block w-4 h-1 bg-yellow-200"></span>
                </div>
              </div>
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image 
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Falcon Legacy" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Falcon with Yellow Theme */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-12 relative inline-block"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10">Why Choose Falcon Brands?</span>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-200 -z-10"></div>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-yellow-400"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-700">
                Each product is manufactured to the highest standards, ensuring durability and performance.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-yellow-400"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We continuously evolve our products with cutting-edge technology to meet changing needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-yellow-400"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-700">
                Our products are designed for consistent performance in the most demanding conditions.
              </p>
            </motion.div>
          </div>
          
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Our Falcon brands represent quality, innovation, and reliability. Each product is designed with precision 
            and manufactured to the highest standards to ensure customer satisfaction and safety.
          </p>
          
          <motion.div 
            className="mt-12"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact-us" className="inline-block bg-yellow-400 text-gray-900 py-4 px-8 rounded-full font-bold text-lg hover:bg-yellow-500 transition shadow-lg hover:shadow-xl">
              Connect With Us Today
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Yellow Footer Banner */}
      <motion.div 
        className="bg-yellow-400 py-12 mt-20 relative overflow-hidden"
        initial={{ opacity: 0.9 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          initial={{ y: 0 }}
          whileInView={{ y: -20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-bold mb-4">Experience the Falcon Difference</h2>
          <p className="max-w-2xl mx-auto mb-6">Join thousands of satisfied customers who trust Falcon brands for quality and performance.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/products" className="bg-white text-yellow-500 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              Browse Products
            </Link>
            <Link href="/contact-us" className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
              Contact Sales
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
    </Layout>
  );
} 