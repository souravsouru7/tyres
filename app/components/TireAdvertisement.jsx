import React, { useEffect } from 'react';
import Image from 'next/image';

const TireAdvertisement = () => {
  const tireProducts = [
    {
      id: 1,
      brand: "MICHELIN",
      model: "Pilot Sport 4",
      image: "/images/img1.jpg",
      alt: "Michelin Pilot Sport 4 Tire"
    },
    {
      id: 2,
      brand: "BRIDGESTONE",
      model: "Potenza Sport",
      image: "/images/img2.jpg",
      alt: "Bridgestone Potenza Sport Tire"
    },
    {
      id: 3,
      brand: "GOODYEAR",
      model: "Eagle F1",
      image: "/images/img3.jpg",
      alt: "Goodyear Eagle F1 Tire"
    },
    {
      id: 4,
      brand: "CONTINENTAL",
      model: "SportContact",
      image: "/images/img4.jpg",
      alt: "Continental SportContact Tire"
    }
  ];

  // Animation effect for elements
  useEffect(() => {
    const animateElements = () => {
      const header = document.querySelector('.main-header');
      const subheader = document.querySelector('.sub-header');
      const divider = document.querySelector('.divider');
      const products = document.querySelectorAll('.product-card');

      // Animate header
      setTimeout(() => {
        header.classList.add('animate-header');
      }, 300);

      // Animate subheader
      setTimeout(() => {
        subheader.classList.add('animate-subheader');
      }, 600);

      // Animate divider
      setTimeout(() => {
        divider.classList.add('animate-divider');
      }, 900);

      // Animate products
      products.forEach((product, index) => {
        setTimeout(() => {
          product.classList.add('animate-product');
        }, 1200 + (index * 200));
      });
    };

    animateElements();
  }, []);

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
          transition: all 0.5s ease;
          background: white;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }
        .animate-product {
          opacity: 1;
          transform: translateY(0);
        }
        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #FFA500);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .product-card:hover::before {
          transform: scaleX(1);
        }
        .product-card:hover {
          transform: translateY(-8px);
          border-color: #f0f0f0;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .product-image {
          transition: transform 0.6s ease;
        }
        .product-card:hover .product-image {
          transform: scale(1.08) rotate(2deg);
        }
        .product-image-container {
          position: relative;
          height: 250px;
          background: linear-gradient(145deg, #ffffff, #f8f9fa);
          padding: 1.5rem;
          margin: 1rem;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .product-brand {
          position: relative;
          display: inline-block;
          padding: 0.5rem 1rem;
          background: linear-gradient(145deg, #ffffff, #f3f4f6);
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          margin-bottom: 1rem;
        }
        .product-model {
          color: #4a5568;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .view-details-btn {
          background: linear-gradient(90deg, #FFD700, #FFA500);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          transform: translateY(0);
          transition: all 0.3s ease;
        }
        .view-details-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 165, 0, 0.3);
        }
      `}</style>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="main-header text-5xl font-bold text-gray-800 mb-2">HOT SELLING PRODUCTS</h2>
          <p className="sub-header text-2xl text-gray-400">AMAZING NEW TYRES AT AMAZING PRICES</p>
          <div className="divider h-1 bg-yellow-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tireProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
            >
              <div className="p-4">
                <div className="text-center">
                  <span className="product-brand">
                    <h3 className="text-xl font-bold text-gray-800">
                      {product.brand}
                    </h3>
                  </span>
                </div>
                <div className="product-image-container">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="product-image"
                      priority
                    />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="product-model mb-4">{product.model}</p>
                  <button className="view-details-btn text-white">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TireAdvertisement;