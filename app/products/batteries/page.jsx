'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getProducts } from '../../../src/utils/api';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';

export default function BatteriesPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        console.log("Batteries API Response:", response);
        
        if (response && response.success) {
          // Filter only battery products
          const batteryProducts = response.data.filter(product => product.category === 'battery');
          setProducts(batteryProducts);
        } else {
          setError(response?.error || 'Failed to fetch products');
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Background Pattern */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#f0f0f0_2px,transparent_0)] bg-[size:40px_40px]" />
        </div>

        {/* Header Section */}
        <div className="relative py-16 mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <Link 
                  href="/products" 
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 group"
                >
                  <FiArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span className="font-medium">Back to All Products</span>
                </Link>
              </div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
                  Premium Batteries
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Explore our range of high-performance batteries designed to provide reliable power 
                and long-lasting performance for your vehicles and devices.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="container mx-auto px-4 pb-24 relative z-10">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/logo.png"
                  alt="Golden Extreme Logo"
                  fill
                  className="object-contain animate-pulse"
                />
              </div>
              <span className="text-lg font-medium text-gray-700">Loading products...</span>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md inline-block mb-6">
                <p className="text-red-700">{error}</p>
              </div>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Batteries Available</h3>
              <p className="text-gray-600 mb-8">We couldn't find any battery products at the moment.</p>
              <Link 
                href="/products" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Link href={`/products/${product._id}`} key={product._id} className="block">
                    <motion.div 
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
                      whileHover={{ y: -8 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/placeholder.jpg';
                          }}
                        />
                        
                        {product.subcategory && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full">
                              {product.subcategory}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                        
                        <div className="flex justify-center">
                          <div className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium inline-flex items-center">
                            View Details
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
} 