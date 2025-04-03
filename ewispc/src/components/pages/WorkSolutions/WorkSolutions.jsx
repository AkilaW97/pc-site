import React from "react";
import { Link } from "react-router-dom";
import productsData from "../../../data/products.json";

const WorkSolutions = () => {
  const homeCategories = productsData.categories.filter((cat) =>
    cat.solutions.includes("work")
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Work Solutions</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {homeCategories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="border p-4 rounded-lg hover:bg-gray-50"
          >
            <h2 className="font-medium">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorkSolutions;