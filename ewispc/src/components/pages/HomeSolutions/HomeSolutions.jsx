import React from 'react';
import Header from "../../../components/Header";
import ProductCarousel from '../../../components/ProductCarousel';
import productsData from '../../../data/products.json';

const HomeSolutions = () => {
  const homeCategories = productsData.categories.filter(cat => 
    cat.solutions.includes("home")
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">Home Solutions</h2>
        
        {/* Featured Carousel */}
        <div className="mb-16">
          <ProductCarousel categories={homeCategories} itemsPerSlide={5} />
        </div>

        {/* All Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeCategories.map(category => (
            <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                <div className="space-y-4">
                  {category.products.slice(0, 3).map(product => (
                    <div key={product.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <img
                          src="/src/assets/Laptop3.png"
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{product.name}</h4>
                        <p className="text-gray-500 text-sm line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSolutions;