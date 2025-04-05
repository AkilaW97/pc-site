import React, { useState, useEffect } from 'react';

const ProductCarousel = ({ categories, visibleItems = 5, onSelectCategory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate when not hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex(prev => (prev + 1) % categories.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [categories.length, isHovered]);

  // Get visible categories with loop-around
  const visibleCategories = Array.from({ length: visibleItems }, (_, i) => {
    const index = (currentIndex + i) % categories.length;
    return categories[index];
  });

  const handleClick = (categoryId) => {
    onSelectCategory(categoryId);
  };

  const goNext = () => {
    setCurrentIndex(prev => (prev + 1) % categories.length);
  };

  const goPrev = () => {
    setCurrentIndex(prev => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div 
      className="relative py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows */}
      <button 
        onClick={goPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10
        bg-white p-2 rounded-full shadow-md hover:bg-gray-100
        transition-colors duration-200 focus:outline-none"
        aria-label="Previous category"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10
        bg-white p-2 rounded-full shadow-md hover:bg-gray-100
        transition-colors duration-200 focus:outline-none"
        aria-label="Next category"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Items */}
      <div className="flex justify-center gap-6 px-12">
        {visibleCategories.map((category) => (
          <button 
            key={category.id}
            onClick={() => handleClick(category.id)}
            className="group block w-48 text-center focus:outline-none
            transition-transform duration-300 hover:scale-105"
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
          </button>
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
            aria-label={`Go to category ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;