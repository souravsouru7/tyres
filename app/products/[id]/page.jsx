"use client"

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getProductById } from '../../../src/utils/api';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ProductModal from '../../components/ProductModal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowLeft, FiShoppingCart, FiShare2, FiHeart, FiChevronRight } from 'react-icons/fi';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!params.id) {
          throw new Error('Product ID is required');
        }

        const response = await getProductById(params.id);
        if (response.success) {
          setProduct(response.data);
        } else {
          throw new Error(response.error || 'Failed to fetch product');
        }
      } catch (err) {
        console.error('Error in fetchProduct:', err);
        setError(err.message || 'An error occurred while fetching the product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleViewDetails = () => {
    if (product) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <Layout>
        <motion.div 
          className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="relative w-32 h-32"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Image
              src="/logo.png"
              alt="Golden Extreme Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md mb-6">
            <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
            <p className="text-red-700">{error}</p>
          </div>
          <Link 
            href="/products" 
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md mb-6">
            <h2 className="text-xl font-bold text-yellow-600 mb-2">Product Not Found</h2>
            <p className="text-yellow-700">The requested product could not be found.</p>
          </div>
          <Link 
            href="/products" 
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20" />
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/placeholder.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Navigation */}
          <div className="absolute top-0 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <Link 
                href="/products" 
                className="inline-flex items-center text-white hover:text-amber-300 group"
              >
                <FiArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to Products</span>
              </Link>
            </div>
          </div>

          {/* Product Title */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {product.name}
              </motion.h1>
              {product.subcategory && (
                <span className="bg-amber-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                  {product.subcategory}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <FiShoppingCart className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Premium Quality</h3>
                      <p className="text-gray-600">Guaranteed performance and durability</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <FiHeart className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Warranty</h3>
                      <p className="text-gray-600">Comprehensive warranty coverage</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg sticky top-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group">
                  <span className="font-medium">Save for Later</span>
                  <FiHeart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </button>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Product Category</h4>
                  <p className="text-gray-600">{product.category}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {product && (
        <ProductModal
          product={product}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Layout>
  );
} 