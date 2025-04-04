import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductCarousel = ({ categories, visibleItems = 5 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate when not hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex(prev => (prev + 1) % categories.length);
      }
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [categories.length, isHovered]);

  // Get visible categories with loop-around
  const visibleCategories = Array.from({ length: visibleItems }, (_, i) => {
    const index = (currentIndex + i) % categories.length;
    return categories[index];
  });

  return (
    <div 
      className="relative py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center gap-6">
        {visibleCategories.map((category) => (
          <Link 
            key={category.id} 
            to={`/category/${category.id}`}
            className="group block w-48 text-center"
          >
            <div className="relative overflow-hidden rounded-full bg-gray-100 w-40 h-40 mx-auto mb-3">
              <img
                src="/src/assets/Laptop3.png"
                alt={category.name}
                className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-medium transition-colors group-hover:text-blue-500">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex % categories.length 
                ? 'bg-blue-500 w-4' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;