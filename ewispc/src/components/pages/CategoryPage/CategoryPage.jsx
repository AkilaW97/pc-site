import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import SortDropdown from '../../components/SortDropdown/SortDropdown';

const CategoryPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Premium Headphones',
      price: 299.99,
      rating: 4.5,
      reviewCount: 128,
      image: '/images/headphones.jpg',
      isNew: true,
      isSale: false,
    },
    {
      id: 2,
      name: 'Wireless Earbuds',
      price: 159.99,
      rating: 4.2,
      reviewCount: 86,
      image: '/images/earbuds.jpg',
      isNew: false,
      isSale: true,
      salePrice: 129.99,
    },
    // Add more products as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('featured');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Audio Devices</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">24 products</span>
          <SortDropdown 
            sortOption={sortOption} 
            setSortOption={setSortOption} 
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <CategoryFilter 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-500 hover:bg-gray-200">
                Previous
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                3
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-500 hover:bg-gray-200">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;