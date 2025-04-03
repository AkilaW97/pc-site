import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../../components/Header";
import ProductCarousel from '../../../components/ProductCarousel';
import productsData from '../../../data/products.json';

const HomeSolutions = () => {
  const homeCategories = productsData.categories.filter((cat) =>
    cat.solutions.includes("home")
  );

  // Categories to display in the top navigation
  const topCategories = [
    { id: 'electronics', name: 'Electronics' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'cosmetics', name: 'Cosmetics' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'watches', name: 'Watches' },
    { id: 'decor', name: 'Decor' },
    { id: 'accessories', name: 'Accessories' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Top Category Navigation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {topCategories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="flex flex-col items-center justify-center min-w-[100px] p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                <span className="text-sm text-center">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products Section */}
        {/* <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <Link to="/featured" className="text-blue-500 text-sm hover:underline">
              View All
            </Link>
          </div>
          <ProductCarousel 
            products={homeCategories.flatMap(cat => cat.products).slice(0, 6)} 
          />
        </section> */}

        {/* Category Sections */}
        {homeCategories.map((category) => (
          <section key={category.id} className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              {/* <Link 
                to={`/category/${category.id}`} 
                className="text-blue-500 text-sm hover:underline"
              >
                View All
              </Link> */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.products.slice(0, 4).map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 mb-4 flex items-center justify-center">
                  <img
                      src="/src/assets/Laptop3.png" // Using absolute path
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                  />
                  </div>
                  <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HomeSolutions;