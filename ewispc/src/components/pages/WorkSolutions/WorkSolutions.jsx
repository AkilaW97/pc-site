import React, { useState } from 'react';
import Header from "../../../components/Header";
import ProductCarousel from '../../../components/ProductCarousel';
import productsData from '../../../data/products.json';

const WorkSolutions = () => {
  const workCategories = productsData.categories.filter(cat => 
    cat.solutions.includes("work")
  );
  
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState(workCategories[0]);

  // Handle category selection from carousel
  const handleCategorySelect = (categoryId) => {
    const category = workCategories.find(cat => cat.id === categoryId);
    if (category) {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">Work Solutions</h2>
        
        {/* Featured Carousel - Pass the selection handler */}
        <div className="mb-16">
          <ProductCarousel 
            categories={workCategories} 
            itemsPerSlide={5}
            onSelectCategory={handleCategorySelect}
          />
        </div>

        {/* Products Grid for Selected Category */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-6">{selectedCategory.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.products.map(product => (
                <div 
                  key={product.id} 
                  className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors border"
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img
                      src="/src/assets/Laptop3.png"
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-lg">{product.name}</h4>
                    <p className="text-gray-500 text-sm line-clamp-2 mt-1">
                      {product.description}
                    </p>
                    <div className="mt-2">
                      <button className="text-blue-500 text-sm hover:underline">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSolutions;