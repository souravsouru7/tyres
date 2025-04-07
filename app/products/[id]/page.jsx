"use client"

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getProductById, getProducts } from '../../../src/utils/api';
import Layout from '../../components/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FiArrowDown, FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [activeSubcategory, setActiveSubcategory] = useState('');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  // Load product details and related products on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching product details for ID:", params.id);
        setLoading(true);
        
        // Fetch the current product
        const productResponse = await getProductById(params.id);
        console.log("Product API response:", productResponse);
        
        if (productResponse.success) {
          setProduct(productResponse.data);
          setActiveSubcategory(productResponse.data.subcategory);
          
          // Fetch all products to find related ones and subcategories
          const allProductsResponse = await getProducts();
          if (allProductsResponse.success) {
            // Get all products in the same category
            const categoryProducts = allProductsResponse.data.filter(p => 
              p.category === productResponse.data.category
            );

            // Extract unique subcategories for this category
            const uniqueSubcategories = [...new Set(
              categoryProducts.map(p => p.subcategory)
            )].map(sub => ({
              _id: sub,
              name: sub,
              category: productResponse.data.category
            }));
            setSubcategories(uniqueSubcategories);

            // Filter products with the same subcategory, excluding the current product
            const related = categoryProducts.filter(p => 
              p.subcategory === activeSubcategory && 
              p._id !== productResponse.data._id
            );
            setRelatedProducts(related);
          }
        } else {
          setError(productResponse.error || 'Failed to fetch product');
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params.id, activeSubcategory]);

  const handleCategoryClick = (category) => {
    // Redirect to dedicated category pages 
    switch(category) {
      case 'TYRES':
        router.push('/products/tyres');
        break;
      case 'WHEELS':
        router.push('/products/wheels');
        break;
      case 'BATTERIES':
        router.push('/products/batteries');
        break;
      default:
        router.push('/products');
    }
  };

  // Helper function to map database category values to display names
  const getCategoryDisplayName = (dbCategory) => {
    const displayMapping = {
      'tyre': 'TYRES',
      'wheel': 'WHEELS',
      'battery': 'BATTERIES'
    };
    
    return displayMapping[dbCategory] || dbCategory.toUpperCase();
  };

  if (loading) return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src="/logo.png"
            alt="Golden Extreme Logo"
            fill
            className="object-contain animate-pulse"
          />
        </div>
        <span className="text-lg font-medium text-gray-700">Loading product details...</span>
      </div>
    </Layout>
  );

  if (error) return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error: {error}</h2>
        <Link href="/products" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          Back to Products
        </Link>
      </div>
    </Layout>
  );

  if (!product) return null;

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Background Pattern */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#f0f0f0_2px,transparent_0)] bg-[size:40px_40px]" />
        </div>

        {/* Floating Elements */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,200,0,0.03) 0%, rgba(255,140,0,0.02) 100%)',
              top: '10%',
              left: '20%',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,140,0,0.03) 0%, rgba(255,100,0,0.02) 100%)',
              bottom: '10%',
              right: '20%',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Category Navigation with Subcategories */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6 py-12">
            {/* Main Categories */}
            <div className="flex justify-center items-center space-x-6 md:space-x-12">
              {['TYRES', 'WHEELS', 'BATTERIES'].map((category) => (
                <motion.div
                  key={category}
                  className="cursor-pointer"
                  onClick={() => handleCategoryClick(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`rounded-xl px-8 py-5 w-40 text-center font-bold shadow-lg transition-all duration-300 ${
                    getCategoryDisplayName(product.category) === category 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
                      : 'bg-white text-gray-800 hover:shadow-xl'
                  }`}>
                    {category}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Subcategories */}
            <div className="w-full max-w-2xl">
              <div className="flex flex-wrap justify-center gap-3">
                {subcategories.map((sub) => (
                  <motion.button
                    key={sub._id}
                    onClick={() => setActiveSubcategory(sub.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSubcategory === sub.name
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {sub.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Section - Based on Product Category */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full">
            <img 
              src={
                product.category === 'tyre' 
                  ? "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  : product.category === 'wheel'
                  ? "https://images.unsplash.com/photo-1626954079729-ae131afe755c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  : "https://images.unsplash.com/photo-1621243966898-9027fc2beec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              } 
              alt={`${product.category} banner`} 
              className="w-full h-[400px] object-cover rounded-3xl mx-auto max-w-7xl shadow-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 flex flex-col justify-center items-center text-white px-4 rounded-3xl mx-auto max-w-7xl">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-center capitalize"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">
                {getCategoryDisplayName(product.category)}
              </span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-center max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Premium Quality {getCategoryDisplayName(product.category)} For Your Vehicle
            </motion.p>
            
            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              style={{ opacity }}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FiArrowDown className="w-8 h-8 text-amber-400" />
            </motion.div>
          </div>
        </motion.div>

        <div className="relative z-10 bg-white py-12">
        <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link 
                href="/products" 
                className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FiArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to Products</span>
              </Link>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            <div className="md:flex">
              {/* Product Image */}
              <motion.div 
                  className="md:w-1/2 relative h-96 md:h-auto overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-image.jpg';
                  }}
                />
              </motion.div>

              {/* Product Details */}
              <motion.div 
                className="md:w-1/2 p-8 md:p-12"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Category and Subcategory Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-sm font-medium">
                    {getCategoryDisplayName(product.category)}
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium">
                    {product.subcategory}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  {product.name}
                </h1>
                <p className="text-gray-600 mb-8 text-lg">{product.description}</p>
                
                {/* Product Specifications */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex flex-col p-3 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md">
                        <span className="text-sm text-gray-500 capitalize">{key.replace('_', ' ')}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price and CTA */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                  {product.price && (
                      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 mb-4 md:mb-0">
                      ${product.price.toFixed(2)}
                    </div>
                  )}
                    <motion.button 
                      className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg shadow-md"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                    Contact for Inquiry
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              More {product.subcategory} Products
            </h2>
            <p className="text-gray-600">
              Explore other products in the same category
            </p>
          </motion.div>

          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder-image.jpg';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-xs font-medium">
                        {getCategoryDisplayName(relatedProduct.category)}
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-xs font-medium">
                        {relatedProduct.subcategory}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <Link 
                      href={`/products/${relatedProduct._id}`}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600">
                No other products available in this subcategory at the moment.
              </p>
            </motion.div>
          )}
        </div>

        {/* Add CSS for marquee animation */}
        <style jsx global>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </div>
    </Layout>
  );
} 