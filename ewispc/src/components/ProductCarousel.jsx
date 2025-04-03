import React from 'react';
import { Link } from 'react-router-dom';

const ProductCarousel = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="h-32 mb-3 flex items-center justify-center">
            <img
                src="/src/assets/Laptop3.png" // Using absolute path
                alt={product.name}
                className="max-h-full max-w-full object-contain"
            />
          </div>
          <h3 className="font-medium text-sm mb-1">{product.name}</h3>
          <p className="text-gray-600 text-xs line-clamp-2">
            {product.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductCarousel;