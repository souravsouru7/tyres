"use client"

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getProductById } from '../../../src/utils/api';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ProductModal from '../../components/ProductModal';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await getProductById(params.id);
        
        if (response.success) {
          setProduct(response.data);
          setIsModalOpen(true);
        } else {
          setError(response.error || 'Failed to fetch product');
        }
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

  // Redirect back to products page when modal is closed
  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push('/products');
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
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error: {error}</h2>
          <Link 
            href="/products" 
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
          Back to Products
        </Link>
      </div>
    </Layout>
  );
  }

  return (
    <Layout>
      <div className="min-h-screen">
        <ProductModal
          product={product}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </Layout>
  );
} 