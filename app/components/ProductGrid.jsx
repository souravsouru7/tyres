import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const productsData = [
  // PCR Tires
  {
    id: 1,
    name: 'Premium PCR Tire',
    category: 'pcr-tires',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80',
    description: 'High-performance passenger car tire with excellent grip',
  },
  // OTR Tires
  {
    id: 2,
    name: 'Heavy Duty OTR Tire',
    category: 'otr-tires',
    image: 'https://images.unsplash.com/photo-1586803840911-d5a5dd0a2ea7?auto=format&fit=crop&q=80',
    description: 'Durable off-the-road tire for construction equipment',
  },
  // TBR Tires
  {
    id: 3,
    name: 'Commercial TBR Tire',
    category: 'tbr-tires',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80',
    description: 'Truck and bus radial tire for commercial vehicles',
  },
  // LTR Tires
  {
    id: 4,
    name: 'Light Truck Tire',
    category: 'ltr-tires',
    image: 'https://images.unsplash.com/photo-1568708167243-438efa4363ad?auto=format&fit=crop&q=80',
    description: 'Light truck radial tire for enhanced durability',
  },
  // PCR Wheels
  {
    id: 5,
    name: 'Sport Alloy PCR Wheel',
    category: 'pcr-wheels',
    image: 'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&q=80',
    description: 'Lightweight alloy wheel for passenger vehicles',
  },
  // TBR Wheels
  {
    id: 6,
    name: 'Heavy Duty TBR Wheel',
    category: 'tbr-wheels',
    image: 'https://images.unsplash.com/photo-1600706432502-77a0e2e32790?auto=format&fit=crop&q=80',
    description: 'Durable wheel for trucks and buses',
  },
  // Bike Batteries
  {
    id: 7,
    name: 'Performance Bike Battery',
    category: 'bike-batteries',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80',
    description: 'High-performance motorcycle battery',
  },
  // UPS Batteries
  {
    id: 8,
    name: 'UPS Battery System',
    category: 'ups-batteries',
    image: 'https://images.unsplash.com/photo-1601984646117-4e0c51ca2de3?auto=format&fit=crop&q=80',
    description: 'Reliable battery system for uninterrupted power supply',
  },
];

const ProductGrid = ({ activeCategory, searchQuery }) => {
  const filteredProducts = productsData.filter(product => {
    const matchesCategory = activeCategory === 'all' || 
                          product.category === activeCategory ||
                          (activeCategory === 'tires' && product.category.includes('tires')) ||
                          (activeCategory === 'wheels' && product.category.includes('wheels')) ||
                          (activeCategory === 'batteries' && product.category.includes('batteries'));
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                ${product.price}
              </span>
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-6 py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                View Details
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
