import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../../components/Header";
import ProductCarousel from '../../../components/ProductCarousel';
import productsData from '../../../data/products.json';

const HomeSolutions = () => {
  const homeCategories = productsData.categories.filter((cat) =>
    cat.solutions.includes("home")
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> 

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Home Solutions</h1>
        <p className="text-gray-600 mb-8">
          Bringing you the latest in electronics with exceptional service.
        </p>

        {/* Category Navigation Menu */}
        <div className="flex space-x-4 mb-8 overflow-x-auto py-2">
          {homeCategories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="whitespace-nowrap px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Featured Products Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <ProductCarousel 
            products={homeCategories.flatMap(cat => cat.products).slice(0, 3)} 
          />
        </section>

        {/* Category Sections */}
        {homeCategories.map((category) => (
          <section key={category.id} className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              <Link 
                to={`/category/${category.id}`} 
                className="text-blue-500 hover:underline"
              >
                View All
              </Link>
            </div>
            <ProductCarousel products={category.products} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default HomeSolutions;