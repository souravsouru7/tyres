'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
// ...existing imports...
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const quickActionVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="group bg-white rounded-2xl shadow-lg overflow-hidden relative"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => {
        setIsHovered(true);
        setShowQuickActions(true);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        setShowQuickActions(false);
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 4px 4px, black 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {product.image ? (
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            variants={imageVariants}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/placeholder.jpg';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-400">Image not available</span>
          </div>
        )}

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          variants={overlayVariants}
        />

        {/* Quick Actions */}
        <AnimatePresence>
          {showQuickActions && (
            <motion.div
              className="absolute top-4 right-4 flex flex-col space-y-2"
              variants={quickActionVariants}
              initial="initial"
              animate="animate"
              exit="initial"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transition-colors"
              >
                <FiHeart className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transition-colors"
              >
                <FiShoppingCart className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transition-colors"
              >
                <FiEye className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-2 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {product.name}
        </motion.h3>
        <motion.p 
          className="text-gray-600 mb-4 line-clamp-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {product.description}
        </motion.p>
        <div className="flex justify-between items-center">
          <Link href={`/products/${product._id}`} className="w-full">
            <motion.button
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-6 py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Details</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
              />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(234, 179, 8, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)
          `
        }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(234,179,8,0.05) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
