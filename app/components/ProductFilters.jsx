import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { 
    id: 'all', 
    name: 'All Products',
  },
  { 
    id: 'tires', 
    name: 'Tires',
    subcategories: [
      { id: 'pcr-tires', name: 'PCR Tires' },
      { id: 'otr-tires', name: 'OTR Tires' },
      { id: 'tbr-tires', name: 'TBR Tires' },
      { id: 'ltr-tires', name: 'LTR Tires' },
    ]
  },
  { 
    id: 'wheels', 
    name: 'Wheels',
    subcategories: [
      { id: 'pcr-wheels', name: 'PCR Wheels' },
      { id: 'tbr-wheels', name: 'TBR Wheels' },
    ]
  },
  { 
    id: 'batteries', 
    name: 'Batteries',
    subcategories: [
      { id: 'bike-batteries', name: 'Bike Batteries' },
      { id: 'ups-batteries', name: 'UPS Batteries' },
    ]
  }
];

const ProductFilters = ({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 backdrop-blur-lg bg-white/80">
      {/* Search Input */}
      <div className="mb-8">
        <label htmlFor="search" className="block text-lg font-semibold text-gray-800 mb-3">
          Search Products
        </label>
        <div className="relative">
          <input
            type="text"
            id="search"
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-50 transition-all duration-300"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="space-y-2">
              <motion.button
                className={`w-full px-5 py-3 rounded-xl text-left transition-all duration-300 font-semibold ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-white shadow-lg'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
              
              {/* Subcategories */}
              {category.subcategories && (
                <div className="ml-4 space-y-2">
                  {category.subcategories.map((sub) => (
                    <motion.button
                      key={sub.id}
                      className={`w-full px-4 py-2 rounded-lg text-left text-sm transition-all duration-300 ${
                        activeCategory === sub.id
                          ? 'bg-yellow-400 text-white shadow-md'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveCategory(sub.id)}
                      whileTap={{ scale: 0.98 }}
                    >
                      {sub.name}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          className="w-full h-2 bg-gray-200 rounded-xl appearance-none cursor-pointer accent-yellow-500"
        />
        <div className="flex justify-between mt-2">
          <span className="text-sm font-medium text-gray-600">$0</span>
          <span className="text-sm font-medium text-gray-600">$1000</span>
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">Brand</h3>
        <div className="space-y-3">
          {['Michelin', 'Bridgestone', 'Continental', 'Pirelli'].map((brand) => (
            <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-500 rounded border-2 border-gray-300 focus:ring-yellow-500" />
              <span className="text-gray-700 font-medium group-hover:text-yellow-600 transition-colors duration-200">{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
