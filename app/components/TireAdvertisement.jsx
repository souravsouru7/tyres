'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProducts } from '../../src/utils/api';
import Link from 'next/link';
import ProductModal from './ProductModal';
import { useRouter } from 'next/navigation';

const TireAdvertisement = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        if (response.success) {
          const featuredProducts = response.data
            .filter(product => product.category === 'tyre')
            .slice(0, 4);
          setProducts(featuredProducts);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleEnquire = (e, product) => {
    e.stopPropagation(); 
    router.push('/ConductUs');
  };

  const staticProducts = [
    {
      id: 'appolo',
      logoSrc: '/forproduct/Apollo.png',
      logoAlt: 'Apollo logo',
      imageSrc: '/newpng/appolo.png',
      imageAlt: 'Apollo Tyre',
      description: 'High-performance summer tire',
      subcategory: 'Summer Tire',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'bf-goodrich',
      logoSrc: '/forproduct/bf-goodrich-logo.png',
      logoAlt: 'BF Goodrich logo',
      imageSrc: '/newpng/bf.png',
      imageAlt: 'BF Goodrich Tire',
      description: 'Winter tire for extreme conditions',
      subcategory: 'Winter Tire',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'marshall',
      logoSrc: '/forproduct/Michelin.png',
      logoAlt: 'Michelin logo',
      imageSrc: '/newpng/marshall.png',
      imageAlt: 'Marshall Tire',
      description: 'Energy-efficient all-season tire',
      subcategory: 'All-Season Tire',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'yokohama',
      logoSrc: '/forproduct/Yokohama.png',
      logoAlt: 'Yokohama logo',
      imageSrc: '/newpng/yo.png',
      imageAlt: 'Yokohama Tire',
      description: 'Ultra-high performance tire',
      subcategory: 'Performance Tire',
      color: 'from-red-600 to-red-800'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <style jsx global>{`
        @keyframes floatAnimation {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(255, 200, 0, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(255, 200, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 200, 0, 0); }
        }
        
        @keyframes spin3D {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes shineEffect {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .glow-effect {
          animation: pulseGlow 2s infinite;
        }
        
        .float-animation {
          animation: floatAnimation 6s ease-in-out infinite;
        }
        
        .spin-animation {
          perspective: 1000px;
        }
        
        .spin-animation:hover .spin-content {
          transform: rotateY(180deg);
          transition: transform 0.8s;
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
          transform: skewX(-25deg);
          transition: all 0.75s;
        }
        
        .shine-effect:hover::before {
          animation: shineEffect 0.75s;
        }
        
        .card-gradient {
          background-size: 200% 200%;
          animation: gradientFlow 3s ease infinite;
        }
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .badge-pop {
          transition: all 0.3s ease;
        }
        
        .badge-pop:hover {
          transform: scale(1.1);
        }
        
        .tire-spin:hover {
          animation: spin3D 3s linear infinite;
        }
        
        .flare-effect {
          position: relative;
          overflow: hidden;
        }
        
        .flare-effect::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          opacity: 0;
          transform: rotate(30deg);
          background: rgba(255, 255, 255, 0.13);
          background: linear-gradient(
            to right, 
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.13) 77%,
            rgba(255, 255, 255, 0.5) 92%,
            rgba(255, 255, 255, 0.0) 100%
          );
          transition: opacity 0.2s;
        }
        
        .flare-effect:hover::after {
          opacity: 1;
          animation: flareEffect 1s ease-out;
        }
        
        @keyframes flareEffect {
          0% { left: -50%; opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>

      <div className="container mx-auto px-4 lg:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600 mb-2"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            HOT SELLING PRODUCTS
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            AMAZING NEW TYRES AT AMAZING PRICES
          </motion.p>
          <motion.div 
            className="h-1 bg-gradient-to-r from-amber-400 to-yellow-500 w-24 mx-auto mt-6 glow-effect rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {staticProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative h-[420px] bg-white shine-effect flare-effect overflow-hidden rounded-xl shadow-lg group cursor-pointer border border-gray-100"
              onClick={() => handleProductClick(product)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              {/* Card Content with improved layout */}
              <div className="relative flex flex-col h-full justify-between">
                {/* Logo area */}
                <motion.div 
                  className="h-24 flex items-center justify-center p-4 border-b border-gray-100 z-10 bg-white rounded-t-xl"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={product.logoSrc} 
                    alt={product.logoAlt} 
                    className="h-16 w-auto object-contain max-w-[80%]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" font-family="Arial" font-size="14" fill="%23666" text-anchor="middle" dominant-baseline="middle">Logo</text></svg>';
                    }}
                  />
                </motion.div>

                {/* Tire image with transparent background */}
                <motion.div 
                  className="flex-1 flex items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.img 
                    src={product.imageSrc} 
                    alt={product.imageAlt} 
                    className="h-[180px] w-auto object-contain drop-shadow-xl tire-spin mix-blend-multiply"
                    initial={{ rotateY: 0 }}
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 1.5 }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" font-family="Arial" font-size="14" fill="%23666" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>';
                    }}
                  />
                </motion.div>

                {/* Description area */}
                <motion.div 
                  className="p-4 bg-white border-t border-gray-100 rounded-b-xl"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.p 
                    className="text-center text-gray-800 font-medium text-lg mb-4"
                    whileHover={{ scale: 1.03 }}
                  >
                    {product.description}
                  </motion.p>
                  
                  {/* Buttons with improved layout and distinction */}
                  <div className="flex flex-col justify-center space-y-3">
                    <motion.span 
                      className="inline-block text-center px-3 py-1.5 border border-amber-200 text-amber-800 bg-amber-50 rounded-full text-sm font-medium badge-pop"
                      whileHover={{ scale: 1.05, backgroundColor: '#fef3c7' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {product.subcategory}
                    </motion.span>
                    <motion.button
                      onClick={(e) => handleEnquire(e, product)}
                      className="px-5 py-2 bg-amber-500 text-white hover:bg-amber-600 rounded-full text-sm font-semibold shadow-sm hover:shadow transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Enquire Now
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default TireAdvertisement;