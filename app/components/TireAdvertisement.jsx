import React, { useEffect } from 'react';

const TireAdvertisement = () => {
  const tireProducts = [
    {
      id: 1,
      brand: "MICHELIN",
      model: "Pilot Sport 4",
      image: "/images/tires/michelin.png"
    },
    {
      id: 2,
      brand: "BRIDGESTONE",
      model: "Turanza",
      image: "/images/tires/bridgestone.png"
    },
    {
      id: 3,
      brand: "GOODYEAR",
      model: "Eagle F1",
      image: "/images/tires/goodyear.png"
    },
    {
      id: 4,
      brand: "APOLLO",
      model: "Apterra",
      image: "/images/tires/apollo.png"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tireProducts.map((product) => (
            <div key={product.id} className="product-card bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300">
              <div className="p-4">
                <h3 className="text-xl font-medium text-center text-gray-800 mb-4">
                  {product.brand}
                </h3>
                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                  <img 
                    src={product.image}
                    alt={`${product.brand} ${product.model} tire`}
                    className="product-image object-contain w-full h-full transition-transform duration-300"
                  />
                </div>
                <p className="text-center mt-3 text-gray-600">{product.model}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TireAdvertisement;