const Features = () => {
    const features = [
      {
        title: "Fast & Free Shipping",
        description: "Get your order delivered quickly with our free shipping service on all products.",
        icon: "🚚",
      },
      {
        title: "Easy to Shop",
        description: "Our intuitive platform makes finding the perfect tech products effortless.",
        icon: "🛒",
      },
      {
        title: "24/7 Support",
        description: "Our tech experts are available round the clock to assist you with any queries.",
        icon: "🛟",
      },
      {
        title: "Hassle-Free Returns",
        description: "Not satisfied? Return any product within 30 days for a full refund.",
        icon: "↩️",
      },
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best tech products with exceptional service to enhance your digital lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;