import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import productsData from "../../../data/products.json";

const HomeSolutions = () => {
  const homeCategories = productsData.categories.filter((cat) =>
    cat.solutions.includes("work")
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Add Header here */}
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Work Solutions</h1>
        
        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {homeCategories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="h-40 flex items-center justify-center mb-4">
                <img 
                  src={`/placeholder-${category.id}.jpg`} // Dynamic placeholder
                  alt={category.name}
                  className="h-full object-contain"
                />
              </div>
              <h2 className="font-semibold text-lg text-gray-800">
                {category.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSolutions;