import React, { useState } from 'react';
import Header from "../../../components/Header";
import ProductCarousel from '../../../components/ProductCarousel';
import productsData from '../../../data/products.json';

const workSolutions = () => {
  const workCategories = productsData.categories.filter(cat =>
    cat.solutions.includes("work")
  );
 
  const [selectedCategory, setSelectedCategory] = useState(workCategories[0]);

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
       
        <div className="mb-16">
          <ProductCarousel
            categories={workCategories}
            itemsPerSlide={5}
            onSelectCategory={handleCategorySelect}
          />
        </div>

        {/* Enhanced Products Grid */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h3 className="text-2xl font-bold mb-8 text-center">{selectedCategory.name}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {selectedCategory.products.map((product, index) => (
              <div
                key={product.id}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-20px)]"
              >
                <div
                  className="h-full flex flex-col p-4 border rounded-lg transition-all duration-300
                  hover:shadow-lg hover:border-blue-100 hover:translate-y-[-4px]
                  bg-white"
                >
                  <div className="flex-grow flex items-center justify-center mb-4 h-40">
                    <img
                      src="/src/assets/Laptop3.png"
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-medium text-lg mb-1">{product.name}</h4>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                      {product.description}
                    </p>
                    <button className="text-blue-500 text-sm hover:underline transition-colors">
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
  );
};

export default workSolutions;