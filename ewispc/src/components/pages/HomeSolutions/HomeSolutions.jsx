import React, { useState } from 'react';
import Header from "../../../components/Header";
import ProductCarousel from '../../../components/ProductCarousel';
import productsData from '../../../data/products.json';

const HomeSolutions = () => {
  const homeCategories = productsData.categories.filter(cat => 
    cat.solutions.includes("home")
  );
  
  const [selectedCategory, setSelectedCategory] = useState(homeCategories[0]);

  const handleCategorySelect = (categoryId) => {
    const category = homeCategories.find(cat => cat.id === categoryId);
    if (category) {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <div className="mb-4 bg-green-200 rounded-xl shadow-sm p-6">
        <div className="bg-green-200 rounded-xl  mb-4 py-6">
          <h2 className="text-3xl font-bold text-center text-black">Home Solutions</h2>
        </div>
        
          <ProductCarousel 
            categories={homeCategories} 
            itemsPerSlide={5}
            onSelectCategory={handleCategorySelect}
          />
        </div>

        {/* Products Grid with 3D Effects */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h3 className="text-2xl font-bold mb-8 text-center">{selectedCategory.name}</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {selectedCategory.products.map((product) => (
              <div 
                key={product.id}
                className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] xl:w-[300px] perspective-1000"
              >
                {/* 3D Card Container */}
                <div className="h-full transform-style-preserve-3d transition-transform duration-900 ease-[cubic-bezier(0.4,0,0.2,1)] hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="h-full flex flex-col p-4 border rounded-lg bg-white backface-hidden transform rotate-y-0 shadow-sm">
                    <div className="flex-grow flex items-center justify-center mb-4 h-40">
                      <img
                        src="/src/assets/Laptop3.png"
                        alt={product.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-medium text-lg mb-1">{product.name}</h4>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div className="absolute inset-0 h-full flex flex-col p-4 border rounded-lg bg-gray-50 backface-hidden transform rotate-y-180 shadow-sm">
                    <div className="text-center h-full flex flex-col">
                      <h4 className="font-medium text-lg mb-4">{product.name}</h4>
                      <table className="w-full text-sm mb-4 flex-grow">
                        <tbody>
                          {Object.entries(product.specs).slice(0, 5).map(([key, value]) => {
                            const displayValue = Array.isArray(value) 
                              ? value[0]
                              : typeof value === 'object' && value !== null
                                ? Object.values(value)[0] || '-'
                                : value || '-';
                            
                            return (
                              <tr key={key} className="border-b border-gray-200">
                                <td className="py-2 font-semibold text-left pl-2">{key}</td>
                                <td className="py-2 text-right pr-2">{displayValue}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <div className="text-blue-500 text-lg mt-auto pb-2">View Details</div>
                    </div>
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

export default HomeSolutions;