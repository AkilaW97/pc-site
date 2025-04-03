import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={product.images[0]} 
        alt={product.name} 
        className="w-full h-40 object-contain mb-4"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {product.description}
      </p>
      <Link
        to={`/product/${product.id}`}
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;