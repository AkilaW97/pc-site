const Products = () => {
    const products = [
      {
        name: "UltraBook Pro",
        price: 999.99,
        description: "Powerful laptop with 16GB RAM and 1TB SSD for professionals.",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
      },
      {
        name: "Quantum Smart TV",
        price: 799.99,
        description: "65-inch 4K HDR Smart TV with voice control and streaming apps.",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
      },
      {
        name: "Interactive SmartBoard",
        price: 1299.99,
        description: "86-inch touch screen for collaborative work and education.",
        image: "https://images.unsplash.com/photo-1587353166575-c5a7df558baf",
      },
    ];
  
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Electronics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium selection of cutting-edge technology designed to enhance your digital experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Products;
  