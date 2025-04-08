"use client"

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getProductById } from '../../../src/utils/api';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ProductModal from '../../components/ProductModal';

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
        <div className="min-h-screen flex items-center justify-center">
          <div className="relative w-32 h-32">
            <img
              src="/logo.png"
              alt="Loading..."
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
        </div>
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