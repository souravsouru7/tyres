'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProducts } from '../../src/utils/api';
import Link from 'next/link';
import ProductModal from './ProductModal';

const TireAdvertisement = () => {
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
          // Get the first 4 products
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

  // Animation effect for elements
  useEffect(() => {
    const animateElements = () => {
      const header = document.querySelector('.main-header');
      const subheader = document.querySelector('.sub-header');
      const divider = document.querySelector('.divider');
      const products = document.querySelectorAll('.product-card');

      // Animate header
      setTimeout(() => {
        header?.classList.add('animate-header');
      }, 300);

      // Animate subheader
      setTimeout(() => {
        subheader?.classList.add('animate-subheader');
      }, 600);

      // Animate divider
      setTimeout(() => {
        divider?.classList.add('animate-divider');
      }, 900);

      // Animate products
      products.forEach((product, index) => {
        setTimeout(() => {
          product.classList.add('animate-product');
        }, 1200 + (index * 200));
      });
    };

    animateElements();
  }, [products]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-white">
      <style jsx>{`
        .main-header {
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.8s ease;
        }
        .animate-header {
          opacity: 1;
          transform: translateY(0);
        }
        .sub-header {
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.8s ease;
        }
        .animate-subheader {
          opacity: 1;
          transform: translateY(0);
        }
        .divider {
          width: 0;
          transition: all 0.8s ease;
        }
        .animate-divider {
          width: 100px;
        }
        .product-card {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }
        .animate-product {
          opacity: 1;
          transform: translateY(0);
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .product-image {
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
      `}</style>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="main-header text-5xl font-bold text-gray-800 mb-2">HOT SELLING PRODUCTS</h2>
          <p className="sub-header text-2xl text-gray-400">AMAZING NEW TYRES AT AMAZING PRICES</p>
          <div className="divider h-1 bg-yellow-400 mx-auto mt-6"></div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="animate-pulse bg-gray-100 rounded-lg p-4 h-64"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                onClick={() => handleProductClick(product)}
                className="product-card bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 cursor-pointer"
              >
                <div className="p-4">
                  <h3 className="text-xl font-medium text-center text-gray-800 mb-4">
                    {product.name}
                  </h3>
                  <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image object-contain w-full h-full transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder-image.jpg';
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-center text-gray-600 line-clamp-2">{product.description}</p>
                    <div className="flex justify-center mt-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-xs font-medium">
                        {product.subcategory}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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