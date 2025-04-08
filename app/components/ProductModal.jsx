'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              <FiX className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              {/* Image Section */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-image.jpg';
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-sm font-medium">
                    {product.category === 'tyre' ? 'TYRES' : 
                     product.category === 'wheel' ? 'WHEELS' : 'BATTERIES'}
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium">
                    {product.subcategory}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h2>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <div className="mt-auto">
                  <button
                    onClick={() => window.location.href = `mailto:info@example.com?subject=Inquiry about ${product.name}`}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal; 