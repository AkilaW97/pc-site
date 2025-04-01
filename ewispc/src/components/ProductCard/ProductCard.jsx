import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex space-x-2">
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            New
          </span>
        )}
        {product.isSale && (
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Sale
          </span>
        )}
      </div>

      {/* Product Image */}
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        
        {/* Rating */}
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={`h-4 w-4 ${
                  rating < product.rating
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center justify-between">
          {product.isSale ? (
            <>
              <p className="text-sm font-medium text-gray-900">
                ${product.salePrice.toFixed(2)}
              </p>
              <p className="text-sm font-medium text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-medium text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;