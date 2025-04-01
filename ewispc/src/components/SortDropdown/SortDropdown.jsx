import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const sortOptions = [
  { name: 'Featured', value: 'featured' },
  { name: 'Price: Low to High', value: 'price-asc' },
  { name: 'Price: High to Low', value: 'price-desc' },
  { name: 'Newest', value: 'newest' },
  { name: 'Highest Rated', value: 'rating' },
];

const SortDropdown = ({ sortOption, setSortOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = sortOptions.find(option => option.value === sortOption);

  return (
    <div className="relative">
      <button
        type="button"
        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sort: {selectedOption?.name || 'Featured'}
        <ChevronDownIcon
          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setSortOption(option.value);
                  setIsOpen(false);
                }}
                className={`block px-4 py-2 text-sm w-full text-left ${
                  sortOption === option.value
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;