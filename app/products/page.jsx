"use client"

import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
            <motion.h1 
              className="text-4xl md:text-7xl font-extrabold mb-4 md:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Products
            </motion.h1>
            <motion.div 
              className="w-24 md:w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4 md:mb-6"
              initial={{ width: 0 }}
              animate={{ width: '8rem' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.p 
              className="text-lg md:text-xl text-center max-w-3xl text-gray-200 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover our premium selection of tires, wheels, and batteries
            </motion.p>
          </div>
        </div>

        {/* Mobile Filters Toggle Button */}
        <div className="lg:hidden sticky top-0 z-20 bg-white shadow-md p-4">
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
          >
            <span>{isFiltersOpen ? 'Hide Filters' : 'Show Filters'}</span>
            <svg 
              className={`w-5 h-5 transform transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
            {/* Filters Section */}
            <div className={`lg:w-1/4 lg:sticky lg:top-24 h-fit transition-all duration-300 ${
              isFiltersOpen ? 'block' : 'hidden lg:block'
            }`}>
              <ProductFilters 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSelect={() => setIsFiltersOpen(false)}
              />
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <ProductGrid 
                activeCategory={activeCategory}
                searchQuery={searchQuery}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
