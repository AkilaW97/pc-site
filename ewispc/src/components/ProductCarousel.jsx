import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCarousel = ({ products }) => {
  // For demo purposes - in a real app, you'd want individual state per product
  const [currentIndices, setCurrentIndices] = useState(
    products.map(() => 0)
  );

  const nextImage = (productIndex) => {
    setCurrentIndices(prev => {
      const newIndices = [...prev];
      newIndices[productIndex] = 
        (newIndices[productIndex] + 1) % products[productIndex].images.length;
      return newIndices;
    });
  };

  const prevImage = (productIndex) => {
    setCurrentIndices(prev => {
      const newIndices = [...prev];
      newIndices[productIndex] = 
        (newIndices[productIndex] - 1 + products[productIndex].images.length) % 
        products[productIndex].images.length;
      return newIndices;
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          {/* Image with navigation arrows */}
          <div className="relative h-48 mb-4 overflow-hidden">
            <img
              src={product.images[currentIndices[index]]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
            
            {product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(index); }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-1 rounded-full"
                >
                  &lt;
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(index); }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-1 rounded-full"
                >
                  &gt;
                </button>
              </>
            )}
          </div>

          {/* Product Info */}
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-600 text-sm my-2 line-clamp-2">
            {product.description}
          </p>
          
          {/* Add to Cart - Using placeholder values since they're not in your JSON */}
          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="text-gray-500">1xUnit</span>
              <p className="font-bold">$XX.XX</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCarousel;