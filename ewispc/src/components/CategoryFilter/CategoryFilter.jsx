import React from 'react';

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'headphones', name: 'Headphones' },
  { id: 'earbuds', name: 'Earbuds' },
  { id: 'speakers', name: 'Speakers' },
  { id: 'microphones', name: 'Microphones' },
];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full text-left px-3 py-2 rounded-md ${
                selectedCategory === category.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Price Filter - you can expand this */}
      <div className="mt-8">
        <h3 className="font-medium text-gray-900 mb-4">Price</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="price-all"
              name="price"
              type="radio"
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="price-all" className="ml-3 text-sm text-gray-600">
              All Prices
            </label>
          </div>
          {/* Add more price ranges as needed */}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;