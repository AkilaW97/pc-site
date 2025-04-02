const ProductCard = ({ product }) => {
    return (
      <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-40 object-contain mb-4"
        />
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-gray-600 text-sm my-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold">${product.price}</span>
          <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };