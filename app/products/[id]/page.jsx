"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProductById } from '../../../src/utils/api';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(params.id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    </Layout>
  );

  if (error) return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error: {error}</h2>
        <Link href="/products" className="bg-yellow-500 text-white px-6 py-3 rounded-xl">
          Back to Products
        </Link>
      </div>
    </Layout>
  );

  if (!product) return null;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/products" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Products
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Product Image */}
              <motion.div 
                className="md:w-1/2 relative h-96 md:h-auto"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-image.jpg';
                  }}
                />
              </motion.div>

              {/* Product Details */}
              <motion.div 
                className="md:w-1/2 p-8 md:p-12"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-8 text-lg">{product.description}</p>
                
                {/* Product Specifications */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm text-gray-500 capitalize">{key.replace('_', ' ')}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price and CTA */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                  {product.price && (
                    <div className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                      ${product.price.toFixed(2)}
                    </div>
                  )}
                  <button className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Contact for Inquiry
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 